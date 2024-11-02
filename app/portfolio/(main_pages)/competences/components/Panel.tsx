import { Technology } from "./interfaces";
import ItemSkill from "./itemSkill";

const getGridPositon = (position: string) => {
  switch (position) {
    case "topLeft":
    case "topRight":
      return "col-span-full sm:col-span-3";
    case "bottomLeft":
    case "bottomCenter":
    case "bottomRight":
      return "col-span-full sm:col-span-2";
  }
};

export default function Panel({
  title,
  position,
  backgroundColor,
  outlineColor,
  skills,
}: {
  title: string;
  position: string;
  backgroundColor: string;
  outlineColor: string;
  skills: Array<Technology>;
}) {
  const gridPosition = getGridPositon(position);
  return (
    <div
      className={`relative ${gridPosition} rounded-sm border-2 border-solid ${outlineColor} mb-2 bg-slate-500/15 sm:mb-0`}
    >
      <div className="mb-10 mt-2 grid grid-cols-6 items-center justify-items-center gap-2 text-center sm:grid-cols-3 sm:gap-1 md:grid-cols-4">
        {skills &&
          skills.map((skill) => {
            return (
              <ItemSkill
                key={skill._id}
                skill={skill}
                color={backgroundColor}
              />
            );
          })}
      </div>
      <h2
        className={`${backgroundColor} absolute bottom-0 left-0 w-full text-center md:font-semibold`}
      >
        {title}
      </h2>
    </div>
  );
}
