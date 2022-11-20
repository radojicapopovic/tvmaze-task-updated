import Image from "../Image";
import { Country } from "./Country";

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday?: any;
  gender: string;
  image: Image;
}
