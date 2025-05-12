import { MetadataRoute } from "next";
import projects from "./portfolio/(main_pages)/projets/data/projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
  // Your website URL
  const baseUrl = new URL("https://jonathan-hartz.dev");

  // Base pages
  const routes = [
    "",
    "portfolio",
    "portfolio/a-propos",
    "portfolio/competences",
    "portfolio/projets",
    "portfolio/mes-services",
    "portfolio/me-contacter",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
  // Project pages
  const projectPages = projects
    .filter((project) => project.ready) // Only include ready projects
    .map((project) => ({
      url: `${baseUrl}portfolio/projets/${project._id}-${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  return [...routes, ...projectPages];
}
