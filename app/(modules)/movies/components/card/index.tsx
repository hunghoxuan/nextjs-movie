import PersonCard  from "../person/card";
import MediaCard from "../media/card";

import { ContentType, Content } from "@/lib/types";
import { Media, Person } from "@/lib/types/media";

export default function ContentCard({
  type,
  item
}: {
  type?: ContentType,
  item: Content
}) {
  return (
    item.content_type === "person" || type === "person" ? (
      <PersonCard person={item as Person} />
    ) : (
      <MediaCard media={item as Media} />
    )
  );
}
