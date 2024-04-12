import IconHTML from "@/Icons/IconHTML.astro";
import IconCSS from "@/Icons/IconCSS.astro";
import IconSass from "@/Icons/IconSass.astro";
import IconTailwind from "@/Icons/IconTailwind.astro";
import IconJS from "@/Icons/IconJS.astro";
import IconReact from "@/Icons/IconReact.astro";

export const TECNOLOGIAS_ICONOS = {
  HTML: IconHTML,
  CSS: IconCSS,
  Sass: IconSass,
  Tailwind: IconTailwind,
  JS: IconJS,
  React: IconReact,
};

export const IMAGE_URL = 'https://pub-3eddb542161c48299037aa5299510c01.r2.dev'

export const PROYECTOS = [
  {
    "titulo": "ToDo List",
    "descripcion": "Sitio web para poder crear, modificar, eliminar y guardar tus tareas que tienes pendientes, con la opcion de poder filtrarlos por progreso, o por su nombre.",
    "tecnologias": [
      "React",
      "Sass"
    ],
    "github": "https://github.com/SoyRandy708/ToDo-List",
    "web": "https://soyrandy708.github.io/ToDo-List",
    "imagen": `${IMAGE_URL}/todo-list.jpg`
  },
  {
    "titulo": "Formulario con Validaciones",
    "descripcion": "Formulario sencillo en el que se hacen validaciones para saber si se estan ingresando correctamente los datos de que se piden.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JS"
    ],
    "github": "https://github.com/SoyRandy708/FormularioConValidaciones",
    "web": "https://soyrandy708.github.io/FormularioConValidaciones/",
    "imagen": `${IMAGE_URL}/formulario.jpg`
  },
  {
    "titulo": "Calculadora",
    "descripcion": "Calculadora basica para poder realizar distintas operacion como suma, resta, multiplicacion y division.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JS"
    ],
    "github": "https://github.com/SoyRandy708/Calculadora-JS",
    "web": "https://soyrandy708.github.io/Calculadora-JS/",
    "imagen": `${IMAGE_URL}/calculadora.jpg`
  },
  {
    "titulo": "Numeros Aleatorios",
    "descripcion": "Generador de numeros aleatorios donde puedes ingresar el rango entre los cuales se daran los resultados y la cantidad de resultado que quieres.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JS"
    ],
    "github": "https://github.com/SoyRandy708/NumerosAleatorios",
    "web": "https://soyrandy708.github.io/NumerosAleatorios/",
    "imagen": `${IMAGE_URL}/numeros-aleatorios.jpg`
  },
]