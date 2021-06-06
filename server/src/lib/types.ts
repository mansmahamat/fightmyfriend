import {ObjectID, Collection} from 'mongodb'

export interface bookingsIndexMonth {
    [key: string] : boolean
}
export interface bookingsIndexYear {
    [key: string] : bookingsIndexMonth
}

export interface bookingsIndex {
    [key: string] : bookingsIndexYear
}
export interface Listing {
    _id: ObjectID;
    title: string;
    description: string;
    image: string;
    host: string;
    type: string;
    address: string;
    country: string;
    city: string;
    admin: string;
    bookings : ObjectID[];
    bookingsIndex: bookingsIndex;
    price: number;
}

export interface Booking {
    _id: ObjectID;
    listing : ObjectID[];
    tenant: string;
    checkIn: string;
    checkOut: string;
}

export interface User {
    _id: string;
    token: string;
    name: string;
    avatar: string;
    contact: string;
    walletId?: string;
    income: number;
    bookings : ObjectID[];
    listings : ObjectID[];
}

export interface Database {
    listings: Collection<Listing>;
    users: Collection<User>;
    bookings: Collection<Booking>
}