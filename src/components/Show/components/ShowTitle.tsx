import React, { FC } from "react";
import { ShowTitleProps } from "../types/ShowTitleProps";

export const ShowTitle: FC<ShowTitleProps> = ({ title }) => {
  return <h2 data-testid="showtitle">{title}</h2>;
};

export default ShowTitle;
