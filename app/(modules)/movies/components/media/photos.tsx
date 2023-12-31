import Image from "next/image";
import { Media } from "@/lib/types/media";

export default function Photos({ media }: { media: Media }) {
  return (
    <div className="px-global">
      {media.images?.backdrops.length && (
        <div>
          <h2 className="text-xl mb-5 inline-block">Backdrops</h2>
          <span className="ml-2 text-white/60">
            {media.images.backdrops.length} Images
          </span>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {media.images.backdrops.map((image) => (
              <div key={image.file_path} className="aspect-[16/9]">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt=""
                  width={500}
                  height={280}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {media.images?.posters.length && (
        <div className="mt-12">
          <h2 className="text-xl mb-5 inline-block">Posters</h2>
          <span className="ml-2 text-white/60">
            {media.images.posters.length} Images
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {media.images.posters.map((image) => (
              <div key={image.file_path} className="aspect-[2/3]">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt=""
                  width={500}
                  height={280}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
