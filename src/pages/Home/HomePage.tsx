import React from "react";
// import { HomeBanner } from "../../components/HomeBanner/HomeBanner";
import { LatestAddedShows } from "../../components/LatestAddedShows/LatestAddedShows";
import useFetchTVMazeShowsApi from "../../hooks/useFetchTVMazeShowsApi";
import Header from "../../components/Header/Header";

export const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useFetchTVMazeShowsApi();

  return (
    <div className="overflow-visible">
      <Header />
      <div className="absolute mt-[-130px] z-40  ">
        {isLoading && <div>Loading Shows...</div>}
        {isError && <div>Failed to Load Shows!!!</div>}
        <LatestAddedShows episodes={data} />
      </div>
    </div>
  );
};

export default HomePage;
