/**
 * Espace élèves — contenu à mettre à jour ici.
 *
 * 1) Liens Zoom récurrents : ajoute / modifie les entrées de `zoomRooms`.
 * 2) Documents PDF : ils ne sont plus dans le code. Connecte-toi à
 *    /ressources avec le mot de passe administrateur (ADMIN_PASSWORD)
 *    pour téléverser, remplacer ou supprimer les PDF.
 *
 * Le mot de passe de l'espace n'est PAS ici : il est stocké de façon
 * sécurisée dans la variable d'environnement SITE_PASSWORD (modifiable
 * dans les paramètres du projet, sans toucher au code).
 */

export type ZoomRoom = {
  title: string;
  schedule: string;
  audience: string;
  href: string;
  meetingId?: string;
  passcode?: string;
};

export const zoomRooms: ZoomRoom[] = [
  {
    title: "Cours collectif — Langue arabe",
    schedule: "Mardi & jeudi, 19h00 – 20h00",
    audience: "Groupe hommes",
    href: "https://zoom.us/j/00000000000",
    meetingId: "000 0000 0000",
    passcode: "à communiquer",
  },
  {
    title: "Cours collectif — Coran",
    schedule: "Mercredi & samedi, 18h00 – 19h00",
    audience: "Groupe femmes",
    href: "https://zoom.us/j/00000000000",
    meetingId: "000 0000 0000",
    passcode: "à communiquer",
  },
  {
    title: "Cours enfants",
    schedule: "Samedi, 10h00 – 11h00",
    audience: "Enfants",
    href: "https://zoom.us/j/00000000000",
    meetingId: "000 0000 0000",
  },
];
