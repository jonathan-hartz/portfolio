export interface Project {
  _id: integer;
  slug: string;
  hook: string;
  title: string;
  imagePath: string;
  subtitle: string;
  ready: boolean;
  public: boolean;
  categories: {
    title: string;
    color: string;
  }[];
  technologies_used: string[];
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  conclusion: string;
  github_link: string;
}
