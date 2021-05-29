import {useEffect, useState, useCallback} from 'react';
import {server} from './server';

interface State<TData>{
    data: TData | null;
    loading: boolean;
}

export const useQuery = <TData = any>(query: string)=>{
    const [state, setstate] = useState<State<TData>>({
        data: null,
        loading: false
    });

    const fetch = useCallback(() => {
        const fetchApi = async () => {
            setstate({data: null, loading: true})
            const {data} = await server.fetch<TData>({ query});
            setstate({data, loading: false})
        };

        fetchApi();
    }, []);

    

    useEffect(() => {
        fetch();
    }, [fetch]);

    return {...state, refetch: fetch};
}