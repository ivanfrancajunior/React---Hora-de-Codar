import { useState, useEffect } from "react";

export const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setIsLoading(false);
        setData(json);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    }
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};
