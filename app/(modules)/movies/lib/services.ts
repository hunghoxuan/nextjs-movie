import { Media, MediaType, MediaTypes } from "@/lib/types/media.d";
import {
  IWebService,
  Taxonomy,
  PageResult,
  IDataService,
  QueryItem,
} from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import {
  getMedia,
  getSearch,
  getGenreList,
  getGenre,
  apiImgUrl,
  apiUrl,
  getQuery,
} from "./tmdb.db";

/* eslint-disable */
export const tmdbService: IDataService<Media, MediaType | string> = {
  get: (id: string | number, type?: MediaType | string) =>
    getMedia(type || "movie", id.toString()),
  from: function (item: any): Media | Media[] {
    throw new Error("Function not implemented.");
  },
  getTaxonomies: async function (
    type?: MediaType | string,
  ): Promise<Taxonomy[]> {
    const genre = await getGenreList(type || "movie");
    return genre.genres.map((g) => ({ id: g.id, name: g.name }));
  },
  searchByTaxonomy: async function (
    id: string | number,
    page: string | number,
    type?: MediaType | string,
  ): Promise<PageResult<Media>> {
    const genre = await getGenreList(type || "movie");
    const data = await getGenre(type || "movie", id, page);
    const taxonomy = genre.genres.find((g) => g.id == id);
    return { ...data, taxonomy };
  },
  query: async function (
    query: QueryItem,
    page?: number | string,
  ): Promise<PageResult<Media>> {
    return await getQuery(query, page);
  },
  search: async function (
    query: QueryItem,
    page?: number | string,
  ): Promise<PageResult<Media>> {
    return await getSearch(query.query, page);
  },
  getImageUrl: function (path: string, size?: number | undefined): string {
    return `${apiImgUrl}/${path}`;
  },
  getVideoUrl: function (path: string): string {
    throw new Error("Function not implemented.");
  },
  getBaseUrl: function (): string {
    return apiUrl;
  },
  update: function (
    item: Media | Media[],
    type?: string | undefined,
  ): Promise<Media | Media[]> {
    throw new Error("Function not implemented.");
  },
  create: function (
    item: Media | Media[],
    type?: string | undefined,
  ): Promise<Media | Media[]> {
    throw new Error("Function not implemented.");
  },
  delete: function (
    id: string | number | Media,
    type?: string | undefined,
  ): Promise<Media> {
    throw new Error("Function not implemented.");
  },
};

export const tmdbWebService: IWebService = {
  getResponse: function (req: NextRequest): NextResponse | null {
    const { pathname } = req.nextUrl;
    const mediaType = pathname.split("/")[1] as MediaType | "";
    if (mediaType === "") {
      // home page
      const url = req.nextUrl.clone();
      url.pathname = `/movies`;
      return NextResponse.rewrite(url);
    }
    if (MediaTypes.includes(mediaType)) {
      // rewrite url to use site name (movies)
      const url = req.nextUrl.clone();
      url.pathname = `/movies${pathname}`;
      return NextResponse.rewrite(url);
    }
    return null;
  },
};
