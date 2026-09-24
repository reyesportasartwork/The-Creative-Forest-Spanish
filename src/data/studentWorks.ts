export interface StudentWork {
  id: number;
  image: string;
  title: {
    es: string;
    en: string;
  };
  category: 'pintura' | 'naturaleza' | 'manualidades' | 'personajes' | 'historias';
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
  {
    id: 1,
    image: '/student_works/student_work_1.png',
    title: {
      es: 'Un Barco en el Mar al Amanecer',
      en: 'Sailboat at Sunrise'
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Acuarela & Pintura',
      en: 'Watercolor & Painting'
    },
    description: {
      es: 'Pintura marina en acuarela capturando el reflejo del sol sobre el agua y los tonos del horizonte.',
      en: 'Watercolor seascape capturing morning sunlight dancing on water and coastal horizons.'
    },
    technique: {
      es: 'Acuarela y pincelada libre',
      en: 'Watercolor & free brushwork'
    }
  },
  {
    id: 2,
    image: '/student_works/student_work_2.png',
    title: {
      es: 'Los Cuatro Elementos de la Naturaleza',
      en: 'The Four Natural Elements'
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Naturaleza & Ciencia',
      en: 'Nature & Science'
    },
    description: {
      es: 'Composición en cuatro cuadrantes representando el aire, el agua, la tierra y el fuego con texturas pictóricas.',
      en: 'Four-quadrant composition exploring air, water, earth, and fire through rich textures.'
    },
    technique: {
      es: 'Técnica mixta y pigmentos',
      en: 'Mixed media & pigments'
    }
  },
  {
    id: 3,
    image: '/student_works/student_work_3.png',
    title: {
      es: 'La Ventana de Flores & Mandala de Girasol',
      en: 'Flower Window & Sunflower Mandala'
    },
    category: 'naturaleza',
    categoryLabel: {
      es: 'Botánica & Arte',
      en: 'Botanicals & Art'
    },
    description: {
      es: 'Mandala botánico y lámina de estudio de girasoles aprendiendo las partes de la flor en español.',
      en: 'Botanical mandala and sunflower nature study, naming flower anatomy in Spanish.'
    },
    technique: {
      es: 'Acuarela botánica y caligrafía',
      en: 'Botanical watercolor & lettering'
    }
  },
  {
    id: 4,
    image: '/student_works/student_work_4.png',
    title: {
      es: 'El Reloj Mágico del Taller',
      en: 'The Magic Studio Clock'
    },
    category: 'manualidades',
    categoryLabel: {
      es: 'Manualidades & Volumen',
      en: 'Crafts & Hands-on'
    },
    description: {
      es: 'Reloj artesanal interactivo sobre plato para aprender las horas, los números y rutinas del día a día.',
      en: 'Handmade interactive plate clock crafted to explore daily routines and telling time in Spanish.'
    },
    technique: {
      es: 'Cartulina, volumen y ensamblaje',
      en: 'Cardstock, volume & paper craft'
    }
  },
  {
    id: 5,
    image: '/student_works/student_work_5.png',
    title: {
      es: 'Máscara de Superhéroe y Personajes',
      en: 'Superhero & Character Mask'
    },
    category: 'personajes',
    categoryLabel: {
      es: 'Personajes & Disfraz',
      en: 'Characters & Drama'
    },
    description: {
      es: 'Máscara pintada a mano de superhéroe y personajes para dramatizaciones y juegos en español guiados por Reyes.',
      en: 'Hand-painted superhero character mask crafted for drama games and spontaneous Spanish dialogues with Reyes.'
    },
    technique: {
      es: 'Pintura y modelado en cartón',
      en: 'Painting & mask craft'
    }
  },
  {
    id: 6,
    image: '/student_works/student_work_6.png',
    title: {
      es: 'Las Lluvias de Abril y Flores de Mayo',
      en: 'April Showers & May Flowers'
    },
    category: 'historias',
    categoryLabel: {
      es: 'Cuentos & Letras',
      en: 'Stories & Rhymes'
    },
    description: {
      es: 'Cartel poético con refranero popular, arcoíris y flores de primavera caligrafiadas.',
      en: 'Poetic spring banner celebrating popular sayings, rainbows, and wild blossom lettering.'
    },
    technique: {
      es: 'Ilustración y caligrafía manual',
      en: 'Illustration & hand lettering'
    }
  },
  {
    id: 7,
    image: '/student_works/student_work_7.png',
    title: {
      es: 'Collage del Gato Verde Fantástico',
      en: 'The Fantastic Green Cat Collage'
    },
    category: 'personajes',
    categoryLabel: {
      es: 'Collage & Personajes',
      en: 'Collage & Characters'
    },
    description: {
      es: 'Recorte de siluetas de colores, composición de personajes fantásticos y narración de sus aventuras.',
      en: 'Color paper cutting and character composition with lively storytelling in Spanish.'
    },
    technique: {
      es: 'Collage de papeles texturados',
      en: 'Textured paper collage'
    }
  },
  {
    id: 8,
    image: '/student_works/student_work_8.png',
    title: {
      es: 'El Vuelo de las Mariposas',
      en: 'The Flight of the Butterflies'
    },
    category: 'manualidades',
    categoryLabel: {
      es: 'Manualidades & Papel',
      en: 'Paper Crafts & Flight'
    },
    description: {
      es: 'Patronaje simétrico de alas de mariposa con degradados de color y texturas botánicas.',
      en: 'Symmetrical butterfly wing crafts exploring color gradients and pattern naming.'
    },
    technique: {
      es: 'Plegado y degradado de color',
      en: 'Paper folding & gradients'
    }
  },
  {
    id: 9,
    image: '/student_works/student_work_9.png',
    title: {
      es: 'El Oso Panda y sus Amigos del Bosque',
      en: 'Panda Bear & Forest Companions'
    },
    category: 'personajes',
    categoryLabel: {
      es: 'Dibujo & Animales',
      en: 'Drawing & Wildlife'
    },
    description: {
      es: 'Dibujos paso a paso conectando trazos guiados con rasgos y emociones de animales.',
      en: 'Guided animal sketch studies linking gentle strokes with animal character traits.'
    },
    technique: {
      es: 'Grafito y rotuladores al agua',
      en: 'Graphite & water-based markers'
    }
  },
  {
    id: 10,
    image: '/student_works/student_work_10.png',
    title: {
      es: 'Pintura Táctil y Creatividad Libre',
      en: 'Tactile Painting & Free Exploration'
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Pintura & Texturas',
      en: 'Painting & Textures'
    },
    description: {
      es: 'Exploración de pigmentos sobre cartón, mezclando tonos terrosos y experimentando texturas orgánicas.',
      en: 'Pigment and tactile cardboard painting, blending earth tones and experimenting freely.'
    },
    technique: {
      es: 'Gouache y pintura con dedos',
      en: 'Gouache & tactile painting'
    }
  },
  {
    id: 11,
    image: '/student_works/student_work_11.png',
    title: {
      es: 'Mesa de Pigmentos y Expresión Plástica',
      en: 'Studio Palette & Creative Expression'
    },
    category: 'pintura',
    categoryLabel: {
      es: 'Pigmentos & Taller',
      en: 'Colors & Studio'
    },
    description: {
      es: 'Preparación de paleta de colores, mezclas de pintura y dinámicas lúdicas con Felpa para soltar la expresión oral.',
      en: 'Color palette mixing, vibrant studio pigments, and playful dynamics with Felpa to inspire confidence in Spanish.'
    },
    technique: {
      es: 'Paleta pictórica y juego interactivo',
      en: 'Palette mixing & expressive play'
    }
  },
  {
    id: 12,
    image: '/student_works/student_work_12.png',
    title: {
      es: 'Canción y Poema de Tiggy la Gatita',
      en: 'Tiggy the Kitten Song & Poem'
    },
    category: 'historias',
    categoryLabel: {
      es: 'Música & Poesía',
      en: 'Music & Story Poetry'
    },
    description: {
      es: 'Lectura rimada, ritmo vocal y entonación en español con rimas divertidas de animales traviesos.',
      en: 'Rhyming verses, vocal rhythm, and expressive Spanish intonation with animal poetry.'
    },
    technique: {
      es: 'Poesía rimada y canción coral',
      en: 'Rhymed poetry & song'
    }
  },
  {
    id: 13,
    image: '/student_works/student_work_13.png',
    title: {
      es: 'Flores de Papel y Jardinería Artística',
      en: 'Paper Blooms & Botanical Craft'
    },
    category: 'manualidades',
    categoryLabel: {
      es: 'Manualidades & Flores',
      en: 'Flower Crafting'
    },
    description: {
      es: 'Modelado en papel seda y cartulina de flores silvestres para decorar el cuaderno de campo.',
      en: 'Silk paper and cardstock wild bloom modeling to decorate personal nature journals.'
    },
    technique: {
      es: 'Papel seda y volumen tridimensional',
      en: 'Tissue paper & 3D floral modeling'
    }
  },
  {
    id: 14,
    image: '/student_works/student_work_14.png',
    title: {
      es: 'El Sol Radiante y las Emociones',
      en: 'The Radiant Sun & Feelings'
    },
    category: 'personajes',
    categoryLabel: {
      es: 'Emociones & Arte',
      en: 'Feelings & Art'
    },
    description: {
      es: 'Construcción plástica de rostros solares que expresan diferentes estados de ánimo, calma y alegría.',
      en: 'Sculpting sunshine faces expressing emotional nuances, joy, and calm focus in Spanish.'
    },
    technique: {
      es: 'Modelado y colores cálidos',
      en: 'Warm palettes & paper relief'
    }
  }
];
