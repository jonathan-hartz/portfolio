import Image from "next/image";
import Link from "next/link";
import projects from "@/app/portfolio/(main_pages)/projets/data/projects.json";
export default async function Page({
  params,
}: {
  params: { IdAndTitle: string };
}) {
  const _id: number = parseInt(params.IdAndTitle.split("-")[0]);
  const project = projects.find(function (project) {
    return project._id == _id;
  });
  return (
    project && (
      <div>
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <div className="rounded-lg bg-indigo-600/25 p-4">
                  <p className="text-base font-semibold leading-7 text-indigo-300">
                    {project.hook}
                  </p>
                  <h1 className="mt-2 bg-gradient-to-t from-slate-100 to-slate-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent underline sm:text-4xl">
                    {project.title}
                  </h1>

                  <div className="mt-4 text-sm">
                    <span>
                      {project.categories.map((category, key) => (
                        <span
                          key={key}
                          className={`mr-2 bg-gradient-to-b px-2 py-1 text-xs ${category.color}`}
                        >
                          {category.title}
                        </span>
                      ))}

                      {!project.public ? (
                        <span
                          className={`bg-gradient-to-b from-red-500 to-red-600 px-2 py-1 text-xs text-slate-200`}
                        >
                          projet privé
                        </span>
                      ) : (
                        <span
                          className={`bg-gradient-to-b from-green-500 to-green-600 px-2 py-1 text-xs text-slate-800`}
                        >
                          projet publique
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="mt-4 rounded-md bg-slate-700/50 p-2">
                    <span className="mb-2 mr-2 block text-sm text-slate-300">
                      Technologies :
                    </span>
                    <span className="font-customFont text-2xl text-white">
                      {project.technologies_used.map((technology_used, key) => (
                        <span key={key} className={`mx-2 ${technology_used}`} />
                      ))}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-xl leading-8 text-slate-200 underline underline-offset-8">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-12 lg:-mt-12 lg:overflow-hidden lg:p-12">
            <Image
              alt=""
              sizes="48rem"
              width={0}
              height={0}
              src={`/projects/${project.imagePath}`}
              priority
              quality={100}
              unoptimized={true}
              className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] lg:max-w-none"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-100 lg:max-w-lg">
                <p className="whitespace-pre-line">{project.description}</p>
                <div className="mt-8 font-medium underline">
                  Les points clefs de ce projet :{" "}
                </div>
                <ul
                  role="list"
                  className="mt-4 space-y-8 whitespace-pre-line text-slate-300"
                >
                  {project.features.map((feature, key) => {
                    return (
                      <li key={key} className="flex gap-x-3">
                        <i
                          className={`${feature.icon} flex-none !text-lg/8 text-yellow-500`}
                        ></i>
                        <span>
                          <strong className="font-semibold text-white">
                            {feature.title}
                          </strong>
                          &nbsp;- {feature.description}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8 whitespace-pre-line">
                  <p>{project.conclusion}</p>
                </div>
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-100">
                  Envie d&#39;en savoir davantage ?
                </h2>
                <p className="mt-6">
                  {project.public ? (
                    <>
                      Vous pouvez jeter un oeil au code source de ce projet via{" "}
                      <Link
                        className="underline underline-offset-8"
                        href={project.github_link}
                      >
                        mon GitHub
                      </Link>
                    </>
                  ) : (
                    "Malheureusement, l'accès au code source de ce projet n'est pas possible, car ce projet est privé. Je peux néanmoins répondre aux questions qui ne violeront pas la confidentialité de ce projet : n'hésitez donc pas à me contacter."
                  )}
                </p>
                <p className="mt-6">
                  Si vous souhaitez me contacter, n&#39;hésitez pas à
                  m&#39;envoyer un message par le biais de mon{" "}
                  <Link
                    className="underline underline-offset-8"
                    href={"/portfolio/me-contacter"}
                    scroll={false}
                  >
                    formulaire de contact
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
