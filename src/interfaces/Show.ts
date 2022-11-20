import { Schedule } from "./Schedule";
import { Rating } from "./Rating";
import { Network } from "./Network";
import { Externals } from "./Externals";
import { Image } from "./Image";
import { Links } from "./Links";

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links?: Links;
}

export default Show;
