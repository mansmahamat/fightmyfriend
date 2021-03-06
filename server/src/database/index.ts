import { MongoClient } from 'mongodb'
import { Database, User, Listing, Booking } from '../lib/types';


const url = `mongodb+srv://mansdesmez:${process.env.DB_USER_PASSWORD}@cluster0.smurv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = client.db('main')

    return {
        listings : db.collection<Listing>('listings'),
        users : db.collection<User>('users'),
        bookings : db.collection<Booking>('bookings')
    }
}