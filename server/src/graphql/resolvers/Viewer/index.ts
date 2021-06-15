/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import crypto from 'crypto';
import { IResolvers } from 'apollo-server-express';
import { Viewer, Database, User } from '../../../lib/types'
import { Google } from '../../../lib/api'
import { LogInArgs } from './types'

const logInViaGoogle = async (code: string, token: string, db: Database): Promise<User | undefined> => {
    const {user} = await Google.logIn(code)

    if(!user) {
        throw new Error("Google login error")
    }

    //Name/Photo/Email list
    const userNamesList = user.names && user.names.length ? user.names : null;
    const userPhotosList = user.photos && user.photos.length ? user.photos : null;
    const userEmailsList = user.emailAddresses && user.emailAddresses.length ? user.emailAddresses : null;

    //User display name
    const userName = userNamesList ? userNamesList[0].displayName : null

    //user ID
    const userId = userNamesList && userNamesList[0].metadata && userNamesList[0].metadata.source ? userNamesList[0].metadata.source.id : null

    //user Avatar
    const userAvatar = userPhotosList && userPhotosList[0].url ? userPhotosList[0].url : null

    //user Email 
    const userEmail = userEmailsList && userEmailsList[0].value ? userEmailsList[0].value : null

    if (!userId || !userEmail || !userAvatar || !userEmail || !userName) {
        throw new Error('Google Login Error');
    }

    const updateRes = await db.users.findOneAndUpdate (
        { _id: userId},
        {
            $set: {
                name: userName,
                avatar: userAvatar,
                contact: userEmail,
                token
            }
        },
        { returnOriginal: false }
    )

    let viewer = updateRes.value

    if (!viewer) {
        const insertResult = await db.users.insertOne({ 
            _id: userId,
            name: userName,
            avatar: userAvatar,
            contact: userEmail,
            token,
            income: 0,
            bookings: [],
            listings: []
        })

        viewer = insertResult.ops[0]
    }

    return viewer;
      
}

export const viewerResolvers: IResolvers = {
    Query: {
        authUrl: (): string => {
            try {
                return Google.authUrl
            } catch (error) {
                throw new Error('Failed to query Google Auth' + ' ' + error.message)
            }
        }
    },
    Mutation: {
        logIn: async (_root: undefined, {input}: LogInArgs, {db}: {db: Database}): Promise<Viewer> => {
            try {
                const code = input ? input.code : null
                const token = crypto.randomBytes(16).toString('hex')

                const viewer: User | undefined= code ? await logInViaGoogle(code, token, db) : undefined;

                if (!viewer) {
                    return {didRequest: true}
                }

                return {
                    _id: viewer._id,
                    token: viewer.token,
                    avatar: viewer.avatar,
                    walletId: viewer.walletId,
                    didRequest: true,
                }
            } catch (error) {
                throw new Error('Failed to log in' + ' ' + error.message)
            }
        },
        logOut: (): Viewer => {
            try {
                return { didRequest: true }
            } catch (error) {
                throw new Error('Failed to log out' + ' ' + error)
            }
        }
    },
    Viewer: {
        id: (viewer: Viewer): string | undefined => {return viewer._id},
        hasWallet: (viewer: Viewer): boolean | undefined => {return viewer.walletId ? true : undefined},

    }
}
