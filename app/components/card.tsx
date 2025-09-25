export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Card1",
    date: "June 10 2025",
   image: "/images/card1.png",
    slug: "one",
    description: "This is a short description for Card1.",
  },
  {
    id: 2,
    title: "Card2",
    date: "June 11 2025",
    image: "/images/card2.png",
    slug: "two",
    description: "This is a short description for Card2.",
  },
  {
    id: 3,
    title: "Card3",
    date: "June 12 2025",
    image: "/images/card3.png",
    slug: "three",
    description: "This is a short description for Card3.",
  },
  {
    id: 4,
    title: "Card3",
    date: "June 12 2025",
    image: "/images/card3.png",
    slug: "three",
    description: "This is a short description for Card3.",
  },
  {
    id: 5,
    title: "Card3",
    date: "June 12 2025",
    image: "/images/card3.png",
    slug: "three",
    description: "This is a short description for Card3.",
  },
];


