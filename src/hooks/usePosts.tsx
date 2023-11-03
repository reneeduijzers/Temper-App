import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useData() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data: data?.slice(0, 5),
    isLoading,
    isError: error,
  };
}
