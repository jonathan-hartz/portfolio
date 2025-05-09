"use client";

import Link from "next/link";
import Portrait from "./Portrait";

export default function PanelLeft() {
  return (
    <div
      className="m-auto h-full w-4/5 flex-col justify-around rounded-lg p-4 text-center md:flex md:bg-slate-800/40"
      data-aos={"slide-up"}
    >
      <span
        className="mb-2 flex justify-center md:hidden"
        data-aos={"flip-left"}
      >
        <Portrait />
      </span>

      <span className="text-xl font-extrabold leading-tight lg:text-3xl">
        <h1 className="mb-4 text-white">
          <div className="text-yellow-400">JONATHAN HARTZ</div>
        </h1>
        <h2>Développeur web freelance basé au Val-de-Moder, Alsace.</h2>
      </span>
      <hr className="my-4 hidden md:block" />
      <div className="hidden text-justify text-base md:block">
        <p className="mb-8">
          Besoin d’un site web performant et professionnel ? J&apos;aide
          entreprises et indépendants à créer des sites web modernes, optimisés
          et adaptés à leurs besoins. Découvrez mes réalisations et
          contactez-moi pour concrétiser votre projet digital.
        </p>
        <p>
          N&#39;hésitez pas à{" "}
          <Link
            className="underline underline-offset-2"
            href={"/portfolio/me-contacter"}
          >
            me contacter
          </Link>{" "}
          si vous avez besoin d&#39;en savoir davantage.
        </p>
      </div>
    </div>
  );
}
