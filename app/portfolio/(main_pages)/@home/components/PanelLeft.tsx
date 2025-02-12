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

      <span className="text-xl lg:text-3xl">
        <h1 className="mb-4 font-extrabold leading-tight text-white">
          Bienvenue sur mon portfolio, je suis&nbsp;
          <span className="text-yellow-400">JONATHAN HARTZ</span>
        </h1>
        <p className="mb-2 self-center font-normal text-white lg:mb-4">
          Développeur web freelance à votre service 😊
        </p>
      </span>
      <div className="hidden text-justify text-base md:block">
        <p className="mb-8">
          Je suis content de vous présenter un peu de ma vie professionelle !
          Vous trouverez sur ce site mes réalisations, compétences et tout ce
          qui peut vous intéresser chez moi.
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
