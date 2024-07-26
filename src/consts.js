import IconHTML from "@/Icons/IconHTML.astro";
import IconCSS from "@/Icons/IconCSS.astro";
import IconSass from "@/Icons/IconSass.astro";
import IconTailwind from "@/Icons/IconTailwind.astro";
import IconJS from "@/Icons/IconJS.astro";
import IconReact from "@/Icons/IconReact.astro";
import IconAstro from './Icons/IconAstro.astro';

export const TODAS_TECNOLOGIAS = ["HTML", "CSS", "Sass", "Tailwind", "JavaScript", "React", "Astro"]

export const TECNOLOGIAS_ICONOS = {
  HTML: IconHTML,
  CSS: IconCSS,
  Sass: IconSass,
  Tailwind: IconTailwind,
  JavaScript: IconJS,
  React: IconReact,
  Astro: IconAstro,
};

export const IMAGE_URL = 'https://pub-3eddb542161c48299037aa5299510c01.r2.dev'
export const GITHUB_URL = 'https://github.com/SoyRandy708'

export const PROYECTOS = [
  {
    "titulo": "MonkeyType",
    "tecnologias": [
      "Astro",
      "CSS",
      "JavaScript"
    ],
    "github": `${GITHUB_URL}/monkeytype`,
    "web": "https://monkeytype-randy.vercel.app/",
    "imagen": `${IMAGE_URL}/monkeytype_mockup.webp`
  },
  {
    "titulo": "ToDoList",
    "tecnologias": [
      "React",
      "Sass"
    ],
    "github": `${GITHUB_URL}/ToDo-List`,
    "imagen": `${IMAGE_URL}/todolist_mockup.webp`
  },
  {
    "titulo": "FormularioValidaciones",
    "tecnologias": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "github": `${GITHUB_URL}/FormularioConValidaciones`,
    "web": "https://formulario-con-validaciones.vercel.app/",
    "imagen": `${IMAGE_URL}/formulario_mockup.webp`
  },
]