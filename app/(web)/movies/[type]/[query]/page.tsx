import ContentGridDynamic from "@/components/grid/dynamic";
import { lists } from "@/app/(web)/movies/lib/tmdb.db";
import { MediaType, Query } from "@/lib/types/media";

export const revalidate = 60 * 60 * 24; // 24 hours
export default function QueryPage({
  params,
  searchParams,
}: {
  params: { query: Query; type: MediaType };
  searchParams: { page: string };
}) {
  const item = lists[params.type].find((item) => item.query === params.query);

  if (!item) throw new Error("This page could not be found.");

  return (
    <main className="my-global">
      <h1 className="text-2xl px-global mb-5">{item.title}</h1>
      <ContentGridDynamic query={item} page={searchParams.page} />
    </main>
  );
}
