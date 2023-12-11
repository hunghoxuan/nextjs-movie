import { tmdbService } from "@/app/(web)/movies/lib/tmdb.db";
import MediaDetails from "@/app/(web)/movies/components/media/details";
import MediaHero from "@/app/(web)/movies/components/media/hero";
import { MediaType } from "@/lib/types/media";
import ContentCarousel from "@/components/carousel/static";

export const revalidate = 60 * 60 * 24; // 24 hours
export default async function Detail({
  params,
}: {
  params: { type: MediaType; id: string };
}) {
  const data = await tmdbService.get(params.id, params.type);
  if (!data) throw new Error("Media not found");

  return (
    <main>
      <MediaHero media={data} />
      <MediaDetails media={data} />

      {data.recommendations && data.recommendations.results.length > 0 && (
        <ContentCarousel
          items={data.recommendations.results}
          title="More Like This"
        />
      )}
    </main>
  );
}
