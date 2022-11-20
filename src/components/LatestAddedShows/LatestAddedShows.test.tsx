import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowEpisode } from "../../interfaces/ShowEpisode";
import { LatestAddedShows } from "./LatestAddedShows";

const episodes: ShowEpisode[] = [
  {
    id: 1998354,
    url: "http://www.tvmaze.com/episodes/1998354/cbs-news-sunday-morning-2021-02-07-episode-6",
    name: "Episode 6",
    season: 2021,
    number: 6,
    type: "regular",
    airdate: "2021-02-07",
    airtime: "09:00",
    airstamp: "2021-02-07T14:00:00+00:00",
    runtime: 90,
    image: null,
    summary: null,
    show: {
      id: 15779,
      url: "http://www.tvmaze.com/shows/15779/cbs-news-sunday-morning",
      name: "CBS News Sunday Morning",
      type: "News",
      language: "English",
      genres: [],
      status: "Running",
      runtime: 90,
      premiered: "1979-01-28",
      officialSite: "http://www.cbsnews.com/sunday-morning/",
      schedule: {
        time: "09:00",
        days: ["Sunday"],
      },
      rating: { average: 9.8 },
      weight: 91,
      network: {
        id: 2,
        name: "CBS",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      externals: {
        thetvdb: 264537,
        imdb: "tt0165001",
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/237/592585.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/237/592585.jpg",
      },
      summary:
        "<p><b>CBS News Sunday Morning</b> is a early morning news and magazine program that airs on Sunday's on CBS.</p>",
      updated: 1612167349,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/15779",
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1998353",
        },
        nextepisode: {
          href: "http://api.tvmaze.com/episodes/1998354",
        },
      },
    },
  },
];

describe("LatestShow", () => {
  test("renders LatestShow", () => {
    render(<LatestAddedShows />);
    const component = screen.getByTestId("latestaddedshows-container");
    expect(component).toBeInTheDocument();
  });

  test("renders latest shows title", () => {
    render(<LatestAddedShows />);
    const component = screen.getByTestId("latestshowstitle");
    expect(component).toBeInTheDocument();
  });

  test("renders pending when there are no shows", async () => {
    render(<LatestAddedShows />);
    const component = await screen.findByText(/Coming Soon.../i);
    expect(component).toBeInTheDocument();
  });
});