import { useState, useEffect } from "react";
import axios from "axios";
import { ShowEpisode } from "../interfaces/ShowEpisode";

export interface IUseFetchTVMazeShowsApi {
  data?: ShowEpisode[];
  isLoading: boolean;
  isError: boolean;
}

const useFetchTVMazeShowsApi = (): IUseFetchTVMazeShowsApi => {
  const [data, setData] = useState<ShowEpisode[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      const { CancelToken } = axios;
      const source = CancelToken.source();

      try {
        const response = await axios.get<ShowEpisode[]>(
          `http://api.tvmaze.com/schedule`,
          { cancelToken: source.token }
        );

        setData(response.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, isError };
};

export default useFetchTVMazeShowsApi;
