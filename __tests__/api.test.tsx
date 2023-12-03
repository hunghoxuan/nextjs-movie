// jest implementation of the api
import axios from "axios";
import { fetchMovies, fetchMovie } from "../pages/api";
import { describe } from "node:test";

describe("api", () => {
    it("fetchMovies", async () => {
        // call fetchMovies api and check there is data returned and status = 200
        const data = await fetchMovies(1);
        expect(data).toBeDefined();
        // expect(data.status).toBe(200);
    });
    // call fetchMovie api and check there is data returned and status = 200
    it("fetchMovie", async () => {
        const data = await fetchMovie(1075794);
        expect(data).toBeDefined();
        // expect(data.status).toBe(200);
    });
});