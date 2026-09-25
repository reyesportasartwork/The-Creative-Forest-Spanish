export interface StudentWork {
  id: number;
  image: string;
  title: {
    es: string;
    en: string;
  };
  category:
    | 'pintura'
    | 'naturaleza'
    | 'manualidades'
    | 'personajes'
    | 'historias'
    | 'en_vivo'
    | 'materiales'
    | 'experiencias';
  categoryLabel: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  technique: {
    es: string;
    en: string;
  };
}

export const STUDENT_WORKS: StudentWork[] = [
  // --- 1 a 14: Trabajos y capturas de sesiones en vivo originales ---
  {
    id: 1,
    image: '/Captura de pantalla 2025-08-29 114331.png',
    title: {
      es: 'Un Barco en el Mar al Amanecer',
      en: 'Sailboat at Sunrise',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Acuarela & Pintura',
      en: 'Watercolor & Painting',
    },
    description: {
      es: 'Pintura marina en acuarela capturando el reflejo del sol sobre el agua y los tonos del horizonte mientras el alumno describe los colores en español.',
      en: 'Watercolor seascape capturing morning sunlight on water and coastal horizons as the student describes shades in Spanish.',
    },
    technique: {
      es: 'Acuarela y pincelada libre en directo',
      en: 'Watercolor & live free brushwork',
    },
  },
  {
    id: 2,
    image: '/Captura de pantalla 2026-05-12 133052.png',
    title: {
      es: 'Los Cuatro Elementos de la Naturaleza',
      en: 'The Four Natural Elements',
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Naturaleza & Ciencia',
      en: 'Nature & Science',
    },
    description: {
      es: 'Composición en cuatro cuadrantes representando el aire, el agua, la tierra y el fuego con texturas pictóricas y diálogo guiado.',
      en: 'Four-quadrant composition exploring air, water, earth, and fire through rich textures and guided dialogue.',
    },
    technique: {
      es: 'Técnica mixta y pigmentos en papel',
      en: 'Mixed media & pigments on paper',
    },
  },
  {
    id: 3,
    image: '/Captura de pantalla 2026-06-21 170102.png',
    title: {
      es: 'La Ventana de Flores & Mandala de Girasol',
      en: 'Flower Window & Sunflower Mandala',
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Botánica & Arte',
      en: 'Botanicals & Art',
    },
    description: {
      es: 'Mandala botánico y lámina de estudio de girasoles aprendiendo las partes de la flor, tallos y pétalos en español.',
      en: 'Botanical mandala and sunflower nature study, naming flower anatomy in Spanish.',
    },
    technique: {
      es: 'Acuarela botánica y caligrafía',
      en: 'Botanical watercolor & lettering',
    },
  },
  {
    id: 4,
    image: '/Captura de pantalla 2026-06-07 202728.png',
    title: {
      es: 'El Reloj Mágico del Taller',
      en: 'The Magic Studio Clock',
    },
    category: 'manualidades',
    categoryLabel: {
      es: 'Manualidades & Volumen',
      en: 'Crafts & Hands-on',
    },
    description: {
      es: 'Reloj artesanal interactivo sobre plato para aprender las horas, los números y las rutinas del día a día en español.',
      en: 'Interactive handcrafted clock on a plate for learning hours, numbers, and daily routines in Spanish.',
    },
    technique: {
      es: 'Collage, cartulina y aguja móvil',
      en: 'Collage, cardstock & movable hand',
    },
  },
  {
    id: 5,
    image: '/Captura de pantalla 2026-05-07 114651.png',
    title: {
      es: 'El Pez Globo Espacial & Océano Azul',
      en: 'Cosmic Pufferfish & Deep Ocean',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Mundo Marino & Fantasía',
      en: 'Marine World & Fantasy',
    },
    description: {
      es: 'Criatura marina imaginaria con espinas y ojos expresivos nadando entre burbujas fluorescentes.',
      en: 'Imaginary sea creature with soft spines and expressive eyes swimming among fluorescent bubbles.',
    },
    technique: {
      es: 'Acuarela sobre húmedo y cera',
      en: 'Wet-on-wet watercolor & wax resist',
    },
  },
  {
    id: 6,
    image: '/Captura de pantalla 2026-06-01 215625.png',
    title: {
      es: 'El Volcán en Erupción & Geología Viva',
      en: 'Erupting Volcano & Living Geology',
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Ciencia & Geología',
      en: 'Science & Geology',
    },
    description: {
      es: 'Ilustración geológica de un volcán en actividad volcánica con ríos de lava incandescente y cenizas en el cielo.',
      en: 'Geological illustration of an active volcano with flowing lava rivers and ash clouds.',
    },
    technique: {
      es: 'Ceras grasas y aguada cálida',
      en: 'Oil pastels & warm color wash',
    },
  },
  {
    id: 7,
    image: '/Captura de pantalla 2025-10-19 174637.png',
    title: {
      es: 'Pájaro del Bosque & Aves en Acuarela',
      en: 'Forest Bird in Watercolor',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Fauna & Acuarela',
      en: 'Wildlife & Watercolor',
    },
    description: {
      es: 'Estudio de un ave posada sobre una rama con plumas matizadas en tonos azules y pardo mientras practican nombres de pájaros.',
      en: 'Study of a perched songbird with shaded blue and earthy feathers while practicing bird names in Spanish.',
    },
    technique: {
      es: 'Acuarela estratificada y detalle fino',
      en: 'Layered watercolor & fine brushwork',
    },
  },
  {
    id: 8,
    image: '/Captura de pantalla 2026-05-27 111427.png',
    title: {
      es: 'El Faro Luminoso y la Costa Marina',
      en: 'The Coastal Lighthouse',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Paisaje & Arquitectura',
      en: 'Landscape & Architecture',
    },
    description: {
      es: 'Faro a orillas del acantilado proyectando su haz de luz nocturno sobre el mar embravecido.',
      en: 'Cliffside lighthouse casting its evening beam over dynamic ocean waves.',
    },
    technique: {
      es: 'Gouache y técnica de reservas',
      en: 'Gouache & masking techniques',
    },
  },
  {
    id: 9,
    image: '/Captura de pantalla 2026-06-21 171244.png',
    title: {
      es: 'Pez Arcoíris & Fondos Marinos',
      en: 'Rainbow Fish & Coral Reef',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Vida Marina & Color',
      en: 'Marine Life & Color',
    },
    description: {
      es: 'Pez de escamas brillantes entre corales y algas verdes, practicando adjetivos de color y texturas en directo.',
      en: 'Shimmering fish among corals and seaweeds, learning color adjectives and textures.',
    },
    technique: {
      es: 'Acuarela con toques metalizados',
      en: 'Watercolor with metallic accents',
    },
  },
  {
    id: 10,
    image: '/Captura de pantalla 2025-10-12 185341.png',
    title: {
      es: 'Girasoles Silvestres & Botánica en Vivo',
      en: 'Wild Sunflowers & Botany Study',
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Botánica & Naturaleza',
      en: 'Botanicals & Nature',
    },
    description: {
      es: 'Bodegón botánico infantil de girasoles con pétalos dorados y semillas concéntricas con Felpa y Reyes.',
      en: 'Botanical sunflower still life with golden petals and seed spirals alongside Felpa and Reyes.',
    },
    technique: {
      es: 'Témpera y ceras acuarelables',
      en: 'Tempera & watercolor crayons',
    },
  },
  {
    id: 11,
    image: '/Captura de pantalla 2026-05-27 104941.png',
    title: {
      es: 'Máscara Creativa de Lobo & Superhéroe',
      en: 'Wolf Superhero Mask',
    },
    category: 'personajes',
    categoryLabel: {
      es: 'Máscaras & Personajes',
      en: 'Masks & Characters',
    },
    description: {
      es: 'Máscara recortable y pintada a mano para juegos de rol, teatros de títeres y dramatizaciones en español.',
      en: 'Hand-painted cut-out mask for roleplay, puppet theatre, and lively Spanish dramatizations.',
    },
    technique: {
      es: 'Recorte sobre cartón y pintura acrílica',
      en: 'Cardboard cut-out & acrylic paint',
    },
  },
  {
    id: 12,
    image: '/Captura de pantalla 2026-06-16 220318.png',
    title: {
      es: 'Máscara Festiva & Expresión Teatral',
      en: 'Festive Carnival Mask',
    },
    category: 'personajes',
    categoryLabel: {
      es: 'Expresión & Teatro',
      en: 'Expression & Theatre',
    },
    description: {
      es: 'Máscara de expresión alegre con plumas y ornamentos para soltar el habla y la risa sin timidez.',
      en: 'Joyful expression mask with feathers and ornaments designed to inspire spontaneous Spanish speech.',
    },
    technique: {
      es: 'Cartulina, plumas y rotulador permanente',
      en: 'Cardstock, feathers & marker ink',
    },
  },
  {
    id: 13,
    image: '/Captura de pantalla 2025-10-12 220642.png',
    title: {
      es: 'Paseo en Bicicleta con Globos al Atardecer',
      en: 'Sunset Bicycle with Balloons',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Ilustración & Narrativa',
      en: 'Illustration & Story',
    },
    description: {
      es: 'Escena ilustrada de un paseo campestre con globos de colores flotando sobre un sendero arbolado.',
      en: 'Whimsical countryside ride with colorful balloons drifting above a tree-lined path.',
    },
    technique: {
      es: 'Lápices acuarelables y tinta china',
      en: 'Watercolor pencils & India ink',
    },
  },
  {
    id: 14,
    image: '/Captura de pantalla 2026-08-24 210450.png',
    title: {
      es: 'El Gran Mandala Solar & Geometría Natural',
      en: 'Solar Mandala & Natural Geometry',
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Geometría Natural & Mandala',
      en: 'Natural Geometry & Mandala',
    },
    description: {
      es: 'Mandala concéntrico inspirado en el sol estival y las flores de temporada, fomentando la concentración y la calma.',
      en: 'Concentric mandala inspired by the summer sun and seasonal flora, nurturing mindful focus in Spanish.',
    },
    technique: {
      es: 'Rotuladores finos y degradados en acuarela',
      en: 'Fine liners & watercolor gradients',
    },
  },

  // --- 15 a 22: Nuevas capturas de sesiones en vivo compartidas por la usuaria ---
  {
    id: 15,
    image: '/Captura de pantalla 2025-08-02 195530.png',
    title: {
      es: 'Sesión Creativa en Directo con Reyes',
      en: 'Live Creative Session with Reyes',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'Conexión en directo donde el alumno muestra orgulloso su avance artístico en un entorno cercano y entusiasta.',
      en: 'Live online class where the student proudly shares artistic progress in a supportive, joyful setting.',
    },
    technique: {
      es: 'Sesión online individual en directo',
      en: 'Live one-on-one online session',
    },
  },
  {
    id: 16,
    image: '/Captura de pantalla 2025-08-02 200100.png',
    title: {
      es: 'Diálogo y Creación en Español en Vivo',
      en: 'Live Spanish Dialogue & Creation',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'Pintura y conversación en tiempo real: los peques hablan de lo que sienten y ven mientras crean con sus manos.',
      en: 'Real-time art and dialogue: children naturally share their thoughts and feelings while creating with their hands.',
    },
    technique: {
      es: 'Conversación inmersiva guiada con arte',
      en: 'Guided immersive conversation through art',
    },
  },
  {
    id: 17,
    image: '/Captura de pantalla 2025-08-02 200122.png',
    title: {
      es: 'Confianza y Expresión Artística en Directo',
      en: 'Confidence & Art Expression Live',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'Momento de complicidad entre profe y alumno donde los errores se transforman en anécdotas y risas en español.',
      en: 'Warm mentor-student moment where mistakes become joyful learning opportunities and laughter.',
    },
    technique: {
      es: 'Acompañamiento positivo y no directivo',
      en: 'Positive, non-directive child mentorship',
    },
  },
  {
    id: 18,
    image: '/Captura de pantalla 2025-08-02 200139.png',
    title: {
      es: 'Pantalla Compartida: Técnicas de Color y Dibujo',
      en: 'Shared Screen: Color Techniques & Sketching',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'Explicación interactiva paso a paso de mezclas de color y trazos, adaptada al ritmo particular de cada niño.',
      en: 'Step-by-step interactive demonstration of color mixing and brush strokes tailored to each child’s pace.',
    },
    technique: {
      es: 'Demostración artística en directo',
      en: 'Live hands-on art demonstration',
    },
  },
  {
    id: 19,
    image: '/Captura de pantalla 2025-08-19 220600.png',
    title: {
      es: 'Personajes e Historias en Vivo en el Aula Virtual',
      en: 'Live Characters & Stories in Virtual Studio',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'Creando seres mágicos y amigos animales en directo, nombrando sus emociones y aventuras fantásticas.',
      en: 'Crafting magical creatures and animal friends live, naming their feelings and adventures in Spanish.',
    },
    technique: {
      es: 'Narración oral y dibujo sincrónico',
      en: 'Oral storytelling & synchronous drawing',
    },
  },
  {
    id: 20,
    image: '/Captura de pantalla 2025-08-29 130954.png',
    title: {
      es: 'Ilustrando Escenas de la Naturaleza en Directo',
      en: 'Illustrating Nature Scenes Live',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'Sesión enfocada en la observación botánica y los paisajes naturales: árboles, cielos y vida silvestre.',
      en: 'Session centered on botanical observation and nature: trees, open skies, and gentle wildlife.',
    },
    technique: {
      es: 'Acuarela de paisaje y vocabulario natural',
      en: 'Landscape watercolor & nature vocabulary',
    },
  },
  {
    id: 21,
    image: '/Captura de pantalla 2025-10-12 220524.png',
    title: {
      es: 'Pequeños Artistas: Compartiendo Proyectos',
      en: 'Young Artists Sharing Projects',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'El alumno muestra entusiasmado el resultado de su esfuerzo creativo al finalizar la clase.',
      en: 'The student eagerly presents the finished masterpiece at the close of class.',
    },
    technique: {
      es: 'Presentación oral y refuerzo positivo',
      en: 'Oral presentation & positive reinforcement',
    },
  },
  {
    id: 22,
    image: '/Captura de pantalla 2026-09-25 165123.png',
    title: {
      es: 'Celebrando Logros y Habla Fluida en Español',
      en: 'Celebrating Fluency & Creative Milestones',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'Clase reciente donde se aprecia la soltura y espontaneidad ganada tras varias semanas en el taller.',
      en: 'Recent session highlighting the spontaneous fluency and joy gained through regular studio sessions.',
    },
    technique: {
      es: 'Conversación natural consolidada con arte',
      en: 'Natural conversational Spanish consolidated through art',
    },
  },

  // --- 23 a 33: Fotos de WhatsApp, creaciones físicas y testimonios reales ---
  {
    id: 23,
    image: '/WhatsApp Image 2026-09-25 at 16.18.04.jpeg',
    title: {
      es: 'Lámina Botánica y Estudio Floral Infantil',
      en: 'Children Botanical Floral Study',
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Botánica & Naturaleza',
      en: 'Botanicals & Nature',
    },
    description: {
      es: 'Obra sobre papel realizada por el alumno explorando diferentes tonalidades de pétalos, tallos y capullos.',
      en: 'Artwork on paper exploring floral shades, stems, and petals created independently after class.',
    },
    technique: {
      es: 'Acuarela botánica sobre papel de grano grueso',
      en: 'Botanical watercolor on heavy paper',
    },
  },
  {
    id: 24,
    image: '/WhatsApp Image 2026-09-25 at 16.18.05.jpeg',
    title: {
      es: 'Flores del Campo & Paleta de Acuarelas',
      en: 'Field Flowers & Watercolor Palette',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Acuarela & Pintura',
      en: 'Watercolor & Painting',
    },
    description: {
      es: 'Composición floral libre donde el niño aplica las técnicas de mezcla de colores aprendidas en la sesión.',
      en: 'Free floral composition where the child applies color mixing techniques learned in class.',
    },
    technique: {
      es: 'Pintura a la acuarela y trazos libres',
      en: 'Watercolor paint & expressive gestures',
    },
  },
  {
    id: 25,
    image: '/WhatsApp Image 2026-09-25 at 16.18.49.jpeg',
    title: {
      es: 'Cuento Ilustrado: Palabras y Dibujos del Alumno',
      en: 'Illustrated Story: Words & Drawings by Student',
    },
    category: 'historias',
    categoryLabel: {
      es: 'Cuentos & Narración',
      en: 'Stories & Drawing',
    },
    description: {
      es: 'Ficha de historia creada por el niño combinando frases en español con viñetas dibujadas a mano.',
      en: 'Story worksheet made by the child pairing Spanish sentences with hand-drawn scenes.',
    },
    technique: {
      es: 'Rotuladores, lápices y caligrafía guiada',
      en: 'Felt pens, color pencils & guided lettering',
    },
  },
  {
    id: 26,
    image: '/WhatsApp Image 2026-09-25 at 16.19.00.jpeg',
    title: {
      es: 'La Gran Aventura: Narración Gráfica',
      en: 'The Great Adventure: Graphic Storytelling',
    },
    category: 'historias',
    categoryLabel: {
      es: 'Cuentos & Narración',
      en: 'Stories & Drawing',
    },
    description: {
      es: 'Página ilustrada con escenas de acción y personajes que viajan por el bosque mágico.',
      en: 'Illustrated adventure page featuring characters traveling through the enchanted forest.',
    },
    technique: {
      es: 'Cómic infantil y secuencias narrativas',
      en: 'Children comic strip & storytelling panels',
    },
  },
  {
    id: 27,
    image: '/WhatsApp Image 2026-09-25 at 16.20.08.jpeg',
    title: {
      es: 'Reto Creativo & Ficha Ilustrada del Taller',
      en: 'Creative Challenge & Studio Illustrated Sheet',
    },
    category: 'materiales',
    categoryLabel: {
      es: 'Materiales & Repaso',
      en: 'Materials & Sheets',
    },
    description: {
      es: 'Guía práctica diseñada por Reyes para que los alumnos continúen jugando y reforzando vocabulario entre clases.',
      en: 'Practical activity designed by Reyes to reinforce vocabulary and creative play between sessions.',
    },
    technique: {
      es: 'Material didáctico artesanal y dibujo activo',
      en: 'Handmade pedagogical sheet & active drawing',
    },
  },
  {
    id: 28,
    image: '/WhatsApp Image 2026-09-25 at 16.20.09.jpeg',
    title: {
      es: 'Escritura Creativa y Dibujo en Español',
      en: 'Creative Writing & Drawing in Spanish',
    },
    category: 'historias',
    categoryLabel: {
      es: 'Cuentos & Narración',
      en: 'Stories & Drawing',
    },
    description: {
      es: 'Producción escrita y artística de un estudiante expresando sus ideas con oraciones completas y dibujos expresivos.',
      en: 'Student written and artistic production expressing thoughts with full sentences and rich drawings.',
    },
    technique: {
      es: 'Escritura expresiva y coloreado con ceras',
      en: 'Expressive writing & crayon coloring',
    },
  },
  {
    id: 29,
    image: '/WhatsApp Image 2026-09-25 at 16.20.10.jpeg',
    title: {
      es: 'Exploración Artística: Práctica y Color',
      en: 'Artistic Exploration: Color Practice',
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Acuarela & Pintura',
      en: 'Watercolor & Painting',
    },
    description: {
      es: 'Lámina de exploración cromática donde el niño experimenta con intensidades y matices de pigmentos.',
      en: 'Color exploration sheet where the child experiments with pigment density and subtle tones.',
    },
    technique: {
      es: 'Degradados de color y trazos rítmicos',
      en: 'Color gradients & rhythmic brush strokes',
    },
  },
  {
    id: 30,
    image: '/WhatsApp Image 2026-09-25 at 16.28.48.jpeg',
    title: {
      es: 'Encuentro en Directo: Alumnos y Reyes en Clase',
      en: 'Live Session: Students & Reyes in Class',
    },
    category: 'en_vivo',
    categoryLabel: {
      es: 'Clases en Vivo',
      en: 'Live Classes',
    },
    description: {
      es: 'La pantalla compartida durante la sesión: risas, atención y participación activa creando en español.',
      en: 'The shared classroom screen: laughter, focus, and active engagement creating in Spanish.',
    },
    technique: {
      es: 'Entorno de videollamada interactivo y cálido',
      en: 'Warm, interactive online classroom environment',
    },
  },
  {
    id: 31,
    image: '/WhatsApp Image 2026-09-25 at 16.35.22.jpeg',
    title: {
      es: 'Familia Entusiasmada: Progreso Real en Casa',
      en: 'Enthusiastic Family: Real Progress at Home',
    },
    category: 'experiencias',
    categoryLabel: {
      es: 'Familias & Testimonios',
      en: 'Family Reviews',
    },
    description: {
      es: 'Mensajes directos de padres maravillados con la motivación de sus hijos y cómo esperan con ilusión cada clase.',
      en: 'Direct family messages amazed by their child’s motivation and eagerness for every upcoming class.',
    },
    technique: {
      es: 'Comunicación continua con familias',
      en: 'Direct parent-teacher dialogue',
    },
  },
  {
    id: 32,
    image: '/WhatsApp Image 2026-09-25 at 16.36.53.jpeg',
    title: {
      es: 'Alegría Familiar al Verlo Hablar en Español',
      en: 'Family Joy Hearing Him Speak Spanish',
    },
    category: 'experiencias',
    categoryLabel: {
      es: 'Familias & Testimonios',
      en: 'Family Reviews',
    },
    description: {
      es: 'Testimonio de cómo el taller ayudó al peque a superar la vergüenza inicial y comunicarse con alegría natural.',
      en: 'Parent testimonial showing how the studio transformed shyness into proud, joyful Spanish communication.',
    },
    technique: {
      es: 'Refuerzo de autoestima lingüística',
      en: 'Language self-confidence building',
    },
  },
  {
    id: 33,
    image: '/WhatsApp Image 2026-09-25 at 16.40.38.jpeg',
    title: {
      es: 'Vínculo Afectivo con el Idioma: Feedback de Padres',
      en: 'Emotional Language Connection: Parent Feedback',
    },
    category: 'experiencias',
    categoryLabel: {
      es: 'Familias & Testimonios',
      en: 'Family Reviews',
    },
    description: {
      es: 'Agradecimientos sinceros de familias homeschool y bilingües por el impacto enriquecedor de las clases con Reyes y Felpa.',
      en: 'Heartfelt appreciation from homeschool and bilingual families for the enriching impact of Reyes & Felpa.',
    },
    technique: {
      es: 'Pedagogía afectiva y conexión humana',
      en: 'Affective pedagogy & human connection',
    },
  },

  // --- 34 a 37: Materiales de repaso y pruebas artísticas del taller ---
  {
    id: 34,
    image: '/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM).jpg',
    title: {
      es: 'Material Didáctico de Repaso del Taller (Parte I)',
      en: 'Studio Review Pedagogical Material (Part I)',
    },
    category: 'materiales',
    categoryLabel: {
      es: 'Materiales & Repaso',
      en: 'Materials & Sheets',
    },
    description: {
      es: 'Lámina original elaborada por Reyes con vocabulario ilustrado, retos de dibujo y juegos sensoriales para casa.',
      en: 'Original sheet crafted by Reyes with illustrated vocabulary, drawing prompts, and sensory games for home.',
    },
    technique: {
      es: 'Diseño didáctico personalizado en alta resolución',
      en: 'High-resolution personalized pedagogical design',
    },
  },
  {
    id: 35,
    image: '/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM)(1).jpg',
    title: {
      es: 'Guía Didáctica Ilustrada: Vocabulario y Arte (Parte II)',
      en: 'Illustrated Study Guide: Vocabulary & Art (Part II)',
    },
    category: 'materiales',
    categoryLabel: {
      es: 'Materiales & Repaso',
      en: 'Materials & Sheets',
    },
    description: {
      es: 'Continuación del material temático con ejercicios visuales que refuerzan la gramática intuitiva y la creatividad.',
      en: 'Continuation of thematic material with visual exercises that reinforce intuitive grammar and imagination.',
    },
    technique: {
      es: 'Guía de consolidación artística y lingüística',
      en: 'Artistic & linguistic consolidation guide',
    },
  },
  {
    id: 36,
    image: '/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM)(2).jpg',
    title: {
      es: 'Ficha de Actividades y Retos Creativos (Parte III)',
      en: 'Activity Sheet & Creative Challenges (Part III)',
    },
    category: 'materiales',
    categoryLabel: {
      es: 'Materiales & Repaso',
      en: 'Materials & Sheets',
    },
    description: {
      es: 'Dinámicas lúdicas para colorear, conectar palabras y compartir con Felpa durante la siguiente sesión.',
      en: 'Playful coloring, word-matching, and conversational prompts to share with Felpa in upcoming sessions.',
    },
    technique: {
      es: 'Ficha de actividad práctica imprimible',
      en: 'Printable hands-on activity sheet',
    },
  },
  {
    id: 37,
    image: '/PRUEBA  (Jan 26, 2026 at 8_59 PM) (1).jpg',
    title: {
      es: 'Proyecto y Lámina de Prueba Artística',
      en: 'Special Project & Studio Art Trial Sheet',
    },
    category: 'materiales',
    categoryLabel: {
      es: 'Materiales & Repaso',
      en: 'Materials & Sheets',
    },
    description: {
      es: 'Gran lámina de experimentación plástica: texturas, bocetos iniciales y pruebas de pigmentos para futuros proyectos.',
      en: 'Expansive studio experimentation sheet: textures, initial sketches, and pigment trials for upcoming works.',
    },
    technique: {
      es: 'Exploración plástica libre en formato grande',
      en: 'Large-scale free plastic exploration',
    },
  },
];
