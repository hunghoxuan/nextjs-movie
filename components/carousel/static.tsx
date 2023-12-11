import { ContentArray, ContentType } from "@/lib/types";
import ContentCarouselBase from "./_base";
import ContentCarouselItems from "./_items";

export default function ContentCarousel({
  title,
  link,
  items,
  type,
}: {
  type?: ContentType;
  title?: React.ReactNode | string;
  link?: string;
  items: ContentArray;
}) {
  return (
    <ContentCarouselBase title={title} link={link}>
      <ContentCarouselItems items={items} type={type} />
    </ContentCarouselBase>
  );
}
