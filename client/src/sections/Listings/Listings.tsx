import React from 'react';
import { useQuery, useMutation } from '../../common/api'
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

    const [deleteListings, {loading: deleteListingsLoading, error: deleteListingsError}] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING)

    const handleDeleteListing = async (id : string) => {
        await deleteListings({ id })

         refetch()
    };

    const listings = data ? data.listings : null;

    const listingList = listings ? (
        <ul>
            {listings.map(listing => {
        return (
        <li key={listing.id}>
            {listing.title}
            <button onClick={() => handleDeleteListing(listing.id)}>delete club</button>
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

    const deleteListingsLoadingMessage = deleteListingsLoading
    ? <h4>Deletion in progress...</h4> : null;

    const deleteListingsErrorMessage = deleteListingsError
    ? <h4>Something went wrong...</h4> : null;

    return ( 
        <div>
            <h2>{title}</h2>
            <div>
                {listingList}
                {deleteListingsErrorMessage}
                {deleteListingsLoadingMessage}
            </div>
        </div>
     );
}