import { Media, Video } from "@/lib/types/media";

export function directors(item: Media) {
  const people = item.credits?.crew;

  if (people) {
    return people.filter((person) => person.job === "Director");
  }
}
export function getVideo(item?: Video) {
  if (!item?.key) return null;
  return `https://www.youtube.com/embed/${item.key}?rel=0&showinfo=0&autoplay=0`;
}

export function getTrailer(item: Media) {
  const trailer = item.videos?.results?.find(
    (video) => video.type === "Trailer",
  );
  return getVideo(trailer);
}
