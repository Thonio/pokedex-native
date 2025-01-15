import { useQuery, UseQueryResult } from "@tanstack/react-query";

const URL = 'https://pokeapi.co/api/v2/'

export default function useFetchQuery(path: string): UseQueryResult<any, Error> {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      return fetch(URL + path).then(res => res.json()).catch(err => console.log("Error :", err))
    }
  })
}
