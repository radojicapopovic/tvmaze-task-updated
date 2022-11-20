import { useState, useEffect } from "react";
import axios from "axios";
import { Show } from "../interfaces/Show";

export interface IUseFetchTVMazeShowApi {
  data?: Show;
  isLoading: boolean;
  isError: boolean;
}

const useFetchTVMazeShowApi = (showId: number): IUseFetchTVMazeShowApi => {
  const [data, setData] = useState<Show>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      const { CancelToken } = axios;
      const source = CancelToken.source();

      try {
        const response = await axios.get<Show>(
          `http://api.tvmaze.com/shows/${showId}`,
          { cancelToken: source.token }
        );

        setData(response.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [showId]);

  return { data, isLoading, isError };
};

export default useFetchTVMazeShowApi;
