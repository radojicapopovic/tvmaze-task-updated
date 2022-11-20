import React, { FC } from "react";
// import { sanitize } from "dompurify";
import { Typography } from "@material-ui/core";
import { ShowDescriptionProps } from "../types/ShowDescriptionProps";

export const ShowDescription: FC<ShowDescriptionProps> = ({ description }) => {
//   const safeHtml = sanitize(description);

  return (
    <Typography
      data-testid="showdescription"
    //   dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
};

export default ShowDescription;
