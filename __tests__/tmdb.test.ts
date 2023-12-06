// jest implementation of the api
import axios from "axios";
import { fetchMovies, fetchMovie } from "../core/adapters/tmdb";
import { describe } from "node:test";

describe("data-access", () => {
    it("fetchMovies", async () => {
        const data = await fetchMovies(1);
        expect(data).toBeDefined();
        // expect(data.status).toBe(200);
    });

    it("fetchMovie", async () => {
        const data = await fetchMovie(1075794);
        expect(data).toBeDefined();
        // expect(data.status).toBe(200);
    });
});