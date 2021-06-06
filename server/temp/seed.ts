// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { Listing, User } from '../src/lib/types';

const listings: Listing[] = [
    {
        _id: new ObjectId("5d378db94e84753160e08b30"),
        title: "MMA TOP TEAM",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "MMA",
        image: "https://images.pexels.com/photos/6295987/pexels-photo-6295987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        host: "5d378db94e84753160e08b57",
        address: "100 Hollywood Hills Dr",
        country: "USA",
        city: "Los Angeles",
        admin: "Torres",
        price: 15,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b31"),
        title: "Canada Bjj",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "BJJ",
        image: "https://images.unsplash.com/photo-1582234407297-a1b4e08f4e81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1tYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        host: "5d378db94e84753160e08b55",
        address: "7009 Strawberry Street, Toronto, ON, CA",
        country: "Canada",
        admin: "Ontario",
        city: "Toronto",
        price: 25,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b32"),
        title: "Fance Fight",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "MMA",
        image: "https://images.unsplash.com/photo-1582234407297-a1b4e08f4e81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1tYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        host: "5d378db94e84753160e08b57",
        address: "70 rue Paul Ferrond",
        country: "France",
        admin: "Ile de France",
        city: "Paris",
        price: 25,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b54"),
        title: "Cancùn Fight",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "Boxe",
        image: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym94aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        host: "5d378db94e84753160e08b56",
        address: "100 Punta Nizuc Rd., Cancún, Mexico",
        country: "Mexico",
        admin: "Quintana Roo",
        city: "Cancún",
        price: 25,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b4c"),
        title: "Peaky Blinders FC",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "MMA",
        image: "https://images.unsplash.com/photo-1615117079816-077715446270?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1tYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        host: "5d378db94e84753160e08b55",
        address: "44  Greyfriars Ave, London, United Kingdom",
        country: "United Kingdom",
        admin: "England",
        city: "London",
        price: 25,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b36"),
        title: "Scandinavia Top Team",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "MMA",
        image: "https://images.unsplash.com/photo-1615117079816-077715446270?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1tYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        host: "5d378db94e84753160e08b57",
        address: "44  Greyfriars Ave",
        country: "Sweden",
        admin: "Stockholm",
        city: "Stockholm",
        price: 10,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b3b"),
        title: "Dubai Top Team",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "BJJ",
        image: "https://images.unsplash.com/photo-1610360277501-ea948686dc52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmpqfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        host: "5d378db94e84753160e08b56",
        address: "19 Jumeirah Ave, Dubai, United Arab Emirates",
        country: "United Arab Emirates",
        admin: "Dubai",
        city: "Dubai",
        price: 30,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b33"),
        title: "InFight",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "K1",
        image: "https://images.unsplash.com/photo-1526793248754-cf6014a378e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80",
        host: "5d378db94e84753160e08b59",
        address: "1 Oranje street, Amsterdam, Netherlands",
        country: "Netherlands",
        admin: "Amsterdam",
        city: "Amsterdam",
        price: 10,
        bookings: [],
        bookingsIndex: {},
    },
    {
        _id: new ObjectId("5d378db94e84753160e08b3f"),
        title: "Bangkok Top Team",
        description: "MMA is a full contact sport that allows a wide range of fighting techniques including, striking and grappling from various martial arts & disciplines including Boxing, Wrestling, Brazilian Jiu Jitsu, Karate & Muay Thai. Professional MMA fights are legal and regulated by state athletic commissions in all 50 states.",
        type: "Muay Thai",
        image: "https://images.unsplash.com/photo-1601039834205-4e3f1e932f5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        host: "5d378db94e84753160e08b58",
        address: "190 Koh phiphi street, Bangkok, Thailand",
        country: "Thailand",
        admin: "Bangkok",
        city: "Bangkok",
        price: 8,
        bookings: [],
        bookingsIndex: {},
    },
];
const users: User[] = [
    {
        _id: "5d378db94e84753160e08b55",
        token: "token_************",
        name: "Tony Jire",
        avatar:
          "https://images.unsplash.com/photo-1611816153281-2496f81b2fc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZpZ2h0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        contact: "tony@fightmyfriend.com",
        walletId: "acct_************",
        income: 723796,
        bookings: [],
        listings: [
            new ObjectId("5d378db94e84753160e08b31"),
            new ObjectId("5d378db94e84753160e08b4b"),
            new ObjectId("5d378db94e84753160e08b4c")
        ]
    },
    {
        _id: "5d378db94e84753160e08b56",
        token: "token_************",
        name: "Marta Aztran",
        avatar:
          "https://images.unsplash.com/photo-1584863301515-39ee15adba8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpZ2h0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        contact: "Marta@fightmyfriend.com",
        walletId: "acct_************",
        income: 256144,
        bookings: [],
        listings: [
            new ObjectId("5d378db94e84753160e08b37"),
            new ObjectId("5d378db94e84753160e08b38"),
            new ObjectId("5d378db94e84753160e08b3a"),
            new ObjectId("5d378db94e84753160e08b3b"),
            new ObjectId("5d378db94e84753160e08b3d"),
            new ObjectId("5d378db94e84753160e08b41"),
            new ObjectId("5d378db94e84753160e08b43"),
            new ObjectId("5d378db94e84753160e08b4a"),
            new ObjectId("5d378db94e84753160e08b50"),
            new ObjectId("5d378db94e84753160e08b51"),
            new ObjectId("5d378db94e84753160e08b53"),
            new ObjectId("5d378db94e84753160e08b54")
        ]
    },
    {
        _id: "5d378db94e84753160e08b57",
        token: "token_************",
        name: "Patrick Dontet",
        avatar:
          "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        contact: "patrick@fightmyfriend.com",
        walletId: "acct_************",
        income: 272359,
        bookings: [],
        listings: [
            new ObjectId("5d378db94e84753160e08b30"),
            new ObjectId("5d378db94e84753160e08b32"),
            new ObjectId("5d378db94e84753160e08b34"),
            new ObjectId("5d378db94e84753160e08b35"),
            new ObjectId("5d378db94e84753160e08b36"),
            new ObjectId("5d378db94e84753160e08b3c"),
            new ObjectId("5d378db94e84753160e08b3e"),
            new ObjectId("5d378db94e84753160e08b47"),
            new ObjectId("5d378db94e84753160e08b48"),
            new ObjectId("5d378db94e84753160e08b4d")
        ]
    },
    {
        _id: "5d378db94e84753160e08b58",
        token: "token_************",
        name: "Daniel Fugaz",
        avatar:
          "https://images.unsplash.com/photo-1610543123792-135b26601797?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlnaHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        contact: "daniel@fightmyfriend.com",
        walletId: "acct_************",
        income: 465043,
        bookings: [],
        listings: [
            new ObjectId("5d378db94e84753160e08b3f"),
            new ObjectId("5d378db94e84753160e08b40"),
            new ObjectId("5d378db94e84753160e08b44")
        ]
    },
    {
        _id: "5d378db94e84753160e08b59",
        token: "token_************",
        name: "Mohammed Khaled",
        avatar:
          "https://images.unsplash.com/photo-1595838788874-a9dbc04f3d7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZpZ2h0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        contact: "mohamed@fightmyfriend.com",
        walletId: "acct_************",
        income: 104347,
        bookings: [],
        listings: [
            new ObjectId("5d378db94e84753160e08b33"),
            new ObjectId("5d378db94e84753160e08b39"),
            new ObjectId("5d378db94e84753160e08b42"),
            new ObjectId("5d378db94e84753160e08b45"),
            new ObjectId("5d378db94e84753160e08b46"),
            new ObjectId("5d378db94e84753160e08b49"),
            new ObjectId("5d378db94e84753160e08b4e"),
            new ObjectId("5d378db94e84753160e08b4f"),
            new ObjectId("5d378db94e84753160e08b52")
        ]
    }
];

const seed = async () => {
    try {
        console.log('seed');

        const db = await connectDatabase();

        

        for (const listing of listings){
            await db.listings.insertOne(listing);
        }

        for (const user of users){
            await db.users.insertOne(user);
        }

        console.log('succes');

    } catch (error) {
        throw new Error("Failed");
        
    }
}

seed()