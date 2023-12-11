import ContentGrid from "@/components/grid/static";
import Pagination from "@/components/ui/pagination";
import { tmdbService } from "../../../lib/services";
import { Taxonomy } from "@/lib/types";
import { MediaType } from "@/lib/types/media";

export const revalidate = 60 * 60 * 24; // 24 hours
export default async function QueryPage({
  params,
  searchParams,
}: {
  params: { id: number; type: MediaType };
  searchParams: { page: string };
}) {
  const data = await tmdbService.searchByTaxonomy(
    params.id,
    searchParams.page,
    params.type,
  );
  const name = data.taxonomy ? (data.taxonomy as Taxonomy).name : "";

  return (
    <main className="my-global">
      <h1 className="text-2xl px-global mb-5">
        {name} {params.type === "tv" ? "TV Shows" : "Movies"}
      </h1>
      <ContentGrid items={data.results} />
      <Pagination page={searchParams.page} totalPages={data.total_pages} />
    </main>
  );
}
