import React, { FC } from "react";
import { useParams } from "react-router-dom";
import useFetchTVMazeShowApi from "../../hooks/useFetchTVMazeShowApi";
import useFetchTVMazeShowCast from "../../hooks/useFetchTVMazeShowCast";
import { Show } from "../../components/Show/Show";

type ShowPageParams = {
  id: string;
};

export const ShowPage: FC = () => {
  const { id } = useParams<ShowPageParams>();
  const { data: show, isLoading, isError } = useFetchTVMazeShowApi(Number(id));
  const { data: cast } = useFetchTVMazeShowCast(Number(id));

  if (isLoading) return <>Loading Show...</>;

  if (isError) return <>Failed to load show...</>;

  if (show) return <Show show={show} cast={cast} />;

  return <>Oops, something went wrong!</>;
};

export default ShowPage;
