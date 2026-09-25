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
  // 1 a 14: Obras artísticas de los alumnos (tarjetas nítidas sin pixelado)
  {
    id: 1,
    image: '/student_works/student_work_1.png',
    title: { es: 'Creación del taller #1', en: 'Studio Creation #1' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 2,
    image: '/student_works/student_work_2.png',
    title: { es: 'Creación del taller #2', en: 'Studio Creation #2' },
    category: 'naturaleza',
    categoryLabel: { es: 'Naturaleza & Botánica', en: 'Nature & Botanicals' },
  },
  {
    id: 3,
    image: '/student_works/student_work_3.png',
    title: { es: 'Creación del taller #3', en: 'Studio Creation #3' },
    category: 'naturaleza',
    categoryLabel: { es: 'Naturaleza & Botánica', en: 'Nature & Botanicals' },
  },
  {
    id: 4,
    image: '/student_works/student_work_4.png',
    title: { es: 'Creación del taller #4', en: 'Studio Creation #4' },
    category: 'manualidades',
    categoryLabel: { es: 'Manualidades & Volumen', en: 'Crafts & Hands-on' },
  },
  {
    id: 5,
    image: '/student_works/student_work_5.png',
    title: { es: 'Creación del taller #5', en: 'Studio Creation #5' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 6,
    image: '/student_works/student_work_6.png',
    title: { es: 'Creación del taller #6', en: 'Studio Creation #6' },
    category: 'naturaleza',
    categoryLabel: { es: 'Naturaleza & Botánica', en: 'Nature & Botanicals' },
  },
  {
    id: 7,
    image: '/student_works/student_work_7.png',
    title: { es: 'Creación del taller #7', en: 'Studio Creation #7' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 8,
    image: '/student_works/student_work_8.png',
    title: { es: 'Creación del taller #8', en: 'Studio Creation #8' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 9,
    image: '/student_works/student_work_9.png',
    title: { es: 'Creación del taller #9', en: 'Studio Creation #9' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 10,
    image: '/student_works/student_work_10.png',
    title: { es: 'Creación del taller #10', en: 'Studio Creation #10' },
    category: 'naturaleza',
    categoryLabel: { es: 'Naturaleza & Botánica', en: 'Nature & Botanicals' },
  },
  {
    id: 11,
    image: '/student_works/student_work_11.png',
    title: { es: 'Creación del taller #11', en: 'Studio Creation #11' },
    category: 'personajes',
    categoryLabel: { es: 'Personajes & Historias', en: 'Characters & Stories' },
  },
  {
    id: 12,
    image: '/student_works/student_work_12.png',
    title: { es: 'Creación del taller #12', en: 'Studio Creation #12' },
    category: 'personajes',
    categoryLabel: { es: 'Personajes & Historias', en: 'Characters & Stories' },
  },
  {
    id: 13,
    image: '/student_works/student_work_13.png',
    title: { es: 'Creación del taller #13', en: 'Studio Creation #13' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 14,
    image: '/student_works/student_work_14.png',
    title: { es: 'Creación del taller #14', en: 'Studio Creation #14' },
    category: 'naturaleza',
    categoryLabel: { es: 'Naturaleza & Botánica', en: 'Nature & Botanicals' },
  },

  // 15 a 22: Momentos de clases en directo
  {
    id: 15,
    image: '/Captura de pantalla 2025-08-02 195530.png',
    title: { es: 'Clase en directo #15', en: 'Live Class #15' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },
  {
    id: 16,
    image: '/Captura de pantalla 2025-08-02 200122.png',
    title: { es: 'Clase en directo #16', en: 'Live Class #16' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },
  {
    id: 17,
    image: '/Captura de pantalla 2025-10-12 220524.png',
    title: { es: 'Clase en directo #17', en: 'Live Class #17' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },
  {
    id: 18,
    image: '/Captura de pantalla 2025-08-02 200139.png',
    title: { es: 'Clase en directo #18', en: 'Live Class #18' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },
  {
    id: 19,
    image: '/Captura de pantalla 2025-08-29 130954.png',
    title: { es: 'Clase en directo #19', en: 'Live Class #19' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },
  {
    id: 20,
    image: '/Captura de pantalla 2024-08-09 170647.png',
    title: { es: 'Clase en directo #20', en: 'Live Class #20' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },
  {
    id: 21,
    image: '/Captura de pantalla 2026-09-22 195717.png',
    title: { es: 'Clase en directo #21', en: 'Live Class #21' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },
  {
    id: 22,
    image: '/WhatsApp Image 2026-09-25 at 16.28.48.jpeg',
    title: { es: 'Clase en directo #22', en: 'Live Class #22' },
    category: 'en_vivo',
    categoryLabel: { es: 'Clases en Vivo', en: 'Live Classes' },
  },

  // 23 a 30: Creaciones físicas y prácticas sobre papel
  {
    id: 23,
    image: '/WhatsApp Image 2026-09-25 at 16.18.04.jpeg',
    title: { es: 'Creación del taller #23', en: 'Studio Creation #23' },
    category: 'naturaleza',
    categoryLabel: { es: 'Naturaleza & Botánica', en: 'Nature & Botanicals' },
  },
  {
    id: 24,
    image: '/WhatsApp Image 2026-09-25 at 16.18.05.jpeg',
    title: { es: 'Creación del taller #24', en: 'Studio Creation #24' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 25,
    image: '/WhatsApp Image 2026-09-25 at 16.18.49.jpeg',
    title: { es: 'Creación del taller #25', en: 'Studio Creation #25' },
    category: 'historias',
    categoryLabel: { es: 'Personajes & Historias', en: 'Characters & Stories' },
  },
  {
    id: 26,
    image: '/WhatsApp Image 2026-09-25 at 16.19.00.jpeg',
    title: { es: 'Creación del taller #26', en: 'Studio Creation #26' },
    category: 'historias',
    categoryLabel: { es: 'Personajes & Historias', en: 'Characters & Stories' },
  },
  {
    id: 27,
    image: '/WhatsApp Image 2026-09-25 at 16.20.08.jpeg',
    title: { es: 'Material del taller #27', en: 'Studio Material #27' },
    category: 'materiales',
    categoryLabel: { es: 'Materiales & Repaso', en: 'Study Materials' },
  },
  {
    id: 28,
    image: '/WhatsApp Image 2026-09-25 at 16.20.09.jpeg',
    title: { es: 'Creación del taller #28', en: 'Studio Creation #28' },
    category: 'historias',
    categoryLabel: { es: 'Personajes & Historias', en: 'Characters & Stories' },
  },
  {
    id: 29,
    image: '/WhatsApp Image 2026-09-25 at 16.20.10.jpeg',
    title: { es: 'Creación del taller #29', en: 'Studio Creation #29' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },
  {
    id: 30,
    image: '/WhatsApp Image 2026-04-20 at 14.07.37 (1).jpeg',
    title: { es: 'Creación del taller #30', en: 'Studio Creation #30' },
    category: 'pintura',
    categoryLabel: { es: 'Acuarela & Pintura', en: 'Watercolor & Painting' },
  },

  // 31 a 33: Mensajes de familias y experiencias
  {
    id: 31,
    image: '/WhatsApp Image 2026-09-25 at 16.35.22.jpeg',
    title: { es: 'Experiencia con familias #31', en: 'Family Review #31' },
    category: 'experiencias',
    categoryLabel: { es: 'Familias & Testimonios', en: 'Family Reviews' },
  },
  {
    id: 32,
    image: '/WhatsApp Image 2026-09-25 at 16.36.53.jpeg',
    title: { es: 'Experiencia con familias #32', en: 'Family Review #32' },
    category: 'experiencias',
    categoryLabel: { es: 'Familias & Testimonios', en: 'Family Reviews' },
  },
  {
    id: 33,
    image: '/WhatsApp Image 2026-09-25 at 16.40.38.jpeg',
    title: { es: 'Experiencia con familias #33', en: 'Family Review #33' },
    category: 'experiencias',
    categoryLabel: { es: 'Familias & Testimonios', en: 'Family Reviews' },
  },

  // 34 a 37: Materiales de repaso y proyectos
  {
    id: 34,
    image: '/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM).jpg',
    title: { es: 'Material de repaso (I)', en: 'Review Material (I)' },
    category: 'materiales',
    categoryLabel: { es: 'Materiales & Repaso', en: 'Study Materials' },
  },
  {
    id: 35,
    image: '/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM)(1).jpg',
    title: { es: 'Material de repaso (II)', en: 'Review Material (II)' },
    category: 'materiales',
    categoryLabel: { es: 'Materiales & Repaso', en: 'Study Materials' },
  },
  {
    id: 36,
    image: '/Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM)(2).jpg',
    title: { es: 'Material de repaso (III)', en: 'Review Material (III)' },
    category: 'materiales',
    categoryLabel: { es: 'Materiales & Repaso', en: 'Study Materials' },
  },
  {
    id: 37,
    image: '/PRUEBA  (Jan 26, 2026 at 8_59 PM) (1).jpg',
    title: { es: 'Lámina de proyecto #37', en: 'Project Sheet #37' },
    category: 'materiales',
    categoryLabel: { es: 'Materiales & Repaso', en: 'Study Materials' },
  },
];
