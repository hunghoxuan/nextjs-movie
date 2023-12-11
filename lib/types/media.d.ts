export const MediaTypes = ["movie", "tv"] as const;
export const PersonTypes = ["person"] as const;

export type MediaType = (typeof MediaTypes)[number];
export type PersonType = (typeof PersonTypes)[number];

export interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  last_air_date?: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  content_type?: MediaType;
  // details
  homepage?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
  status?: string;
  genres?: Genre[];
  production_companies?: any[];
  networks?: any[];
  episode_run_time?: number[];
  number_of_seasons?: number;
  number_of_episodes?: number;
  created_by: Person[];
  videos?: {
    results: Video[];
  };
  credits?: {
    cast: Person[];
    crew: Person[];
  };
  images?: {
    backdrops: Image[];
    posters: Image[];
  };
  recommendations?: {
    results: Media[];
  };
  external_ids?: ExternalIds;
  // cast
  character?: string;
}

export interface Credit extends Media {
  character: string;
  job: string;
  department: string;
  profile_path: string;
  credit_id: string;
  order: number;
  content_type: MediaType;
  episode_count?: number;
}

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  popularity: number;
  cast_id?: number;
  content_type?: PersonType;
  job?: string;
  character?: string;
  credit_id: string;
  order: number;
  // details
  also_known_as?: string[];
  birthday?: string;
  place_of_birth?: string;
  homepage?: string;
  biography?: string;
  external_ids?: ExternalIds;
  combined_credits?: {
    cast?: Credit[];
    crew?: Credit[];
  };
  images?: {
    profiles: Image[];
  };
}

export interface Episode {
  air_date?: string;
  crew: Person[];
  episode_number: number;
  guest_stars: Person[];
  name?: string;
  overview?: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface Image {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ExternalIds {
  imdb_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
  linkedin_id?: string;
  github_id?: string;
  email?: string;
  homepage?: string;
}

export interface Season {
  air_date?: string;
  _id: string;
  episodes: Episode[];
}

export interface GenreList {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export type Query =
  | "top_rated"
  | "on_the_air"
  | "airing_today"
  | "popular"
  | "now_playing"
  | "upcoming"
  | "trending";

export interface Credits {
  cast: Media[];
}

export type MovieProps = {
  id: number | string;
  title: string;
  overview: string;
  thumbnail: string;
  youtubeUrl: string;
  releaseDate: number;
  duration: number;
  votes?: number;
  age?: number;
};
