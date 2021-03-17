interface Listing {
    id: string
    title: string
    image: string
    address: string
    price: number
    rating: number
}

export const listings: Listing[] = [
    {
        id: "001",
        title:
            "European top team",
        image:
            "https://images.pexels.com/photos/6295987/pexels-photo-6295987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        address: "3 rue Alfred Nobel, 75000 Paris",
        price: 10,
        rating: 5
    },
    {
        id: "002",
        title: "MMA Jumbo",
        image:
            "https://images.pexels.com/photos/5424717/pexels-photo-5424717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        address:
            "100 Hollywood Hills Dr, Los Angeles, California",
        price: 10,
        rating: 4
    },
    {
        id: "003",
        title:
            "All Stars",
        image:
            "https://images.pexels.com/photos/6740335/pexels-photo-6740335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        address: "200 Sunnyside Rd, San Fransisco, California",
        price: 25,
        rating: 3
    }
];