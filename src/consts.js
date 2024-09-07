import IconHTML from "@/Icons/IconHTML.astro";
import IconCSS from "@/Icons/IconCSS.astro";
import IconSass from "@/Icons/IconSass.astro";
import IconTailwind from "@/Icons/IconTailwind.astro";
import IconJS from "@/Icons/IconJS.astro";
import IconReact from "@/Icons/IconReact.astro";
import IconAstro from './Icons/IconAstro.astro';
import IconGit from './Icons/IconGit.astro';
import IconVsCode from './Icons/IconVsCode.astro';
import IconVercel from './Icons/IconVercel.astro';
import IconGithub from './Icons/IconGithub.astro';
import IconTS from './Icons/IconTS.astro';

export const IMAGE_URL = 'https://pub-3eddb542161c48299037aa5299510c01.r2.dev'
export const GITHUB_URL = 'https://github.com/SoyRandy708'

export const TODAS_TECNOLOGIAS = [
  {
    nombre: "HTML",
    icono: "HTML",
    color: "#EF652A",
  },
  {
    nombre: "CSS",
    icono: "CSS",
    color: "#30A9DC",
  },
  {
    nombre: "Sass",
    icono: "Sass",
    color: "#cd6699",
  },
  {
    nombre: "Tailwind CSS",
    icono: "Tailwind",
    color: "#38B2AC",
  },
  {
    nombre: "JavaScript",
    icono: "JavaScript",
    color: "#F0DB4F",
  },
  {
    nombre: "TypeScript",
    icono: "TypeScript",
    color: "#3078c6",
  },
  {
    nombre: "React",
    icono: "React",
    color: "#61DAFB",
  },
  {
    nombre: "Astro",
    icono: "Astro",
    color: "#FFAA00",
  },
  {
    nombre: "Git",
    icono: "Git",
    color: "#de4b36",
  },
  {
    nombre: "GitHub",
    icono: "GitHub",
    color: "#fff",
  },
  {
    nombre: "Visual Studio Code",
    icono: "VsCode",
    color: "#2a86d2",
  },
  {
    nombre: "Vercel",
    icono: "Vercel",
    color: "#fff",
  },
]

export const TECNOLOGIAS_ICONOS = {
  HTML: IconHTML,
  CSS: IconCSS,
  Sass: IconSass,
  Tailwind: IconTailwind,
  JavaScript: IconJS,
  TypeScript: IconTS,
  React: IconReact,
  Astro: IconAstro,
  Git: IconGit,
  GitHub: IconGithub,
  VsCode: IconVsCode,
  Vercel: IconVercel,
};

export const PROYECTOS = [
  {
    "titulo": "MonkeyType",
    "tecnologias": [
      "Astro",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Vercel",
    ],
    "github": `${GITHUB_URL}/monkeytype`,
    "web": "https://monkeytype-randy.vercel.app/",
    "imagen": `${IMAGE_URL}/monkeytype_mockup.webp`
  },
  {
    "titulo": "ToDoList",
    "tecnologias": [
      "React",
      "Sass",
      "Git",
      "GitHub",
    ],
    "github": `${GITHUB_URL}/ToDo-List`,
    "imagen": `${IMAGE_URL}/todolist_mockup.webp`
  },
  {
    "titulo": "FormularioValidaciones",
    "tecnologias": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Vercel",
    ],
    "github": `${GITHUB_URL}/FormularioConValidaciones`,
    "web": "https://formulario-con-validaciones.vercel.app/",
    "imagen": `${IMAGE_URL}/formulario_mockup.webp`
  },
]