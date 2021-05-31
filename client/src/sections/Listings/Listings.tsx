import React from 'react';
import { server, useQuery } from '../../common/api'
import { 
    ListingsData,
    DeleteListingData,
    DeleteListingVariables,
     } from './types';

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
    const {data, refetch, error, loading} = useQuery<ListingsData>(LISTINGS);

    const deleteListing = async (id : string) => {
        await server.fetch<DeleteListingData, DeleteListingVariables>({ 
            query: DELETE_LISTING,
            variables: {
                id
            }
         });

         refetch()
    };

    const listings = data ? data.listings : null;

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

          if (error) {
            return <h2>errrooo... try again</h2>
        }


    if (loading) {
        return <h2>LOADING</h2>
    }

    return ( 
        <div>
            <h2>{title}</h2>
            <div>
                {listingList}
            </div>
        </div>
     );
}