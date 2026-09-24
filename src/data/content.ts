import {
  PillarItem,
  StepItem,
  ClassroomExample,
  ChildActivity,
  MethodArea
} from '../types';

export const BRAND_INFO = {
  name: "Creative Spanish for Kids",
  subBrand: "The Creative Forest",
  educator: "Reyes Portas",
  role: "Artista visual y educadora infantil",
  email: "reyesportas.artwork@gmail.com",
  youtubeUrl: "https://www.youtube.com/@ThecreativespanishforestTV",
  youtubeHandle: "@ThecreativespanishforestTV",
  instagramUrl: "https://www.instagram.com/the.creative_forest/",
  instagramHandle: "@the.creative_forest",
  tagline: "Spanish through stories, art & imagination.",
  centralIdea: "El niño no solo aprende español. Utiliza el español para crear.",
  targetAudience: "Familias homeschool y familias bilingües con niños de 6 a 12 años",
  heroImage: "/src/assets/images/creative_forest_hero_1789998262924.jpg",
  readingClubImage: "/src/assets/images/story_reading_club_1789998280611.jpg",
  logoImage: "/creative_forest_logo.jpeg",
  bannerImage: "/creative_forest_logo.jpeg",
};

export const PILLARS: PillarItem[] = [
  {
    id: "read",
    iconName: "BookOpen",
    label: "Cuentos y lectura",
    englishLabel: "Read",
    description: "Historias ilustradas y relatos que despiertan la curiosidad innata.",
    accentColor: "forest",
    detail: "Partimos de un fragmento o cuento tradicional para descubrir palabras vivas, personajes y matices culturales."
  },
  {
    id: "speak",
    iconName: "MessageCircle",
    label: "Conversación viva",
    englishLabel: "Speak",
    description: "Preguntas abiertas y diálogo natural adaptado al ritmo de cada niño.",
    accentColor: "earth",
    detail: "Sin presiones ni exámenes. El español se convierte en el puente para expresar opiniones, sensaciones y descubrimientos."
  },
  {
    id: "create",
    iconName: "Palette",
    label: "Arte y dibujo",
    englishLabel: "Create",
    description: "Pintura, ilustración y modelado como herramientas de comprensión.",
    accentColor: "ochre",
    detail: "Dibujar una escena o dar vida a un personaje consolida el vocabulario de forma multisensorial y memorable."
  },
  {
    id: "imagine",
    iconName: "Sparkles",
    label: "Imaginación",
    englishLabel: "Imagine",
    description: "Construcción de historias propias y nuevos desenlaces.",
    accentColor: "clay",
    detail: "Los niños inventan qué sucede después, idean mundos fantásticos y toman decisiones narrativas usando el idioma."
  },
  {
    id: "explore",
    iconName: "Compass",
    label: "Ciencia y naturaleza",
    englishLabel: "Explore",
    description: "Curiosidad por los seres vivos, los bosques y pequeños experimentos.",
    accentColor: "forest",
    detail: "Observar hojas, animales o fenómenos naturales mientras aprenden terminología científica y descriptiva en español."
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Partimos de una historia o interés real",
    description: "Conectamos con lo que despierta la atención del niño: un cuento ilustrado, un personaje que le apasiona o una pregunta sobre el mundo natural."
  },
  {
    number: "02",
    title: "Introducimos vocabulario en contexto",
    description: "Las palabras nuevas no se memorizan en listas aisladas; surgen de la acción, de los detalles de la escena y de la necesidad de nombrar cosas."
  },
  {
    number: "03",
    title: "Hablamos y hacemos preguntas abiertas",
    description: "¿Por qué crees que hizo eso? ¿Cómo describirías este bosque? Conversamos de manera participativa respetando el nivel del niño."
  },
  {
    number: "04",
    title: "Creamos algo con las manos y la imaginación",
    description: "Dibujamos, pintamos, diseñamos un personaje o construimos un mapa de la historia. La creación plástica ancla el aprendizaje."
  },
  {
    number: "05",
    title: "Usamos el español para contar y argumentar",
    description: "El niño explica su creación, inventa el desenlace o comparte su proyecto. El idioma se convierte en su herramienta de expresión personal."
  }
];

