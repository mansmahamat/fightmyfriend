import { useEffect, useReducer, useState, useCallback } from 'react';
import { server } from './server';

interface State<TData> {
    data: TData | null;
    loading: boolean;
    error: boolean;
}

type Action<TData> = {type: 'FETCH'} | {type: 'FETCH_SUCCESS'; payload: TData} | {type: 'FETCH_ERROR'} 

interface QueryResult<TData> extends State<TData> {
    refetch: () => void;
}

const reducer = <TData>(state: State<TData>, action: Action<TData>): State<TData> => {
    switch (action.type) {
        case 'FETCH':
            return {...state, loading : true} ;
        case 'FETCH_SUCCESS':
            return {data: action.payload, loading : false, error: false};
        case 'FETCH_ERROR':
            return {...state, loading : false, error: true};
        default:
            throw new Error();
    }
}

export const useQuery = <TData = any>(query: string): QueryResult<TData> => {
    const [state, dispatch] = useReducer()
    
    const [state, setstate] = useState<State<TData>>({
        data: null,
        loading: false,
        error: false
    });

    const fetch = useCallback(() => {
        const fetchApi = async () => {
            try {
                setstate({ data: null, loading: true, error: false });

                const { data, error } = await server.fetch<TData>({ query });

                if (error && error.length){
                    throw new Error(error[0].message);
                    
                }


                setstate({ data, loading: false, error: false })
            } catch (error) {
                setstate({ data: null, loading: false, error: true });
                throw console.error(error);
            }

        };

        fetchApi();
    }, [query]);



    useEffect(() => {
        fetch();
    }, [fetch]);

    return { ...state, refetch: fetch };
}