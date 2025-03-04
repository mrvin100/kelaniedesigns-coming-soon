export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Section5Data {
  title: string;
  description: string;
  teamMembers: TeamMember[];
}

export const section5Data: Section5Data = {
  title: "A Family-Driven Creative Hub",
  description: "Kelanie Designs is a design ecosystem built entirely in-house, where creative freedom, innovation, and uncompromised quality go hand in hand like chocolate and caramel.",
  teamMembers: [
    {
      id: "kelly",
      name: "Kelly",
      role: "Stéphanie Janette aka kelanie - Founder & Creative Director",
      image: "/section5_card_bg1.jpg"
    },
    {
      id: "linda",
      name: "Linda",
      role: "Design Lead & Art Director",
      image: "/section5_card_bg2.jpg"
    },
    {
      id: "lucia",
      name: "LUCIA",
      role: "Senior Designer & Brand Strategist",
      image: "/section5_card_bg3.jpg"
    },
    {
      id: "samuel",
      name: "samuel",
      role: "Technical Director & Innovation Lead",
      image: "/section5_card_bg4.jpg"
    },
    {
      id: "jude",
      name: "JUDE",
      role: "Product Designer & UX Specialist",
      image: "/section5_card_bg5.jpg"
    },
    {
      id: "luca",
      name: "LUCA",
      role: "Creative Developer & Motion Designer",
      image: "/section5_card_bg6.jpg"
    },
    {
      id: "batu-happy",
      name: "BATU AND HAPPY",
      role: "Office Mood Managers & Chief Happiness Officers",
      image: "/section5_card_bg7.jpg"
    }
  ],
};
