"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { tmdbService } from "../../lib/tmdb.db";
import ContentCard from "../card";
import { Media } from "@/lib/types/media";
import Spinner from "@/components/ui/spinner";

function LoadMore({ page, totalPages }: { page: number, totalPages: number}) {
  const { ref, inView } = useInView();

  const [data, setData] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        tmdbService.search("popular", page, "movie").then((res) => {
          setData([...data, ...res.results]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: Media, index: number) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Spinner />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;