import { Schedule } from "../../../interfaces/Schedule";

export type ShowDetailsPanelProps = {
  streamOn?: string;
  schedule: Schedule;
  status?: string;
  genres: string[];
};
