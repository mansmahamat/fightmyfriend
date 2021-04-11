export interface Listing {
    id: string
    title: string
    image: string
    address: string
    price: number
    rating: number
}

export interface ListingsData {
    listings: Listing[];
}

export interface DeleteListingData {
    deleteListings: Listing;
}

export interface DeleteListingVariables {
    id: string;
}