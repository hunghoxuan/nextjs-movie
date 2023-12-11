"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import ContentCard from "../card";
import { Media } from "@/lib/types/media";
import { getQuery } from "../../lib/tmdb.db";
import { QueryItem } from "@/lib/types";
import Image from "next/image";

async function LoadMore({ page, query }: { page: number; query: QueryItem }) {
  const { ref, inView } = useInView();

  const [data, setData] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(async () => {
        page += 1;
        const dt = await getQuery(query, page);
        setData([...data, ...dt.results]);

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
