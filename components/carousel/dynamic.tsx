import { service } from "@/config";
import ContentCarouselItems from "./_items";
import { QueryItem } from "@/lib/types";
import ContentCarouselBase from "./_base";

export const revalidate = 60 * 60 * 24; // 24 hours
export default async function ContentCarouselDynamic({
  query,
}: {
  query: QueryItem;
}) {
  const data = await service.db.query(query);

  return (
    <ContentCarouselBase
      title={query.title}
      link={`/${query.type}/${query.query}`}
    >
      <ContentCarouselItems items={data.results} />
    </ContentCarouselBase>
  );
}
