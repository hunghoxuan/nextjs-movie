import { service } from "@/config";
import ContentCard from "../card";
import ContentGrid from "./_base";
import Pagination from "@/components/ui/pagination";
import { QueryItem } from "@/lib/types";

export const revalidate = 60 * 60 * 24; // 24 hours
export default async function ContentGridDynamic({
  query,
  page = 1,
}: {
  query: QueryItem;
  page?: number;
}) {
  const data = await service.db.query(query, page);
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
