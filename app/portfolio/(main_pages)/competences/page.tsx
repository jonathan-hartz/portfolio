import Panel from "./components/Panel";
import skills from "@/app/portfolio/(main_pages)/competences/data/skills.json";
export default async function Competences() {
  return (
    <>
      <h2 className="bg-font-extrabold mb-4 text-left text-xl text-white underline underline-offset-8 sm:text-3xl">
        Mes compétences
      </h2>
      <div className="m-auto mb-2 sm:grid sm:grid-cols-6 sm:gap-4">
        <Panel
          skills={skills.filter((skill) => skill.category === "backend")}
          position="topLeft"
          title="BACKEND"
          backgroundColor="bg-amber-600"
          outlineColor="border-amber-700"
        />
        <Panel
          skills={skills.filter((skill) => skill.category === "frontend")}
          position="topRight"
          title="FRONTEND"
          backgroundColor="bg-purple-600"
          outlineColor="border-purple-700"
        />
        <div className="col-span-6 hidden w-full grid-cols-6 grid-rows-subgrid gap-4 sm:grid">
          <Panel
            skills={skills.filter((skill) => skill.category === "db_orm")}
            position="bottomLeft"
            title="BDD/ORM"
            backgroundColor="bg-sky-600"
            outlineColor="border-sky-700"
          />
          <Panel
            skills={skills.filter((skill) => skill.category === "cms")}
            position="bottomCenter"
            title="CMS"
            backgroundColor="bg-teal-600"
            outlineColor="border-teal-700"
          />
          <Panel
            skills={skills.filter((skill) => skill.category === "other")}
            position="bottomRight"
            title="AUTRES"
            backgroundColor="bg-cyan-600"
            outlineColor="border-cyan-700"
          />
        </div>
        <div className="col-span-6 block w-full grid-cols-6 grid-rows-subgrid sm:hidden">
          <Panel
            skills={skills.filter((skill) =>
              ["db_orm", "cms", "other"].includes(skill.category),
            )}
            position="bottomLeft"
            title="MES AUTRES COMPETENCES"
            backgroundColor="bg-sky-600"
            outlineColor="border-sky-700"
          />
        </div>
      </div>
    </>
  );
}
