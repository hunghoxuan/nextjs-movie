import { getRandomMedia, getTrending } from "./lib/tmdb.db";
import ContentCarousel from "@/components/carousel/static";
import MediaHero from "./components/media/hero";

export const revalidate = 60 * 60 * 24; // 24 hours
export default async function Home() {
  const trendingMovie = await getTrending("movie");
  const trendingTv = await getTrending("tv");
  const randomItem = await getRandomMedia([
    ...trendingMovie.results,
    ...trendingTv.results,
  ]);

  return (
    <main>
      <MediaHero media={randomItem} />
      <div className="my-global space-y-5">
        <ContentCarousel
          title="Trending Movies"
          link="/movie/trending"
          items={trendingMovie.results}
        />
        <ContentCarousel
          title="Trending TV Shows"
          link="/tv/trending"
          items={trendingTv.results}
        />
      </div>
    </main>
  );
}
