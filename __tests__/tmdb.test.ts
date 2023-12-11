// jest implementation of the api
import { getMedia } from "@/app/(web)/movies/lib/tmdb.db";
import { describe } from "node:test";

describe("data-access", () => {
    it("getMedia", async () => {
        const data = await getMedia("movie", "1");
        expect(data).toBeDefined();
        // expect(data.status).toBe(200);
    });
});