import React, { FC } from "react";
import { ShowInfoProps } from "../types/ShowInfoProps";
import { ShowCastInfo } from "./ShowCastInfo";
import { ShowDetailsPanel } from "./ShowDetailsPanel";

export const ShowInfo: FC<ShowInfoProps> = ({
  streamOn,
  schedule,
  status,
  genres,
  cast,
}) => {
  return (
    <div className="flex border-b-8">
      <ShowDetailsPanel
        streamOn={streamOn}
        schedule={schedule}
        status={status}
        genres={genres}
      />
      <ShowCastInfo cast={cast} />
    </div>
  );
};

export default ShowInfo;
