import { useInfiniteQuery, UseInfiniteQueryResult, useQuery, UseQueryResult } from "@tanstack/react-query";

const URL = 'https://pokeapi.co/api/v2/'

export default function useFetchQuery(path: string): UseQueryResult<any, Error> {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      return fetch(URL + path).then(res => res.json()).catch(err => console.log("Error :", err))
    }
  })
}

export function useInfiniteFetchQuery(path: string): UseInfiniteQueryResult<any, Error> {
  return useInfiniteQuery({
    queryKey: [path],
    initialPageParam: URL + path,
    queryFn: async ({ pageParam }) => {
      return fetch(pageParam).then(res => res.json()).catch(err => console.log('ERRRRROR: ', err))
    },
    getNextPageParam: (lastPage) => {
      if ('next' in lastPage) {
        return lastPage.next
      }

      return null
    }
  })
}
