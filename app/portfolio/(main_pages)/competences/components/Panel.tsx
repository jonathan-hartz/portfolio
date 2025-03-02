import { Technology } from "./interfaces";
import ItemSkill from "./itemSkill";

const getGridPositon = (position: string) => {
  switch (position) {
    case "topLeft":
      return "col-span-full sm:col-span-2";
    case "topRight":
      return "col-span-full sm:col-span-4";
    case "bottomLeft":
    case "bottomCenter":
    case "bottomRight":
      return "col-span-full sm:col-span-2";
  }
};
const getAosAnimationDirection = (position: string) => {
  switch (position) {
    case "topLeft":
      return "fade-down-right";
    case "topRight":
      return "fade-down-left";
    case "bottomLeft":
      return "fade-right";
    case "bottomCenter":
      return "fade-up";
    case "bottomRight":
      return "fade-left";
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
  const aosAnimationDirection = getAosAnimationDirection(position);
  return (
    <div
      className={`relative ${gridPosition} rounded-sm border-2 border-solid ${outlineColor} mb-2 bg-slate-500/15 sm:mb-0`}
      data-aos={aosAnimationDirection}
      data-aos-delay="200"
    >
      <div className="mb-10 mt-2 grid grid-cols-4 items-center justify-items-center gap-2 text-center sm:gap-1">
        {skills &&
          skills.map((skill, key) => {
            return (
              <ItemSkill key={key} skill={skill} color={backgroundColor} />
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
