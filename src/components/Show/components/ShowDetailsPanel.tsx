import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import { ShowDetailsPanelProps } from "../types/ShowDetailsPanelProps";
import { ShowDetailsPanelItem } from "./ShowDetailsPanelItem";

export const ShowDetailsPanel: FC<ShowDetailsPanelProps> = ({
  streamOn = "Not Available",
  schedule,
  status = "Not Available",
  genres,
}) => {
  return (
    <Grid container>
      <ShowDetailsPanelItem label="Stream on" text={streamOn} />
      <ShowDetailsPanelItem label="Schedule" text={schedule?.days.join(",")} />
      <ShowDetailsPanelItem label="Status" text={status} />
      <ShowDetailsPanelItem label="Genres" text={genres.join(",")} />
    </Grid>
  );
};

export default ShowDetailsPanel;
