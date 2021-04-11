import {IResolvers} from 'apollo-server-express'
import { ObjectID } from 'bson';
import { Database, Listing } from '../../../lib/types';


export const listingResolvers: IResolvers = {
    Query: {
        listings: async (_root: undefined, _args: undefined, {db}: { db:Database}): Promise<Listing[]> => {
            return await db.listings.find({}).toArray()
        }
    },
    Mutation: {
        deleteListings: async (_root: undefined, { id }: {id: string}, {db}: { db:Database}): Promise<Listing> => {
            const deleteRes = await db.listings.findOneAndDelete({
                _id: new ObjectID(id)
            });

            if (!deleteRes.value){
                throw new Error('Failed to delete')
            }
            return deleteRes.value
        }
    },

    Listing: {
        id: (listing: Listing) => listing._id
    }
}