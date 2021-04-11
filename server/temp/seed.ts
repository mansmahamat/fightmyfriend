// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ObjectID } from 'mongodb';
import { connectDatabase } from '../src/database';
import { Listing } from '../src/lib/types';

const seed = async () => {
    try {
        console.log('seed');

        const db = await connectDatabase();

        const listings: Listing[] = [
            {
                _id: new ObjectID(),
                title:
                    "European top team",
                image:
                    "https://images.pexels.com/photos/6295987/pexels-photo-6295987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                address: "3 rue Alfred Nobel, 75000 Paris",
                price: 10,
                rating: 5
            },
            {
                _id: new ObjectID(),
                title: "MMA Jumbo",
                image:
                    "https://images.pexels.com/photos/5424717/pexels-photo-5424717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                address:
                    "100 Hollywood Hills Dr, Los Angeles, California",
                price: 10,
                rating: 4
            },
            {
                _id: new ObjectID(),
                title:
                    "All Stars",
                image:
                    "https://images.pexels.com/photos/6740335/pexels-photo-6740335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                address: "200 Sunnyside Rd, San Fransisco, California",
                price: 25,
                rating: 3
            }
        ];

        for (const listing of listings){
            await db.listings.insertOne(listing);
        }

        console.log('succes');

    } catch (error) {
        throw new Error("Failed");
        
    }
}

seed()