import { QueryClient } from '@tanstack/react-query';
import {useState} from "react";

export function useReactQueryClient() {
    const [queryClient] = useState(function () {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                },
            },
        });
    });

    return queryClient;
}