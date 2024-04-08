export interface Project {
  title: string;
  description: string;
  links: ProjectLink
}

export interface ProjectLink {
    label: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}