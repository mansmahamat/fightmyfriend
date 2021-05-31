import { useState } from 'react';
import { server } from './server';

interface State<TData> {
    data: TData | null;
    loading: boolean;
    error: boolean;
}

type MutationTuple<TData, TVariables> = [(variables?: TVariables | undefined) => Promise<void>, State<TData>]

export const useMutation = <TData = any, TVariables= any>(query: string): MutationTuple<TData, TVariables> => {
    const [state, setstate] = useState<State<TData>>({
        data: null,
        loading: false,
        error: false
    });

    const fetch = async (variables?: TVariables) => {
        try {
            setstate({ data: null, loading: true, error: false });

            const {data, error} = await server.fetch<TData, TVariables>({query, variables})

            if(error && error.length){
                throw new Error(error[0].message);
            }

            setstate({ data, loading: false, error: false });


        } catch (error) {
            setstate({ data: null, loading: false, error: true });
            throw console.error(error);
        }
    }

    return [ fetch, state ];
}