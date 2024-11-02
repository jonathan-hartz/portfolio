import Image from "next/image";

export default function Portrait() {
  return (
    <div className="relative h-48 w-32 self-center sm:h-72 sm:w-48 2xl:h-96 2xl:w-72">
      <Image
        src="/photo_portfolio2.jpg"
        alt="Ma photo"
        fill
        style={{
          objectFit: "cover",
        }}
        className="rounded-3xl border-8 border-double border-yellow-300"
      />
      <span className="absolute bottom-0 right-4 h-4 w-4 rounded-full border-2 border-white bg-green-400 sm:-bottom-2 sm:h-8 sm:w-8">
        <span className="relative flex h-full w-full animate-ping rounded-full border-2 border-white bg-green-500"></span>
      </span>
    </div>
  );
}
