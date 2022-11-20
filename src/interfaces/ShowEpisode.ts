import { Links } from "./Links";
import { Show } from "./Show";

export interface ShowEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image?: any;
  summary?: any;
  show: Show;
  _links?: Links;
}

export default ShowEpisode;
