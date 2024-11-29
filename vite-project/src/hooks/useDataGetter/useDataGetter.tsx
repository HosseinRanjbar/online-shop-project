import { useEffect, useState } from "react";

interface IUseDataGetter {
  url: string;
  body?: any;
  method?: RequestMethod;
}

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type FetchState<T> = {
    data: T | null;
    error?: string | null;
    loading: boolean;
  };

const useDataGetter = ({ 
    body, 
    url, 
    method = "GET"
 }: IUseDataGetter): FetchState<any> => {

  const [state, setState] = useState<FetchState<any>>({
    loading: false,
    data: null,
    error: undefined
  })

  useEffect(() => {
    const fetchData = async () => {

        setState({ data: null, error: null, loading: true });

      try {
        const response = await fetch(url, {
          method: method,
          body: body ? JSON.stringify(body) : undefined,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setState({ data, error: null, loading: false });

      } catch (error: any) {

        setState({ data: null, error: error.message, loading: false });
        
      }
    };

    fetchData();
  }, [url, method, body]);


  return state;
};

export default useDataGetter;
