// careersData.ts
export interface Career {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements?: string[];
}

export const careers: Career[] = [
  {
    id: 1,
    title: "Pharmaceutical Supply Chain Manager",
    type: "Full-time",
    location: "Mumbai, India",
    description: "Manage end-to-end pharmaceutical supply operations...",
    requirements: [
      "5+ years experience in pharma supply chain",
      "Strong leadership skills",
      "Familiarity with logistics software",
    ],
  },
  {
    id: 2,
    title: "Medical Device Specialist",
    type: "Full-time",
    location: "Delhi, India",
    description: "Responsible for overseeing medical device operations...",
    requirements: [
      "Experience in medical devices",
      "Regulatory knowledge",
      "Technical expertise",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description:
      "Design premium interfaces with focus on accessibility and brand consistency.",
    requirements: [
      "5+ years experience in pharma supply chain",
      "Strong leadership skills",
      "Familiarity with logistics software",
    ],
  },
  {
    id: 4,
    title: "Project Manager",
    location: "Mumbai, India",
    type: "Full-time",
    description:
      "Oversee project lifecycles, coordinate teams, and ensure timely delivery.",
    requirements: [
      "5+ years experience in pharma supply chain",
      "Strong leadership skills",
      "Familiarity with logistics software",
    ],
  },
];
