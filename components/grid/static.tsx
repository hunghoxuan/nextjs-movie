/* eslint-disable */
import ContentGridBase from "./_base";
import { ContentType, ContentArray } from "@/lib/types";
import ContentCard from "../card";

export default function ContentGrid({
  items,
  type,
}: {
  items: ContentArray;
  type?: ContentType;
}) {
  return (
    <ContentGridBase>
      {items.map((item) =>
        <ContentCard item={item} type={type} />
      )}
    </ContentGridBase>
  );
}
