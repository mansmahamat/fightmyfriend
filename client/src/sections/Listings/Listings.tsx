import React, {useState} from 'react';
import { server } from '../../common/api'
import { 
    ListingsData,
    DeleteListingData,
    DeleteListingVariables,
    Listing } from './types';

const LISTINGS = `
    query Listing {
        listings {
            id
            title
            address
            price
            rating
        }
    }
`;

const DELETE_LISTING = `
    mutation DeleteListing($id : ID!) {
        deleteListings(id: $id) {
            id
        }
    }
`;

interface Props {
    title: String
}
 
export const Listings = ({title}: Props) => {

    const [listings, setListings] = useState<Listing[] | null>(null)

    const fetchListings = async () => {
        const {data} = await server.fetch<ListingsData>({ query: LISTINGS });
        setListings(data.listings)
    }

    const deleteListing = async (id : string) => {
        await server.fetch<DeleteListingData, DeleteListingVariables>({ 
            query: DELETE_LISTING,
            variables: {
                id
            }
         });
         fetchListings()
    }

    const listingList = listings ? (
        <ul>
            {listings.map(listing => {
        return (
        <li key={listing.id}>
            {listing.title}
            <button onClick={() => deleteListing(listing.id)}>delete club</button>
        </li>
        )
    })}
        </ul>
          ): null
    
    return ( 
        <div>
            <h2>{title}</h2>
            <button onClick={fetchListings}>Query club</button>
            <div>
                {listingList}
            </div>
        </div>
     );
}