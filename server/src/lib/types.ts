import {ObjectID, Collection} from 'mongodb'

export interface Listing {
    _id: ObjectID
    title: string
    image: string
    address: string
    price: number
    rating: number
}

export interface Database {
    listings: Collection<Listing>;
}