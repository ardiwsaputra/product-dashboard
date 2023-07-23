import { fetcher } from "@/api";
import useSWR from "swr";
 
function useFetch<T>(path: string) {
  const { data, error } = useSWR<T>(path, fetcher);
 
  const isLoading = !data && !error;
 
  return { data, error, isLoading };
};
 
export { useFetch };