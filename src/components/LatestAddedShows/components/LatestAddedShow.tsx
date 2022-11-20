import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  makeStyles,
  createStyles,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

import { LatestAddedShowProps } from "../types/LatestAddedShowProps";
import { ShowRating } from "../../ShowRating/ShowRating";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
    },
  })
);

export const LatestAddedShow: FC<LatestAddedShowProps> = ({
  episode: {
    name,
    show: { id, name: showName, rating, image },
  },
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/shows/${id}`);
  };

  return (
    <Grid
      item
      xs={12}
      sm={2}
      data-testid="latestshowitem"
      onClick={handleOnClick}
    >
      <Card className={classes.root}>
        <CardMedia
          data-testid="latestshowitemimage"
          component="img"
          alt={showName}
          height="150"
          image={image?.original}
          title={showName}
        />
        <CardContent data-testid="latestshowitemtitle">
          <ShowRating data-testid="latestshowitemrating" rating={rating} />
          <Typography component="h5" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LatestAddedShow;
