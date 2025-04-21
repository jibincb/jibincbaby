import Astro from "../assets/icons/astro-logo-icon.svg";
// import CSSIcon from "../assets/icons/css-icon.svg";
import DjangoIcon from "../assets/icons/django-icon.svg";
import DockerIcon from "../assets/icons/docker.svg";
import FastAPIIcon from "../assets/icons/FastAPI.svg";
import GitIcon from "../assets/icons/git.svg";
import HTMLIcon from "../assets/icons/html-icon.svg";
import JSIcon from "../assets/icons/javascript-programming-language-icon.svg";
import LangChainIcon from "../assets/icons/Langchain.svg";
import LangFlowIcon from "../assets/icons/langflow.svg";
import LangsmithIcon from "../assets/icons/langsmith.svg";
import MLflowIcon from "../assets/icons/Mlflow.svg";
import PayloadCMSIcon from "../assets/icons/Payloadcms.svg";
import ReactIcon from "../assets/icons/react-js-icon.svg";
import TailwindIcon from "../assets/icons/tailwind-css-icon.svg";
import VSCodeIcon from "../assets/icons/vs-code.svg";

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: ReactIcon.src,
      },
      {
        name: "Astro",
        icon: Astro.src,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon.src,
      },
      {
        name: "HTML",
        icon: HTMLIcon.src,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Django",
        icon: DjangoIcon.src,
      },
      {
        name: "Fast API",
        icon: FastAPIIcon.src,
      },
      {
        name: "payloadCMS",
        icon: PayloadCMSIcon.src,
      },
    ],
  },
  {
    title: "AI Tools",
    items: [
      {
        name: "LangChain",
        icon: LangChainIcon.src,
      },
      {
        name: "LangFlow",
        icon: LangFlowIcon.src,
      },
      {
        name: "LangSmith",
        icon: LangsmithIcon.src,
      },
      {
        name: "ML Flow",
        icon: MLflowIcon.src,
      },
    ],
  },
  {
    title: "Other Tools and platforms",
    items: [
      {
        name: "Docker",
        icon: DockerIcon.src,
      },
      {
        name: "Git",
        icon: GitIcon.src,
      },
      {
        name: "VS Code",
        icon: VSCodeIcon.src,
      },
    ],
  },
];
