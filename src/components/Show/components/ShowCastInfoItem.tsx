import React, { FC } from "react";
import { Avatar, Grid } from "@material-ui/core";
import { ShowCastIntoItemProps } from "../types/ShowCastIntoItemProps";

export const ShowCastInfoItem: FC<ShowCastIntoItemProps> = ({
  person,
  character,
}) => {
  return (
    <>
      <Grid item xs={4}>
        <Avatar src="/broken-image.jpg" />
      </Grid>
      <Grid item xs={4}>
        <span>{person.name}</span>
      </Grid>
      <Grid item xs={4}>
        <span>{character.name}</span>
      </Grid>
    </>
  );
};

export default ShowCastInfoItem;
