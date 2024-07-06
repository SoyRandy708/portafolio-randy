import IconHTML from "@/Icons/IconHTML.astro";
import IconCSS from "@/Icons/IconCSS.astro";
import IconSass from "@/Icons/IconSass.astro";
import IconTailwind from "@/Icons/IconTailwind.astro";
import IconJS from "@/Icons/IconJS.astro";
import IconReact from "@/Icons/IconReact.astro";
import IconAstro from './Icons/IconAstro.astro';

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
    "titulo": "Monkey Type",
    "descripcion": "Clon del sitio web Monkey Type para poder practicar la velocidad y precisión al escribir, proporcionando métricas de rendimiento como palabras por minuto (WPM) y precisión.",
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
    "titulo": "ToDo List",
    "descripcion": "Sitio web para poder crear, modificar, eliminar y guardar tus tareas que tienes pendientes, con la opcion de poder filtrarlos por progreso, o por su nombre.",
    "tecnologias": [
      "React",
      "Sass"
    ],
    "github": `${GITHUB_URL}/ToDo-List`,
    "imagen": `${IMAGE_URL}/todolist_mockup.webp`
  },
  {
    "titulo": "Formulario con Validaciones",
    "descripcion": "Formulario sencillo en el que se hacen validaciones para saber si se estan ingresando correctamente los datos de que se piden.",
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