import { NextRequest, NextResponse } from "next/server";
import { MediaTypes, PersonTypes, Query } from "./media";

export const ContentTypes = [...MediaTypes, ...PersonTypes] as const;
export type ContentType = MediaType | PersonType;
export type Content = Media | Person;
export type ContentArray = Media[] | Person[];

export interface Taxonomy {
  id: number | string;
  name: string;
  parent_id?: number | string;
  description?: string;
  thumbnail?: string;
  status?: string;
}

export interface QueryItem {
  type?: ContentType;
  title?: string;
  query: string;
}

export interface PageResult<T> {
  taxonomy?: Taxonomy | Taxonomy[];
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface IService {
  db: IDataService<T, Type>;
  web: IWebService;
}

/* eslint-disable */
export interface IDataService<T, Type> {
  getImageUrl: (path: string, size?: number) => string;
  getVideoUrl: (path: string) => string;
  getBaseUrl: () => string;

  get: (id: string | number, type?: Type) => Promise<T>;
  getTaxonomies: (type?: Type) => Promise<Taxonomy[]>;
  searchByTaxonomy: (
    id: string | number,
    page: string | number,
    type?: Type,
  ) => Promise<PageResult<T>>;

  query: (query: QueryItem, page?: number | string) => Promise<PageResult<T>>;
  search: (
    query: QueryItem,
    page?: number | string,
    type?: Type,
  ) => Promise<PageResult<T>>;

  update: (item: T | T[], type?: Type) => Promise<T | T[]>;
  create: (item: T | T[], type?: Type) => Promise<T | T[]>;
  delete: (id: string | number | T, type?: Type) => Promise<T>;
  from: (item: any | array, type?: Type) => T | T[];
}

export interface IWebService {
  getResponse: (req: NextRequest) => NextResponse | null;
}
