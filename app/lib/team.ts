// Team photos are self-hosted in /public/team (the old metroassoc.com domain is gone).
// Every team member's profile link points to Patrick's LinkedIn.
// Exported so jobfolderTeam.ts has the same fallback for a JobFolder
// recruiter who hasn't filled in a LinkedIn URL.
export const FALLBACK_LINKEDIN = "https://www.linkedin.com/in/patricknovick/";
const PATRICK_LINKEDIN = FALLBACK_LINKEDIN;

export type Member = {
  name: string;
  role: string;
  photo?: string;
  linkedin: string;
  website?: string;
  objectPos?: string;
};

/** Real Metro Associates team. Members without a LinkedIn use Patrick's profile. */
export const TEAM: Member[] = [
  {
    name: "Patrick Novick",
    role: "Managing Partner",
    photo: "/team/patrick.webp",
    linkedin: "https://www.linkedin.com/in/patricknovick/",
    website: "https://patricknovick.com",
    objectPos: "object-top",
  },
  {
    name: "Tina B.",
    role: "Recruiter",
    photo: "/team/tina.webp",
    linkedin: PATRICK_LINKEDIN,
    objectPos: "object-top",
  },
  {
    name: "Cai J.",
    role: "Recruiter",
    photo: "/team/cai.webp",
    linkedin: PATRICK_LINKEDIN,
  },
  {
    name: "Cadee J.",
    role: "Recruiter",
    photo: "/team/cadee.webp",
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Rohonney C.",
    role: "DOT Recruiter",
    photo: "/team/rohonney.webp",
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Rao M.",
    role: "Recruiter",
    photo: "/team/rao.webp",
    linkedin: FALLBACK_LINKEDIN,
  },
  {
    name: "Lisa V.",
    role: "Recruiter",
    linkedin: PATRICK_LINKEDIN,
  },
  {
    name: "Steff C.",
    role: "Recruiter",
    linkedin: PATRICK_LINKEDIN,
  },
  {
    name: "Robert G.",
    role: "Recruiter",
    linkedin: PATRICK_LINKEDIN,
  },
];
