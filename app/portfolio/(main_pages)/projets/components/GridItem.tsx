import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "./interface";
export default function GridItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const router = useRouter();
  const backgroundColor = project.ready ? "" : "grayscale";
  const handleClick = () => {
    return router.push(
      "/portfolio/projets/" + project._id + "-" + project.slug,
    );
  };
  return (
    <div
      onClick={handleClick}
      className="group relative h-36 w-full cursor-pointer rounded-md border-2 border-solid border-blue-700 bg-blue-900 p-2 transition-transform hover:scale-105 lg:h-56 lg:w-72 2xl:h-64 2xl:w-80"
      data-aos="flip-left"
      data-aos-delay={200 * index}
    >
      <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center justify-items-center group-hover:bg-black/50">
        <div className="relative hidden h-full w-full items-center justify-center group-hover:flex">
          <i className="fa-solid fa-magnifying-glass text-2xl"></i>
        </div>
      </div>
      <div
        className={`${backgroundColor} relative m-auto h-full w-full text-center`}
      >
        <Image
          src={`/projects/${project.imagePath}`}
          alt="Portfolio"
          fill
          priority
          quality={100}
          unoptimized={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <span className="absolute bottom-0 left-0 m-auto w-full bg-blue-700 p-2">
        <span className="text-xs font-semibold">{project.title}</span>
      </span>
    </div>
  );
}
