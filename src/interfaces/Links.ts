import { Self } from "./Self";
import { PreviousEpisode } from "./PreviousEpisode";
import { NextEpisode } from "./NextEpisode";

export interface Links {
  self: Self;
  previousepisode: PreviousEpisode;
  nextepisode: NextEpisode;
}

export default Links;
