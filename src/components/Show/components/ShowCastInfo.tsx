import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import { ShowCastInfoProps } from "../types/ShowCastInfoProps";
import { ShowCastInfoItem } from "./ShowCastInfoItem";

export const ShowCastInfo: FC<ShowCastInfoProps> = ({ cast }) => {
  return (
    <Grid container>
      {cast?.map(({ person, character }) => (
        <ShowCastInfoItem
          key={person.id}
          person={person}
          character={character}
        />
      ))}
    </Grid>
  );
};

export default ShowCastInfo;
