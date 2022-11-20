import React, { FC } from "react";
// import { Box } from "@material-ui/core";
// import { Rating } from "@material-ui/lab";
import { ShowRatingProps } from "./types/ShowRatingProps";

export const ShowRating: FC<ShowRatingProps> = ({ rating: { average } }) => {
  return (
    <div
    //   borderColor="transparent"
      data-testid="show-rating"
    >
      {/* <div value={average} readOnly /> */}
    </div>
  );
};

export default ShowRating;