export const CLASSROOM_EXAMPLES: ClassroomExample[] = [
  {
    id: "spiderman",
    childInterest: "El universo de Spider-Man",
    subtitle: "Narración gráfica y toma de decisiones",
    tag: "Interés del alumno: Superhéroes",
    scenario: "Un alumno fascinado por Spider-Man crea su propio cómic ilustrado. En lugar de seguir un libro de texto estándar, él decide qué aliados o villanos aparecen en la siguiente viñeta.",
    linguisticWork: "Introducimos adjetivos descriptivos, verbos de acción y movimiento (trepar, esquivar, proteger), conectores temporales (de repente, mientras tanto) y estructuras de causa-efecto.",
    result: "El niño practica español motivado por su propia trama, describiendo escenas con entusiasmo espontáneo."
  },
  {
    id: "winnie",
    childInterest: "El bosque de Winnie the Pooh",
    subtitle: "Naturaleza, personajes y afectos",
    tag: "Interés del alumno: Cuentos clásicos y animales",
    scenario: "Una alumna dibuja a los personajes del bosque mientras inventamos una tarde de picnic y exploración entre los árboles.",
    linguisticWork: "Trabajamos vocabulario del bosque (miel, ramas, madriguera, sendero), expresiones de emociones (curiosidad, calma, alegría) y fórmulas de cortesía entre personajes.",
    result: "A través del trazo y el color, la alumna incorpora frases completas sin sentir la presión de una clase tradicional."
  }
];

export const CHILD_ACTIVITIES: ChildActivity[] = [
  {
    id: "characters",
    title: "Crear personajes únicos",
    description: "Diseñar seres imaginarios o compañeros de aventuras, describiendo cómo visten, qué comen y cuáles son sus cualidades.",
    category: "Narrativa",
    iconName: "Users"
  },
  {
    id: "stories",
    title: "Inventar historias y desenlaces",
    description: "¿Qué pasaría si el río cambiara de curso? Desarrollar tramas originales donde el niño decide el rumbo de la narración.",
    category: "Creatividad",
    iconName: "Feather"
  },
  {
    id: "drawing",
    title: "Dibujo, pintura y color",
    description: "Explorar técnicas plásticas sencillas para ilustrar escenas, mapas y criaturas, verbalizando formas, texturas y matices.",
    category: "Arte visual",
    iconName: "Paintbrush"
  },
  {
    id: "science",
    title: "Experimentar con curiosidad",
    description: "Pequeñas observaciones del mundo físico y biológico: ciclos de las plantas, luz y sombras, o mezclas cromáticas.",
    category: "Ciencia",
    iconName: "FlaskConical"
  },
  {
    id: "nature",
    title: "Explorar la naturaleza",
    description: "Inspirarse en hojas, animales, minerales y paisajes para enriquecer el vocabulario medioambiental y la sensibilidad ecológica.",
    category: "Naturaleza",
    iconName: "Trees"
  },
  {
    id: "speaking",
    title: "Hablar en español con confianza",
    description: "Espacios seguros de diálogo donde cometer errores es natural y la intención comunicativa está por encima de la corrección estricta.",
    category: "Expresión oral",
    iconName: "Smile"
  },
  {
    id: "writing",
    title: "Escribir pequeñas historias",
    description: "Desde pequeñas leyendas en viñetas hasta diarios de expedición ilustrados adaptados a la madurez motriz y lectora del niño.",
    category: "Escritura",
    iconName: "PenTool"
  },
  {
    id: "projects",
    title: "Crear proyectos integradores",
    description: "Fanzines artesanales, herbarios ilustrados o dioramas que combinan arte, ciencia y lengua en un resultado del que sentirse orgulloso.",
    category: "Proyectos",
    iconName: "Layers"
  }
];

