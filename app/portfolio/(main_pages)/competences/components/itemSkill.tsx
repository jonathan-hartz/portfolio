import { Technology } from "./interfaces";

export default function ItemSkill({
  skill,
  color,
}: {
  skill: Technology;
  color: string;
}) {
  return (
    <div className="h-13 w-13 flex flex-col items-center text-center md:h-16 md:w-16">
      <div
        className={
          color +
          " mb-2 h-10 w-10 content-center rounded-lg font-customFont text-xl transition-transform hover:scale-110"
        }
      >
        <i className={skill.icon}></i>
      </div>
      <div className="text-xs">{skill.name}</div>
    </div>
  );
}
