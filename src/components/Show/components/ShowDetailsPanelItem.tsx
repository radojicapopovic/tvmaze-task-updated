import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { ShowDetailsPanelItemProps } from "../types/ShowDetailsPanelItemProps";

export const ShowDetailsPanelItem: FC<ShowDetailsPanelItemProps> = ({
  label,
  text,
}) => {
  // const classes = useStyles();
  return (
    <Grid item xs={6} md={12}>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {text}
      </Typography>
    </Grid>
  );
};

export default ShowDetailsPanelItem;
