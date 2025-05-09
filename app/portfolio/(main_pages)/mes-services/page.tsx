"use client";
import Card from "./components/Card";
import services from "@/app/portfolio/(main_pages)/mes-services/data/services.json";

export default function MesServices() {
  return (
    <>
      <h2 className="bg-font-extrabold mb-2 text-left text-xl text-white underline underline-offset-8 sm:mb-2 sm:pb-2 sm:text-3xl">
        Mes services
      </h2>

      <div className="grid w-full grid-rows-1 items-center justify-center justify-items-center gap-8 bg-black/20 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, key) => {
          return <Card key={key} service={service} index={key} />;
        })}
      </div>
    </>
  );
}
