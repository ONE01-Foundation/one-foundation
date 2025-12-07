export const copyEn = {
  hero: {
    title: "The World, In Real Time.",
    subtitle: "Anonymously, Globally, Live.",
    placeholder: "What's happening?",
    moreInfoLabel: "More info",
    demoOrbs: [
      { id: "body", label: "Body", colorKey: "emerald" },
      { id: "play", label: "Play", colorKey: "amber" },
      { id: "mind", label: "Mind", colorKey: "violet" },
      { id: "craft", label: "Craft", colorKey: "sky" },
    ],
  },
  anonymously: {
    id: "anonymously",
    title: "Anonymously",
    subtitle: "Your actions are visible. Your identity is not.",
    ctaLabel: "Start anonymous mode",
    features: [
      {
        id: "protected",
        badge: "Protected",
        title: "Only Your Actions Are Saved.",
        body: "We store what you do, not who you are. No names, no faces, only anonymized signals that describe the action itself.",
      },
      {
        id: "secured",
        badge: "Secured",
        title: "End-to-End Protection.",
        body: "Data is encrypted in transit and at rest, with strict access rules. Even we see patterns, not people.",
      },
      {
        id: "control",
        badge: "In Your Control",
        title: "Private Or Public — You Decide.",
        body: "Every action can stay in your personal view, or join the shared world view. Nothing is shared without intent.",
      },
      {
        id: "access",
        badge: "Safe Access",
        title: "One Identity, Many Masks.",
        body: "Use a single private account while the system presents your actions through anonymous avatars and cards.",
      },
    ],
  },
  globally: {
    id: "globally",
    title: "Globally",
    subtitle: "One shared reality, unfolding in real time.",
    ctaLabel: "Open world view",
    features: [
      {
        id: "live-data",
        badge: "Live Data",
        title: "See What People Are Doing Right Now.",
        body: "Watch actions from everywhere on earth flow into one living map — filtered by themes, moods, or intentions.",
      },
      {
        id: "filters",
        badge: "For You & For All",
        title: "Zoom From World To You.",
        body: "Glide between the global picture and the actions that match your interests, language, and current state.",
      },
      {
        id: "stories",
        badge: "World Stories",
        title: "Short Stories Of Real Life.",
        body: "Each action can become a tiny story — a run, a win, a quiet moment — collected into daily reels of the world.",
      },
      {
        id: "regions",
        badge: "Near & Far",
        title: "See By Place, Not By Profile.",
        body: "Explore what happens near you or on the other side of the planet without ever exposing who did it.",
      },
    ],
  },
  live: {
    id: "live",
    title: "Live",
    subtitle: "Everything exists only in motion.",
    ctaLabel: "Enter real-time mode",
    features: [
      {
        id: "timeline",
        badge: "Time Machine",
        title: "Move Forward Or Backward In Time.",
        body: "Scrub through the timeline to see how the world looked an hour ago, a day ago, or just a few seconds back.",
      },
      {
        id: "moments",
        badge: "Moments",
        title: "Each Action Becomes A Moment.",
        body: "Every card captures a precise moment: when it happened, how it felt, and how it fits inside the bigger picture.",
      },
      {
        id: "rhythm",
        badge: "Rhythm",
        title: "Feel The Pulse Of The Day.",
        body: "Morning, noon, night — watch the global rhythm change as people move, rest, create, and play.",
      },
      {
        id: "loops",
        badge: "Loops",
        title: "Turn Patterns Into Insight.",
        body: "Revisit your own timeline and the world's timeline to notice habits, cycles, and chances to change them.",
      },
    ],
  },
  footer: {
    links: [
      { id: "about", label: "About" },
      { id: "support", label: "Support" },
      { id: "legal", label: "Legal" },
    ],
    copyright: "© 2025 One01 Inc.",
  },
} as const;

export type CopyEn = typeof copyEn;

