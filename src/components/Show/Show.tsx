import React, { FC } from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Typography,
} from "@material-ui/core";
import IShow from "../../interfaces/Show";
// import { ShowIcon } from "./components/ShowIcon";
import { ShowInfo } from "./components/ShowInfo";
import { ShowDescription } from "./components/ShowDescription";
import { ShowRating } from "../ShowRating/ShowRating";
import ShowCast from "../../interfaces/ShowCast";
import { useStyles } from "./Show.styles";
import HeaderShow from "../Header/HeaderShow";

type ShowProps = { show: IShow; cast?: ShowCast[] };

export const Show: FC<ShowProps> = ({
  show: { name, summary, status, image, network, schedule, genres, rating },
  cast,
}) => {
  const classes = useStyles();

  return (
    <div className="w-full bg-transparent space-x-5">
      <HeaderShow/>
      <Paper>
        <div className="absolute flex bg-transparent mt-[-260px] pl-[50px] pr-[50px] z-50">
          <ShowRating rating={rating} />
          <CardMedia
            className={classes.cover}
            component="img"
            alt={name}
            image={image?.medium}
            title={name}
          />
          <div className="flex">
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <ShowDescription description={summary} />
            </CardContent>
          </div>
        </div>
        <div>
          <div className="flex pt-[70px] pl-[50px] pr-[50px]">
            <ShowInfo
              streamOn={network.name}
              schedule={schedule}
              status={status}
              genres={genres}
              cast={cast}
            />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Show;
