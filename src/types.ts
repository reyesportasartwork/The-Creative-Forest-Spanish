export type Language = 'es' | 'en';

export interface PillarItem {
  id: string;
  iconName: string;
  label: string;
  englishLabel: string;
  description: string;
  accentColor: string;
  detail: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ClassroomExample {
  id: string;
  childInterest: string;
  subtitle: string;
  scenario: string;
  linguisticWork: string;
  result: string;
  tag: string;
}

export interface ChildActivity {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface MethodArea {
  letter: string;
  name: string;
  focus: string;
  summary: string;
}

export interface ContactFormData {
  parentName: string;
  parentEmail: string;
  childAge: string;
  familyContext: string;
  interests: string[];
  childPassions: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childName?: string;
  rating: number;
  date: string;
  courseTitle: {
    es: string;
    en: string;
  };
  reviewText: {
    es: string;
    en: string;
  };
  teacherReply?: {
    es: string;
    en: string;
    date?: string;
  };
  highlightQuote?: {
    es: string;
    en: string;
  };
  tags: {
    es: string[];
    en: string[];
  };
  initials: string;
  colorBg: string;
}
