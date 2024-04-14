import { Github, Globe,Package } from "lucide-astro";

const PROJECTS = [
    {
      title: "F1lmlog App",
      description:
        "Mobile app to keeps track of film camera settings when shooting film. Created with React Native.",
      img: "/img/mockup-f1lmlog.webp",
      links: [
        {
          label: "view app",
          href: "https://f1lmlog.com",
          icon: Globe,
        },
      ],
    },
    {
      title: "Metamor",
      description:
        "New landing page for Metamor projects improving performance, SEO and user interactions compared to old version.",
      img: "/img/mockup-metamor.webp",
      links: [
        {
          label: "view app",
          href: "https://metamorpsicologia.com/",
          icon: Globe,
        },
      ],
    },
    {
      title: "Just-a-Stream Package",
      description:
        "A light weight JavaScript library for creating, transforming and merging streams.",
      img: "/img/mockup-jas.webp",
      links: [
        {
          label: "source code",
          href: "https://github.com/fervqz/just-a-stream",
          icon: Github,
        },
        {
          label: "NPM Package",
          href: "https://www.npmjs.com/package/@fervqz/just-a-stream",
          icon: Package,
        },
      ],
    },
    {
      title: "Case of Study: Spotify",
      description:
        "Clone of Spotify web app create  for studying it's design desicions, workarounds implemented and more.",
      img: "/img/mockup-clonify.webp",
      links: [
        {
          label: "source code",
          href: "https://github.com/fervqz/spotify-clone",
          icon: Github,
        },
        {
          label: "view app",
          href: "https://fv-spotify-study.netlify.app/",
          icon: Globe,
        },
      ],
    },
  ];

  export default PROJECTS;