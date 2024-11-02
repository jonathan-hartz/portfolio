import GridItem from "./GridItem";
import { Project } from "./interface";

export default function GridItems({ projects }: { projects: Array<Project> }) {
  return (
    <>
      {projects &&
        projects.map((project, key) => (
          <GridItem key={key} project={project} />
        ))}
    </>
  );
}
