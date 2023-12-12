// jest implementation of the api
import { getMedia, getSearch, fetchApi, getTrending } from "@/app/(modules)/movies/lib/tmdb.db";
import { MediaType } from "@/lib/types/media";
import { AxiosError } from "axios";
import { describe } from "node:test";

describe("tmdb api", () => {
  const mediaType = ['movie', 'tv'];
  const validType = "movie";
  const invalidId = "xxx";
  const invalidType = "xxx";
  const validPage = '1';
  const invalidPage = '50001';
  const validId = (type : string): string => {
    if (type === 'movie') {
      return "897087";
    }
    return "549";
  }

  mediaType.forEach((type) => {
    it(`fetch Api ${type}`, async () => {
      const request = await fetchApi(`/${type}/` + validId(type), {
        append_to_response: "credits,images,videos,recommendations,episodes",
        include_image_language: "en",
      });
      expect(request).toBeDefined();
    });

    it(`getMedia ${type} has data`, async () => {
      const data = await getMedia(type, validId(type));
      expect(data).toBeDefined();
    });

    it(`get Detail ${type} has invalid id`, async () => {
      try {
      const data = await getMedia(type, invalidId);
      } catch (error) {
        expect((error as AxiosError).response?.status).toEqual(404);
      }
    });

    it(`get Detail ${type} has invalid type`, async () => {
      try {
      const data = await getMedia(invalidType, validId(type));
      } catch (error) {
        expect((error as AxiosError).response?.status).toEqual(404);
      }
    });

    it(`get Search Popular ${type}`, async () => {
      const data = await getSearch("popular", validPage);
      return expect(data.results.length).toBe(20);
    });

    it(`get Trending ${type}`, async () => {
      const data = await getTrending("movie", validPage);
      return expect(data.results.length).toBe(20);
    });

    it(`get Trending ${type} invalid type`, async () => {
      try {
      const data = await getTrending(invalidType as MediaType, validPage);
      } catch (error) {
        expect((error as AxiosError).response?.status).toEqual(400);
      }
    });

    it(`get Trending ${type} out of range`, async () => {
      try {
      const data = await getTrending(type as MediaType, invalidPage);
      } catch (error) {
        expect((error as AxiosError).response?.status).toEqual(400);
      }
    });
  });
});
