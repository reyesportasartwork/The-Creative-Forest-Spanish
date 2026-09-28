export interface StudentWork {
  id: number;
  image: string;
  title: {
    es: string;
    en: string;
  };
  category: 'escultura' | 'pintura' | 'estampacion' | 'ciencias_lengua' | 'repaso';
  categoryLabel: {
    es: string;
    en: string;
  };
  description?: {
    es: string;
    en: string;
  };
  technique?: {
    es: string;
    en: string;
  };
}

export const STUDENT_WORKS: StudentWork[] = [
  // ==========================================
  // 1. ESCULTURA (Clase de Clay & Bubbles and Clay)
  // ==========================================
  {
    id: 1,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.18.49.jpeg',
    title: { es: 'Clase de Clay: Escultura y Modelado', en: 'Clay Class: Sculpture & Modeling' },
    category: 'escultura',
    categoryLabel: { es: 'Escultura · Clase de Clay', en: 'Sculpture · Clay Class' },
    technique: { es: 'Arcilla y modelado sensorial', en: 'Clay & sensory modeling' },
    description: {
      es: 'Exploración táctil en tres dimensiones: los niños dan forma a volúmenes y figuras mientras dialogan en español sobre texturas y pesos.',
      en: 'Tactile exploration in 3D: children shape volume and figures while practicing Spanish vocabulary around textures and weights.',
    },
  },
  {
    id: 2,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.19.00.jpeg',
    title: { es: 'Clase de Bubbles and Clay', en: 'Bubbles & Clay Class' },
    category: 'escultura',
    categoryLabel: { es: 'Escultura · Bubbles & Clay', en: 'Sculpture · Bubbles & Clay' },
    technique: { es: 'Burbujas y modelado con arcilla', en: 'Bubbles & clay crafting' },
    description: {
      es: 'Combinando la ligereza de las pompas con la textura sólida de la arcilla para experimentar contrastes sensoriales fascinantes.',
      en: 'Combining light soap bubbles with solid clay textures to explore fascinating sensory contrasts.',
    },
  },
  {
    id: 3,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.20.08.jpeg',
    title: { es: 'Clase de Clay: Personajes Tridimensionales', en: 'Clay Class: 3D Characters' },
    category: 'escultura',
    categoryLabel: { es: 'Escultura · Clase de Clay', en: 'Sculpture · Clay Class' },
    technique: { es: 'Modelado manual en arcilla', en: 'Handmade clay modeling' },
    description: {
      es: 'Criaturas imaginarias cobran vida con manos llenas de barro y mentes llenas de historias.',
      en: 'Imaginary creatures brought to life with clay-covered hands and minds filled with stories.',
    },
  },
  {
    id: 4,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.20.09.jpeg',
    title: { es: 'Clase de Clay: Relieves y Texturas', en: 'Clay Class: Reliefs & Textures' },
    category: 'escultura',
    categoryLabel: { es: 'Escultura · Clase de Clay', en: 'Sculpture · Clay Class' },
    technique: { es: 'Modelado y estampado en arcilla fresca', en: 'Modeling & impressions on fresh clay' },
    description: {
      es: 'Imprimiendo hojas y elementos naturales en la arcilla para crear fósiles artísticos.',
      en: 'Imprinting leaves and natural elements into clay to create botanical fossils.',
    },
  },
  {
    id: 5,
    image: '/student_works/Captura de pantalla 2026-06-21 171244.png',
    title: { es: 'El Reloj Mágico del Taller y Escultura', en: 'Magic Studio Clock & Sculpture' },
    category: 'escultura',
    categoryLabel: { es: 'Escultura & Volumen', en: 'Sculpture & Volume' },
    technique: { es: 'Construcción en volumen y arcilla', en: 'Volume construction & clay' },
    description: {
      es: 'Trabajo con formas volumétricas y conceptos de tiempo en una sesión interactiva en directo.',
      en: 'Hands-on exploration of volumetric forms and time concepts during a live interactive class.',
    },
  },
  {
    id: 6,
    image: '/student_works/Captura de pantalla 2026-05-07 114651.png',
    title: { es: 'Máscara de Superhéroe y Modelado de Personajes', en: 'Superhero Mask & Character Crafting' },
    category: 'escultura',
    categoryLabel: { es: 'Escultura & Caracterización', en: 'Sculpture & Character Crafting' },
    technique: { es: 'Modelado y máscara artesanal', en: 'Sculpting & artisan mask creation' },
    description: {
      es: 'Juego de rol, máscara de superhéroe y expresión dramática espontánea en español.',
      en: 'Role-play, superhero masks, and spontaneous dramatic expression in Spanish.',
    },
  },

  // ==========================================
  // 2. PINTURA (Acuarela, témpera, expresión plástica)
  // ==========================================
  {
    id: 7,
    image: '/student_works/Captura de pantalla 2026-06-16 220318.png',
    title: { es: 'Un Barco en el Mar al Amanecer', en: 'Sailboat at Sunrise' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura · Acuarela', en: 'Painting · Watercolor' },
    technique: { es: 'Acuarela sobre papel húmedo', en: 'Wet-on-wet watercolor' },
    description: {
      es: 'Gradientes de amanecer y velero navegando: mezclas de amarillos, rojos y azules creados por alumnos en directo.',
      en: 'Sunrise gradients and a sailboat navigating: blending yellows, reds, and ocean blues live in session.',
    },
  },
  {
    id: 8,
    image: '/student_works/Captura de pantalla 2026-08-24 210450.png',
    title: { es: 'Los Cuatro Elementos y Estaciones', en: 'The Four Elements & Seasons' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura · Técnica Mixta', en: 'Painting · Mixed Media' },
    technique: { es: 'Témpera y pigmentos naturales', en: 'Tempera & natural pigments' },
    description: {
      es: 'Fuego, tierra, aire y agua plasmados con pinceladas enérgicas y vocabulario estacional en español.',
      en: 'Fire, earth, air, and water captured with dynamic strokes and seasonal Spanish words.',
    },
  },
  {
    id: 9,
    image: '/student_works/Captura de pantalla 2025-10-19 174637-1.png',
    title: { es: 'El Gato Verde Fantástico', en: 'The Fantastic Green Cat' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura & Expresión', en: 'Painting & Expression' },
    technique: { es: 'Gouache y técnica libre', en: 'Gouache & freeform color' },
    description: {
      es: 'Retrato de un felino fantástico con verdes luminosos y ojos dorados, creado por niños explorando el color.',
      en: 'Portrait of a fantastical cat with radiant greens and golden eyes, created while exploring vivid color.',
    },
  },
  {
    id: 10,
    image: '/student_works/Captura de pantalla 2026-09-13 172506.png',
    title: { es: 'Ilustración Botánica y Pigmentos', en: 'Botanical Illustration & Pigments' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura · Naturaleza', en: 'Painting · Nature' },
    technique: { es: 'Pigmentos naturales y pincel fino', en: 'Natural pigments & fine brush' },
    description: {
      es: 'Observación y representación de tallos, hojas y capullos en una conexión íntima con la naturaleza.',
      en: 'Observing and drawing stems, leaves, and buds in deep connection with the plant world.',
    },
  },
  {
    id: 11,
    image: '/student_works/Captura de pantalla 2025-08-02 195530.png',
    title: { es: 'Taller de Pintura en Directo', en: 'Live Painting Studio' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura en Vivo', en: 'Live Painting' },
    technique: { es: 'Pintura en directo con Reyes', en: 'Live painting guided by Reyes' },
    description: {
      es: 'Sesión compartida donde los niños pintan y conversan alegres mostrando sus avances en pantalla.',
      en: 'Collaborative session where children paint and joyfully chat showing their progress on screen.',
    },
  },
  {
    id: 12,
    image: '/student_works/Captura de pantalla 2025-08-02 200122.png',
    title: { es: 'Acuarela y Colores en Pantalla', en: 'Watercolor & On-Screen Colors' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura en Vivo', en: 'Live Painting' },
    technique: { es: 'Pinceladas y mezclas en directo', en: 'Live brushstrokes & blends' },
    description: {
      es: 'Los alumnos descubren la magia de la transparencia del agua con Reyes como guía.',
      en: 'Students discover the magic of water transparency with gentle guidance from Reyes.',
    },
  },
  {
    id: 13,
    image: '/student_works/Captura de pantalla 2025-08-02 200139.png',
    title: { es: 'Composición y Colores Compartidos', en: 'Shared Composition & Colors' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura en Vivo', en: 'Live Painting' },
    technique: { es: 'Trazos en directo y diálogo en español', en: 'Live strokes & Spanish dialogue' },
    description: {
      es: 'Cada niño encuentra su propio estilo dentro de una propuesta artística estimulante.',
      en: 'Every child discovers their unique voice within an inspiring artistic invitation.',
    },
  },
  {
    id: 14,
    image: '/student_works/Captura de pantalla 2025-08-29 130954.png',
    title: { es: 'Mesa de Pintura Táctil', en: 'Tactile Painting Table' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura Libre', en: 'Freeform Painting' },
    technique: { es: 'Pigmentos fluidos y dedos', en: 'Fluid pigments & fingers' },
    description: {
      es: 'La libertad del trazo sin miedo al error: el español fluye con total soltura.',
      en: 'The freedom of uninhibited brushwork without fear of mistakes: Spanish flows effortlessly.',
    },
  },
  {
    id: 15,
    image: '/student_works/Captura de pantalla 2026-04-28 233857.png',
    title: { es: 'Creación Artística en Vivo', en: 'Live Artistic Creation' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura en Vivo', en: 'Live Painting' },
    technique: { es: 'Acuarela y rotulador', en: 'Watercolor & marker' },
    description: {
      es: 'Sesión online donde la expresión visual abre paso a conversaciones auténticas.',
      en: 'Online session where visual expression unlocks authentic conversations.',
    },
  },
  {
    id: 16,
    image: '/student_works/Captura de pantalla 2026-08-02 185030.png',
    title: { es: 'Expresión Plástica en Directo', en: 'Live Visual Expression' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura en Vivo', en: 'Live Painting' },
    technique: { es: 'Color y conversación natural', en: 'Color & natural conversation' },
    description: {
      es: 'Risas, preguntas curiosas y trazos llenos de energía en una tarde de taller.',
      en: 'Laughter, curious questions, and energetic brushstrokes during an afternoon studio session.',
    },
  },
  {
    id: 17,
    image: '/student_works/Captura de pantalla 2026-09-25 165123.png',
    title: { es: 'Trazos Libres en el Caballete', en: 'Free Strokes at the Easel' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura · Caballete', en: 'Painting · Easel' },
    technique: { es: 'Pintura al agua de gran formato', en: 'Large-scale water paint' },
    description: {
      es: 'Desarrollando la motricidad fina y la confianza artística en el espacio del hogar.',
      en: 'Developing fine motor skills and artistic confidence right at home.',
    },
  },
  {
    id: 18,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.28.48.jpeg',
    title: { es: 'Pintura Sensorial y Mezclas en Taller', en: 'Sensory Painting & Studio Blends' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura Sensorial', en: 'Sensory Painting' },
    technique: { es: 'Pigmentos sobre papel de acuarela', en: 'Pigments on watercolor paper' },
    description: {
      es: 'Juegos de luces y mezclas de primarios para descubrir tonalidades insospechadas.',
      en: 'Light play and primary color blends to uncover unexpected shades.',
    },
  },
  {
    id: 19,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16,36,53-1.jpeg',
    title: { es: 'Texturas y Pigmentos de Alumnos', en: 'Student Textures & Pigments' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura · Texturas', en: 'Painting · Textures' },
    technique: { es: 'Capas y frotado de color', en: 'Color layering & rubbing' },
    description: {
      es: 'Composición con capas sucesivas que revelan profundidad y luz.',
      en: 'Layered composition that reveals rich depth and light.',
    },
  },
  {
    id: 20,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.40.38.jpeg',
    title: { es: 'Obra de Arte Sensorial', en: 'Sensory Artwork' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura Sensorial', en: 'Sensory Painting' },
    technique: { es: 'Pigmentos táctiles sobre soporte natural', en: 'Tactile pigments on natural ground' },
    description: {
      es: 'Creación libre donde cada alumno traduce emociones en colores vivos.',
      en: 'Free creation where each student translates feelings into vibrant hues.',
    },
  },
  {
    id: 21,
    image: '/student_works/student_work_2.png',
    title: { es: 'Jardín Botánico y Mandala de Flores', en: 'Botanical Garden & Flower Mandala' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura & Botánica', en: 'Painting & Botany' },
    technique: { es: 'Acuarela botánica', en: 'Botanical watercolor' },
    description: {
      es: 'Girasoles, pétalos y geometría natural inspirada en los cambios de estación.',
      en: 'Sunflowers, petals, and organic geometry inspired by the changing seasons.',
    },
  },
  {
    id: 22,
    image: '/student_works/student_work_6.png',
    title: { es: 'Lluvias de Abril y Flores de Mayo', en: 'April Showers & May Flowers' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura & Caligrafía', en: 'Painting & Lettering' },
    technique: { es: 'Témpera, collage y caligrafía', en: 'Tempera, collage & lettering' },
    description: {
      es: 'Cartel poético con gotas de lluvia y flores silvestres uniendo lengua y pintura.',
      en: 'Poetic poster with raindrops and wild blooms joining language and brushwork.',
    },
  },
  {
    id: 23,
    image: '/student_works/student_work_13.png',
    title: { es: 'Composición Floral del Taller', en: 'Studio Floral Composition' },
    category: 'pintura',
    categoryLabel: { es: 'Pintura · Acuarela', en: 'Painting · Watercolor' },
    technique: { es: 'Acuarela luminosa', en: 'Luminous watercolor' },
    description: {
      es: 'Gama de tonalidades cálidas que recrean la alegría de una tarde creativa.',
      en: 'Warm color palette recreating the joy of an inspiring afternoon.',
    },
  },

  // ==========================================
  // 3. ESTAMPACIÓN (Clase de estampación, sellos, texturas)
  // ==========================================
  {
    id: 24,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16,18,04-1.jpeg',
    title: { es: 'Clase de Estampación: Sellos Botánicos', en: 'Printmaking Class: Botanical Stamps' },
    category: 'estampacion',
    categoryLabel: { es: 'Clase de Estampación', en: 'Printmaking Class' },
    technique: { es: 'Grabado artesanal y sellos con hojas', en: 'Handmade print & leaf stamps' },
    description: {
      es: 'Estampando con elementos del bosque: los niños crean patrones rítmicos y texturas usando tintas naturales.',
      en: 'Printing with forest elements: children produce rhythmic patterns and textures with natural inks.',
    },
  },
  {
    id: 25,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.18.05.jpeg',
    title: { es: 'Clase de Estampación: Texturas y Huellas', en: 'Printmaking Class: Textures & Impressions' },
    category: 'estampacion',
    categoryLabel: { es: 'Clase de Estampación', en: 'Printmaking Class' },
    technique: { es: 'Monotipia y transferencia sobre papel', en: 'Monotype & transfer on paper' },
    description: {
      es: 'La sorpresa de levantar la hoja y ver la huella grabada: una lección de física, arte y vocabulario vivo.',
      en: 'The thrill of peeling the paper to reveal the print: a joyful blend of science, art, and Spanish vocabulary.',
    },
  },

  // ==========================================
  // 4. CIENCIAS Y LENGUA ESPAÑOLA (Summer camp de cocina, cuentos, experimentos)
  // ==========================================
  {
    id: 26,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.20.10.jpeg',
    title: { es: 'Summer Camp de Cocina', en: 'Cooking Summer Camp' },
    category: 'ciencias_lengua',
    categoryLabel: { es: 'Summer Camp de Cocina', en: 'Cooking Summer Camp' },
    technique: { es: 'Cocina creativa y vocabulario sensorial', en: 'Creative cooking & sensory vocabulary' },
    description: {
      es: 'Amasar, medir, oler y saborear en español: los verbos de acción y los ingredientes cobran vida en la cocina.',
      en: 'Kneading, measuring, smelling, and tasting in Spanish: action verbs and ingredients come to life.',
    },
  },
  {
    id: 27,
    image: '/student_works/Captura de pantalla 2026-06-07 202728.png',
    title: { es: 'Canción y Rimas de Tiggy la Gatita con Felpa', en: 'Tiggy the Kitten Rhymes & Song with Felpa' },
    category: 'ciencias_lengua',
    categoryLabel: { es: 'Lengua Española · Rimas', en: 'Spanish Language · Rhymes' },
    technique: { es: 'Cancionero ilustrado y títere Felpa', en: 'Illustrated songbook & Felpa puppet' },
    description: {
      es: 'Cantar rimas rimadas con Felpa para asimilar la musicalidad y cadencia del español de forma espontánea.',
      en: 'Singing playful rhymes with Felpa to naturally internalize Spanish musicality and cadence.',
    },
  },
  {
    id: 28,
    image: '/student_works/Captura de pantalla 2025-10-12 185341.png',
    title: { es: 'Mesa de Ciencias: Del Pigmento a la Naturaleza', en: 'Science Table: Pigments to Nature' },
    category: 'ciencias_lengua',
    categoryLabel: { es: 'Ciencias & Naturaleza', en: 'Science & Nature' },
    technique: { es: 'Extracción de tintes y experimentos botánicos', en: 'Dye extraction & botanical experiments' },
    description: {
      es: '¿Cómo obtienen las plantas sus colores? Pequeños científicos observando y deduciendo en español.',
      en: 'How do plants get their colors? Young scientists observing and deducing in Spanish.',
    },
  },
  {
    id: 29,
    image: '/student_works/Captura de pantalla 2026-09-14 211505.png',
    title: { es: 'Lectura Ilustrada y Diálogo en Español', en: 'Illustrated Reading & Spanish Dialogue' },
    category: 'ciencias_lengua',
    categoryLabel: { es: 'Lengua Española · Cuentos', en: 'Spanish Language · Tales' },
    technique: { es: 'Animación a la lectura y análisis visual', en: 'Visual storytelling & reading literacy' },
    description: {
      es: 'Álbumes ilustrados que despiertan la curiosidad léxica y construyen oraciones complejas con soltura.',
      en: 'Picture books that spark lexical curiosity and build rich sentences with total ease.',
    },
  },
  {
    id: 30,
    image: '/student_works/Screenshot[7]-01.png',
    title: { es: 'Historias del Bosque y Animales', en: 'Forest Tales & Wildlife' },
    category: 'ciencias_lengua',
    categoryLabel: { es: 'Ciencias & Narración', en: 'Science & Storytelling' },
    technique: { es: 'Fábulas ecológicas y dibujo guiado', en: 'Ecological fables & guided sketch' },
    description: {
      es: 'Conociendo los hábitos de los animales del bosque mientras aprenden adjetivos y hábitats.',
      en: 'Learning about woodland animal habits while acquiring adjectives and habitat vocabulary.',
    },
  },
  {
    id: 31,
    image: '/student_works/Screenshot[9]-01.png',
    title: { es: 'Mural Panorámico: El Bosque Creativo', en: 'Panoramic Wall: The Creative Forest' },
    category: 'ciencias_lengua',
    categoryLabel: { es: 'Ciencias & Ecosistemas', en: 'Science & Ecosystems' },
    technique: { es: 'Cartografía artística y ecosistemas', en: 'Artistic cartography & ecosystems' },
    description: {
      es: 'Mapa del bosque donde conviven ríos, árboles y fauna descritos al detalle por los niños.',
      en: 'Forest map where rivers, trees, and wildlife coexist, lovingly described by the children.',
    },
  },

  // ==========================================
  // 5. MATERIAL DE REPASO (Láminas de fichas, ejercicios para clase)
  // ==========================================
  {
    id: 32,
    image: '/student_works/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM).jpg',
    title: { es: 'Láminas de Fichas: Ejercicios para Clase #1', en: 'Class Worksheets: Exercises for Class #1' },
    category: 'repaso',
    categoryLabel: { es: 'Láminas de Fichas · Ejercicios', en: 'Worksheets · Class Exercises' },
    technique: { es: 'Ficha didáctica ilustrada para el aula', en: 'Illustrated educational worksheet' },
    description: {
      es: 'Material pedagógico creado por Reyes para afianzar el vocabulario, relacionar conceptos y practicar en casa.',
      en: 'Educational worksheets created by Reyes to reinforce vocabulary, link concepts, and practice at home.',
    },
  },
  {
    id: 33,
    image: '/student_works/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM)(1).jpg',
    title: { es: 'Láminas de Fichas: Ejercicios para Clase #2', en: 'Class Worksheets: Exercises for Class #2' },
    category: 'repaso',
    categoryLabel: { es: 'Láminas de Fichas · Ejercicios', en: 'Worksheets · Class Exercises' },
    technique: { es: 'Ficha de lectoescritura creativa', en: 'Creative literacy & writing sheet' },
    description: {
      es: 'Ejercicios amenos con retos visuales para completar oraciones y afianzar la ortografía sin presión.',
      en: 'Engaging exercises with visual challenges to complete sentences and strengthen spelling without pressure.',
    },
  },
  {
    id: 34,
    image: '/student_works/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM)(2).jpg',
    title: { es: 'Láminas de Fichas: Ejercicios para Clase #3', en: 'Class Worksheets: Exercises for Class #3' },
    category: 'repaso',
    categoryLabel: { es: 'Láminas de Fichas · Ejercicios', en: 'Worksheets · Class Exercises' },
    technique: { es: 'Guía visual de repaso semanal', en: 'Weekly illustrated review guide' },
    description: {
      es: 'Recurso imprimible que acompaña a las familias durante toda la semana para repasar con alegría.',
      en: 'Printable take-home resource that accompanies families throughout the week for cheerful review.',
    },
  },
  {
    id: 35,
    image: '/student_works/PRUEBA  (Jan 26, 2026 at 8_59 PM) (1).jpg',
    title: { es: 'Cuaderno del Taller: Ejercicios para Clase', en: 'Studio Notebook: Exercises for Class' },
    category: 'repaso',
    categoryLabel: { es: 'Material de Repaso · Cuaderno', en: 'Study Materials · Notebook' },
    technique: { es: 'Cuaderno pedagógico de seguimiento', en: 'Pedagogical progress notebook' },
    description: {
      es: 'Registro personalizado de las palabras, expresiones artísticas y reflexiones de cada alumno.',
      en: 'Personalized record of each student’s vocabulary discoveries, artistic expressions, and reflections.',
    },
  },
  {
    id: 36,
    image: '/student_works/WhatsApp Image 2026-09-25 at 16.35.22.jpeg',
    title: { es: 'Ficha de Actividad: Ejercicios de Clase', en: 'Activity Sheet: Classroom Exercises' },
    category: 'repaso',
    categoryLabel: { es: 'Material de Repaso · Ejercicios', en: 'Study Materials · Exercises' },
    technique: { es: 'Actividad práctica guiada', en: 'Guided hands-on activity sheet' },
    description: {
      es: 'Ficha interactiva que combina dibujo, coloreado y escritura para asimilar el léxico de la sesión.',
      en: 'Interactive sheet combining drawing, coloring, and writing to absorb the session’s lexicon.',
    },
  },
];
