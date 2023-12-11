import { getQuery } from "@/app/(web)/movies/lib/tmdb.db";
import ContentCard from "../card";
import ContentGrid from "./_base";
import Pagination from "@/components/ui/pagination";
import { QueryItem } from "@/lib/types";
import LoadMore from "@/app/(web)/movies/components/ui/LoadMore";

export const revalidate = 60 * 60 * 24; // 24 hours
export default async function ContentGridDynamic({
  query,
  page = "1",
}: {
  query: QueryItem;
  page?: string | number;
}) {
  const data = await getQuery(query, page);
  page = parseInt('' . page);
  return (
    <>
      <ContentGrid>
        {data.results.map((item) => (
          <ContentCard key={item.id} item={item} type={item.content_type} />
        ))}
      </ContentGrid>
      <Pagination page={page} totalPages={data.total_pages} />
    </>
  );
}
