import Image from "next/image";
import Link from "next/link";
import { MovieProps } from "@/src/@core/entities/movies";

const MovieCard = ({ movie }: { movie: MovieProps }) => (
    <>
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            key={movie.id} >
            <div className="flex-shrink-0">
                <Image
                    src={movie.thumbnail}
                    alt={movie.title}
                    width={200}
                    height={300}
                />
            </div>
        </div>
    </>
);            