export const METHOD_AREAS: MethodArea[] = [
  {
    letter: "C",
    name: "Comunicación oral viva",
    focus: "Diálogo genuino y escucha activa",
    summary: "El español se vive en la conversación espontánea sobre lo que estamos observando y creando."
  },
  {
    letter: "R",
    name: "Relatos y narración creativa",
    focus: "La historia como motor pedagógico",
    summary: "Partir de cuentos e historias da sentido emocional y estructura mental al nuevo vocabulario."
  },
  {
    letter: "E",
    name: "Expresión artística y plástica",
    focus: "Pensamiento visual y manos a la obra",
    summary: "El dibujo y el arte permiten procesar conceptos abstractos y fijar el idioma de forma multisensorial."
  },
  {
    letter: "A",
    name: "Aprendizaje en contexto y reflexión",
    focus: "Pensamiento crítico",
    summary: "Hacemos preguntas que invitan a comparar, elegir, deducir y justificar puntos de vista en español."
  },
  {
    letter: "R",
    name: "Reto interdisciplinar (Ciencia + Naturaleza)",
    focus: "Conexión con el entorno",
    summary: "Investigar cómo funciona el mundo real amplía el registro lingüístico más allá de lo cotidiano."
  },
  {
    letter: "+",
    name: "Escritura creativa y cuaderno de artista",
    focus: "Trazos con significado",
    summary: "Pequeños textos, carteles, títulos y descripciones que nacen del propio proyecto del niño."
  },
  {
    letter: "★",
    name: "Proyecto final integrador",
    focus: "Sentido de logro y culminación",
    summary: "Una obra, cuento ilustrado o cuaderno de viaje que el niño puede mostrar y explicar a su familia."
  }
];

export const READING_CLUB_POINTS = [
  {
    title: "Un cuento o fragmento de partida",
    text: "Seleccionamos historias de calidad con respeto escrupuloso a los derechos de autor, explorando fragmentos inspiradores y álbumes ilustrados."
  },
  {
    title: "Vocabulario clave en contexto",
    text: "Destacamos de 3 a 5 palabras expresivas que enriquecen el léxico y abren paso a la conversación."
  },
  {
    title: "Preguntas que despiertan la imaginación",
    text: "No interrogamos sobre comprensión mecánica; preguntamos qué habrían hecho ellos en el lugar del protagonista."
  },
  {
    title: "Pequeño reto artístico o de dibujo",
    text: "Cerramos con una propuesta visual: dibujar un detalle, diseñar un mapa o imaginar el siguiente capítulo con lápiz y papel."
  }
];

export const REYES_CREDENTIALS = [
  {
    title: "Educación infantil & Artista visual",
    description: "Trayectoria aunando la pedagogía de la infancia con la práctica de las artes plásticas e ilustración."
  },
  {
    title: "Arteterapia para niños y adolescentes",
    description: "Formación especializada en acompañamiento expresivo a través de materiales artísticos y escucha respetuosa."
  },
  {
    title: "Gestalt Infantil y Adolescente",
    description: "Mirada humanista centrada en el aquí y ahora, el respeto a los procesos de maduración y el vínculo de confianza."
  },
  {
    title: "Gestión Cultural y Educación Artística",
    description: "Diseño de experiencias interdisciplinares donde la cultura, los libros y la naturaleza dialogan con el niño."
  },
  {
    title: "Experiencia online internacional",
    description: "Clases y talleres virtuales con niños de diversos países y contextos lingüísticos, adaptando el ritmo a cada familia."
  }
];

export const REYES_BIO = {
  name: "Reyes Portas",
  role: "Artista visual & Educadora Infantil",
  philosophy: "Unir arte, infancia y lenguaje para que el niño aprenda con asombro y libertad.",
  disciplines: [
    "Educación Infantil & Artista visual",
    "Arteterapia para niños y adolescentes",
    "Gestalt Infantil y Adolescente",
    "Gestión Cultural y Educación Artística",
  ]
};

// Variation 9 Convenience Aliases
export const PROPOSAL_PILLARS = PILLARS.map(p => ({
  ...p,
  title: p.label,
  subtitle: p.englishLabel,
  detailedBenefit: p.detail
}));

export const HOW_IT_WORKS_STEPS = PROCESS_STEPS.map(s => ({
  ...s,
  stepNumber: s.number
}));

export const CLASSROOM_CASES = CLASSROOM_EXAMPLES.map(c => ({
  ...c,
  title: c.childInterest,
  studentProfile: c.tag,
  challengeAndHook: c.scenario,
  creativeOutcome: c.result
}));

export const WHAT_KIDS_CAN_DO = CHILD_ACTIVITIES.map(a => ({
  ...a,
  example: a.description
}));

export const METHOD_CREAR_STEPS = METHOD_AREAS.map(m => ({
  ...m,
  title: m.name,
  word: m.name.split(' ')[0],
  description: m.summary,
  howItWorks: m.focus
}));

export const YOUTUBE_READING_CLUB = READING_CLUB_POINTS;
export const TRUST_CREDENTIALS = REYES_CREDENTIALS;

