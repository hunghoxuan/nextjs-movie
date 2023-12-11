import axios from "axios";
import { Media, MediaType, GenreList, MediaTypes, Season, Person, Query } from "@/lib/types/media.d";
import { IService, QueryItem, Taxonomy, PageResult} from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export const apiUrl = "https://api.themoviedb.org/3";

export const apiImgUrl = "https://image.tmdb.org/t/p";

export const lists = {
  movie: <QueryItem[]>[
    { title: "Popular Movies", query: "popular", type: "movie" },
    { title: "Top Rated Movies", query: "top_rated", type: "movie" },
    { title: "Upcoming Movies", query: "upcoming", type: "movie" },
    { title: "Now Playing Movies", query: "now_playing", type: "movie" },
  ],
  tv: <QueryItem[]>[
    { title: "Popular TV Shows", query: "popular", type: "tv" },
    { title: "Top Rated TV Shows", query: "top_rated", type: "tv" },
    { title: "Currently Airing TV Shows", query: "on_the_air", type: "tv" },
    { title: "TV Shows Airing Today", query: "airing_today", type: "tv" },
  ],
};

export const getListItem = (type: MediaType, query: Query) =>
  lists[type].find((item) => item.query === query);

export const api = axios.create({
  baseURL: apiUrl,
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
});

export const fetchApi = (url: string, params?: any) =>
  api
    .get(url, { params })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    })
;

export const getMedia = (type: MediaType | string, id: string): Promise<Media> =>
  fetchApi(`/${type}/${id}`, {
    append_to_response: "credits,images,videos,recommendations,episodes",
    include_image_language: "en",
  });

export const getRandomMedia = (items: Media[]): Promise<Media> => {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  const randomItemType = randomItem.name ? "tv" : "movie";

  return getMedia(randomItemType, randomItem.id);
};

export const getMediaEpisodes = (id: string, season: number): Promise<Season> =>
  fetchApi(`/tv/${id}/season/${season}`);

export const getPerson = (id: string): Promise<Person> =>
  fetchApi(`/person/${id}`, {
    append_to_response: "combined_credits,images",
  });

export const getSearch = (
  query: string,
  page?: number | string
): Promise<PageResult<Media & Person>> =>
  fetchApi("/search/multi", {
    query,
    page,
  });

export const getTrending = (
  type: MediaType,
  page?: number | string
): Promise<PageResult<Media>> =>
  fetchApi(`/trending/${type}/week`, {
    page,
  });

export const getQuery = (
  query: QueryItem,
  page?: number | string
): Promise<PageResult<Media>> =>
  fetchApi(`/${query.type}/${query.query}`, {
    page,
  });

export const getGenreList = (type: MediaType | string): Promise<GenreList> =>
  fetchApi(`/genre/${type}/list`);

export const getGenre = (
  type: MediaType | string,
  id: number | string,
  page?: number | string
): Promise<PageResult<Media>> =>
  fetchApi(`/discover/${type}/`, {
    page,
    with_genres: id,
  });

/* eslint-disable */
export const tmdbService : IService<Media, MediaType | string> = {
  get: (id: string | number, type?: MediaType | string) => getMedia(type || 'movie', id.toString()),
  search: (query: string, page?: number | string) => getSearch(query, page),
  from: function (item: any): Media | Media[] {
    throw new Error("Function not implemented.");
  },
  getTaxonomies: async function (type?: MediaType | string): Promise<Taxonomy[]> {
    const genre = await getGenreList(type || 'movie');
    return genre.genres.map((g) => ({ id: g.id, name: g.name }));
  },
  searchByTaxonomy: async function (id: string | number, page: string | number, type?: MediaType | string): Promise<PageResult<Media>> {
    const genre = await getGenreList(type || 'movie');
    const data = await getGenre(type || 'movie', id, page);
    const taxonomy = genre.genres.find((g) => g.id == id);
    return { ...data, taxonomy };
  },
  getImageUrl: function (path: string, size?: number | undefined): string {
    return `${apiImgUrl}/${path}`;
  },
  getMiddleware: function (req: NextRequest): NextResponse | null {
    const { pathname } = req.nextUrl;

    const mediaType = pathname.split("/")[1] as MediaType;
    if (MediaTypes.includes(mediaType)) {
        const url = req.nextUrl.clone();
        url.pathname = `/movies${pathname}`;
        return NextResponse.rewrite(url);
    }
    return null;
  },
  getVideoUrl: function (path: string): string {
    throw new Error("Function not implemented.");
  },
  getBaseUrl: function (): string {
    return apiUrl;
  },
  update: function (item: Media | Media[], type?: string | undefined): Promise<Media | Media[]> {
    throw new Error("Function not implemented.");
  },
  create: function (item: Media | Media[], type?: string | undefined): Promise<Media | Media[]> {
    throw new Error("Function not implemented.");
  },
  delete: function (id: string | number | Media, type?: string | undefined): Promise<Media> {
    throw new Error("Function not implemented.");
  }
}