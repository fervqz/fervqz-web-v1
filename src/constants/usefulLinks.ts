import { Github, Linkedin, NotebookPen } from "lucide-astro";

const USEFUL_LINKS = [
  {
    name: "LinkedIn",
    url: import.meta.env.PUBLIC_URL_LINKEDIN,
    icon: Linkedin,
  },
    {
      name: "GitHub",
      url: import.meta.env.PUBLIC_URL_GITHUB,
      icon: Github,
    },
    // {
    //   name: "Blog",
    //   url: import.meta.env.PUBLIC_URL_BLOG,
    //   icon: NotebookPen,
    // },
  ];

  export default USEFUL_LINKS;