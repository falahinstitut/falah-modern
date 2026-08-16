export const WHATSAPP_PHONE = "33651969750";

export function waLink(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waLink(
  "Salam alaykoum, je souhaite avoir plus d'informations sur vos cours.",
);

export const CALENDLY_CALL =
  "https://calendly.com/contact-falahinstitut/appel-decouverte-falah-institut";



export const highlights = [
  "Avis vérifiés d'élèves",
  "Cours en direct via Zoom",
  "Enseignement authentique",
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
  { name: "Mohamed", label: "Élève en cours de Coran", id: "t8hU8hcvHuY" },
  { name: "Chemseddine", label: "Élève en cours de Coran", id: "inPe0hY8s2E" },
];


export const faq = [
  {
    q: "Est-il trop tard pour commencer à l'âge adulte ?",
    a: "Beaucoup pensent qu'il est trop tard pour apprendre à lire le Coran à l'âge adulte, mais la majorité de nos élèves ont commencé ainsi. Avec un rythme régulier et un enseignant qui s'adapte à vous, les progrès viennent sereinement.",
  },
  {
    q: "Comment se déroulent les cours ?",
    a: "Tous les cours ont lieu en ligne via Zoom, en direct avec votre enseignant(e). Vous recevez le lien de connexion avant chaque séance, et pouvez suivre les cours depuis chez vous, où que vous soyez.",
  },
  {
    q: "Les cours sont-ils adaptés aux enfants ?",
    a: "Oui, nous proposons des cours pour les femmes, les enfants et les hommes, avec une pédagogie adaptée à chaque public.",
  },
  {
    q: "Les cours sont-ils mixtes ?",
    a: "Non, les cours ne sont pas mixtes. Les hommes sont enseignés par des hommes et les femmes par des femmes. De même, il n'y a pas de mixité au sein des groupes.",
  },
];
