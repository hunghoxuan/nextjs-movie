import Spinner from "@/components/ui/spinner";
import NextTopLoader from "nextjs-toploader";

export default function Loading() {
  return (
    <>
      <NextTopLoader color="#3b82f6" />
      <div className="h-screen w-screen flex items-center justify-center text-4xl">
        <Spinner />
      </div>
    </>
  );
}
