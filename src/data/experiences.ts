export type Experience = {
  slug: string;
  emoji: string;
  title: string;
  short: string;
  description: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Relaxed";
  price: string;
  includes: string[];
  meeting: string;
  tags: ("Food" | "Nature" | "Photography" | "Walking" | "Sunset" | "Culture")[];
};

export const experiences: Experience[] = [
  {
    slug: "coffee-and-conversation",
    emoji: "☕",
    title: "Coffee & Conversation",
    short: "Explore local cafés while chatting about Nepal, trekking, culture, and life.",
    description:
      "We hop between two or three of my favorite Pokhara cafés — the ones locals actually go to. Bring questions; leave with stories.",
    duration: "2 hours",
    difficulty: "Relaxed",
    price: "From $15",
    includes: ["Coffee at 2 cafés", "Local snacks", "Honest local recommendations"],
    meeting: "Lakeside, near Barahi Chowk",
    tags: ["Food", "Culture", "Walking"],
  },
  {
    slug: "hidden-pokhara-walk",
    emoji: "🌅",
    title: "Hidden Pokhara Walk",
    short: "Discover quiet places and viewpoints most tourists never find.",
    description:
      "A slow, scenic walk through alleys, stupas, and viewpoints the guidebooks miss. We stop wherever feels right.",
    duration: "3–4 hours",
    difficulty: "Easy",
    price: "From $25",
    includes: ["Local guide", "Bottled water", "Photo stops", "Tea break"],
    meeting: "Old Bazaar gate",
    tags: ["Nature", "Walking", "Photography"],
  },
  {
    slug: "eat-like-a-local",
    emoji: "🍜",
    title: "Eat Like a Local",
    short: "Experience authentic local food away from tourist restaurants.",
    description:
      "Dal bhat, sel roti, momos, thakali — we taste our way through real Pokhara, including the tiny family kitchens.",
    duration: "3 hours",
    difficulty: "Relaxed",
    price: "From $30",
    includes: ["3–4 food stops", "Drinks", "All bites covered"],
    meeting: "Mahendrapool",
    tags: ["Food", "Culture", "Walking"],
  },
  {
    slug: "photo-walk",
    emoji: "📸",
    title: "Photo Walk",
    short: "Capture beautiful memories while exploring Pokhara.",
    description:
      "I'll take you to the most photogenic corners of Pokhara — and yes, I'll happily be your photographer.",
    duration: "3 hours",
    difficulty: "Easy",
    price: "From $25",
    includes: ["Photography tips", "Portraits taken for you", "Edited photos sent later"],
    meeting: "Phewa Lake boat point",
    tags: ["Photography", "Walking", "Nature"],
  },
  {
    slug: "sunset-by-the-lake",
    emoji: "🌄",
    title: "Sunset by the Lake",
    short: "Relax beside Phewa Lake while enjoying one of Nepal's best sunsets.",
    description:
      "We grab a small wooden boat, drift on the lake, and let one of the most beautiful sunsets in Asia do the rest.",
    duration: "2 hours",
    difficulty: "Relaxed",
    price: "From $20",
    includes: ["Boat ride", "Drinks", "Sunset chats"],
    meeting: "Phewa Lakeside Pier 1",
    tags: ["Sunset", "Nature", "Photography"],
  },
];
