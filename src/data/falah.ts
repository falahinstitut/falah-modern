export const WHATSAPP_PHONE = "0033651969750";

export function waLink(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waLink(
  "Salam alaykoum, je souhaite avoir plus d'informations sur vos cours.",
);

export const WA_LEVEL_TEST = waLink(
  "Salam alaykoum, je souhaiterais faire évaluer mon niveau gratuit (15 min) pour définir le cursus qui me convient.",
);

export const highlights = [
  "Avis vérifiés d'élèves",
  "Cours en direct via Zoom",
  "Enseignement authentique",
  "Réponse rapide sur WhatsApp",
];

export const advantages = [
  {
    icon: "cap" as const,
    title: "Enseignants qualifiés",
    text: "Des professeurs sérieux, patients et pédagogues, sélectionnés pour la qualité de leur enseignement.",
  },
  {
    icon: "target" as const,
    title: "Suivi personnalisé",
    text: "Chaque élève progresse à son rythme, avec un accompagnement adapté à son niveau et ses objectifs.",
  },
  {
    icon: "clock" as const,
    title: "Horaires flexibles",
    text: "Cours disponibles 7j/7 de 9h à 21h, pour s'organiser facilement autour de votre emploi du temps.",
  },
  {
    icon: "chat" as const,
    title: "Contact direct",
    text: "Une équipe réactive et disponible sur WhatsApp pour répondre à toutes vos questions.",
  },
];

export const curriculums = [
  {
    number: "01",
    title: "Débutant",
    subtitle: "Fondations & lecture fluidifiée du Coran",
    audience: "Débutants complets ou sachant déchiffrer avec difficulté.",
    goal: "Passer de zéro à la lecture fluide et autonome du Coran, en règle de Tajwid de base.",
    duration: null as string | null,
    outcomes: [
      "Reconnaissance et prononciation exacte de toutes les lettres arabes (Makharij)",
      "Lecture fluide des mots complexes avec toutes les voyelles et prolongations",
      "Application naturelle des règles fondamentales de lecture du Coran",
    ],
    included:
      "Suivi individuel, exercices pratiques entre chaque cours et bilan mensuel.",
  },
  {
    number: "02",
    title: "Langue Arabe",
    subtitle: "Comprendre, parler et écrire couramment l'arabe",
    audience:
      "Élèves sachant déjà lire l'arabe et souhaitant comprendre, parler et écrire couramment.",
    goal: "Comprendre, écrire et parler couramment l'arabe.",
    duration: null,
    outcomes: [
      "Dialogues de la vie quotidienne et expression orale fluide",
      "Acquisition d'un vocabulaire de plus de 1000 mots clés",
      "Compréhension directe des textes sans repasser systématiquement par le français",
      "Bases solides de grammaire et de conjugaison",
    ],
    included: null as string | null,
  },
  {
    number: "03",
    title: "Coran",
    subtitle: "Mémorisation & perfectionnement de la récitation",
    audience:
      "Adultes et enfants lisant déjà couramment le Coran et souhaitant mémoriser ou corriger leur récitation.",
    goal: "Ancrer la mémorisation sur le long terme tout en maîtrisant les règles de Tajwid, avec un enseignant qualifié.",
    duration: "Continu, accompagnement sur-mesure.",
    outcomes: [
      "Mémorisation progressive structurée selon un programme personnalisé",
      "Correction minutieuse de la prononciation et maîtrise du Tajwid théorique et pratique",
      "Méthode de révision solide pour ne plus oublier les sourates acquises",
    ],
    included: null,
  },
];

export type Format = {
  kind: "Cours collectif" | "Individuel";
  name: string;
  price: string;
  promo: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  wa: string;
};

export const collectiveFormat: Format = {
  kind: "Cours collectif",
  name: "En groupe",
  price: "35€",
  promo: "1er mois à 17,50€",
  tagline:
    "Apprenez en communauté dans une ambiance motivante et bienveillante.",
  features: [
    "Cours 2h/semaine sur créneaux fixes",
    "Groupe de 6 élèves maximum",
    "Cours en ligne via Zoom",
    "Groupes non mixtes (hommes, femmes, enfants)",
  ],
  wa: waLink(
    "Salam alaykoum, je suis intéressé(e) par la formule Collectif. Pouvez-vous me donner plus d'informations ?",
  ),
};

export const individualFormats: Format[] = [
  {
    kind: "Individuel",
    name: "Individuel",
    price: "40€",
    promo: "1er mois à 20€",
    tagline: "Un apprentissage sur mesure",
    features: [
      "Cours 1h/semaine",
      "Cours privés adaptés à vos objectifs",
      "Flexibilité totale : choisissez vos horaires",
      "Cours en ligne via Zoom",
      "Du lundi au dimanche, de 9h à 21h",
    ],
    wa: waLink(
      "Salam alaykoum, je suis intéressé(e) par la formule Individuel. Pouvez-vous me donner plus d'informations ?",
    ),
  },
  {
    kind: "Individuel",
    name: "Individuel Plus",
    price: "70€",
    promo: "1er mois à 35€",
    tagline: "Un apprentissage sur mesure",
    featured: true,
    features: [
      "Cours 2h/semaine",
      "Cours privés adaptés à vos objectifs",
      "Flexibilité totale : choisissez vos horaires",
      "Cours en ligne via Zoom",
      "Du lundi au dimanche, de 9h à 21h",
    ],
    wa: waLink(
      "Salam alaykoum, je suis intéressé(e) par la formule Individuel Plus. Pouvez-vous me donner plus d'informations ?",
    ),
  },
];

export const testimonials = [
  {
    name: "Nehla",
    via: "WhatsApp",
    text: "Je recommande vivement cet institut, empreint de valeurs humaines et religieuses. C'est un cadre respectueux, sérieux et serein, avec une touche de simplicité et de miséricorde qui permet d'apprendre en toute quiétude, dans la joie et la bonne humeur toujours. Juste Merci d'être là pour nous 🤲",
  },
  {
    name: "Myriam",
    via: "WhatsApp",
    text: "Je recommande cet institut ! Ma professeure d'arabe est vraiment au top : sérieuse, patiente, bienveillante, à l'écoute et très pédagogue. Elle prend toujours le temps de répondre à mes questions et s'adapte à mon rythme, ce qui rend les cours agréables et motivants. L'équipe est également très réactive, disponible et assure un excellent suivi. C'est un vrai plaisir d'apprendre dans ces conditions. Merci pour votre professionnalisme !",
  },
  {
    name: "Lili_D",
    via: "TikTok",
    text: "Très bon institut, l'enseignement y est sérieux et de qualité, avec un programme complet et adapté à chaque élève. On y apprend dans une belle ambiance, alliant rigueur, bienveillance et fraternité. Les enseignants sont qualifiés, pédagogues et ont à cœur de transmettre leur savoir.",
  },
  {
    name: "Azzouz Wahiba",
    via: "Facebook",
    text: "Très heureuse de suivre mes cours d'arabe dans cet institut. J'avance vraiment bien grâce au mou3alim qui est très patient et qui explique toujours clairement. L'ambiance dans la classe est très agréable et motivante. Je recommande cet institut à toute personne qui souhaite apprendre.",
  },
  {
    name: "Mohamed",
    via: "WhatsApp",
    text: "Je suis les cours depuis quelques mois, et je prends Allah pour témoin que les cours sont profitables. Les deux professeurs que j'ai sont compétents et ont de la patience dans l'enseignement. Je tiens à préciser que comme dans tout apprentissage, il est nécessaire de travailler en dehors des cours pour bien évoluer. Qu'Allah nous facilite tous 🤲",
  },
];

export const videoTestimonials = [
  { name: "Abou Bakr", label: "Élève en langue arabe", id: "47el6QInoyw" },
  { name: "Mohamed", label: "Élève en langue arabe", id: "kcSCMGFJxWM" },
  { name: "Mohamed", label: "Élève en cours de Coran", id: "t8hU8hcvHuY" },
  { name: "Nassera", label: "Élève en langue arabe", id: "e6HG5-jM9xI" },
  { name: "Chemseddine", label: "Élève", id: "inPe0hY8s2E" },
];

export const faq = [
  {
    q: "Je n'ai aucun niveau en arabe, puis-je m'inscrire ?",
    a: "Bien sûr ! Nos formules s'adaptent à tous les niveaux, du débutant complet à l'élève confirmé. Un premier échange sur WhatsApp permet de définir le point de départ le plus adapté.",
  },
  {
    q: "Comment se déroulent les cours ?",
    a: "Tous les cours ont lieu en ligne via Zoom, en direct avec votre enseignant(e). Vous recevez le lien de connexion avant chaque séance, et pouvez suivre les cours depuis chez vous, où que vous soyez.",
  },
  {
    q: "Puis-je changer de formule en cours de route ?",
    a: "Oui, il est tout à fait possible de passer d'un cours collectif à un cours individuel (ou inversement) selon votre progression et vos disponibilités. Il suffit d'en discuter avec nous sur WhatsApp.",
  },
  {
    q: "Les cours sont-ils adaptés aux enfants ?",
    a: "Oui, nous proposons des cours pour les femmes, les enfants et les hommes, avec une pédagogie adaptée à chaque public.",
  },
  {
    q: "Les cours sont-ils mixtes ?",
    a: "Non, les cours ne sont pas mixtes. Les hommes sont enseignés par des hommes et les femmes par des femmes. De même, il n'y a pas de mixité au sein des groupes.",
  },
  {
    q: "Comment se passe l'inscription ?",
    a: "Rien de plus simple : contactez-nous directement sur WhatsApp en cliquant sur un bouton d'inscription. Nous échangeons ensemble sur vos objectifs et vous accompagnons pour démarrer rapidement.",
  },
  {
    q: "Le paiement est-il mensuel et sans engagement ?",
    a: "Oui, nos formules fonctionnent sur un abonnement mensuel, sans engagement de durée. Vous restez libre d'ajuster votre formule à tout moment.",
  },
];
