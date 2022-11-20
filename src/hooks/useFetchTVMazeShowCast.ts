import { useState, useEffect } from "react";
import axios from "axios";
import ShowCast from "../interfaces/ShowCast";

export interface IUseFetchTVMazeShowApi {
  data?: ShowCast[];
  isLoading: boolean;
  isError: boolean;
}

const useFetchTVMazeShowCast = (showId: number): IUseFetchTVMazeShowApi => {
  const [data, setData] = useState<ShowCast[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      const { CancelToken } = axios;
      const source = CancelToken.source();

      try {
        const response = await axios.get<ShowCast[]>(
          `http://api.tvmaze.com/shows/${showId}/cast`,
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

export default useFetchTVMazeShowCast;
