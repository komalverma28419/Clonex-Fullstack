import { Compass, Rocket, Zap, ShieldCheck, BarChart3, Cpu, Globe2, TrendingUp } from "lucide-react"

export const contentData = [
  {
    id: "vision",
    type: "Our Vision",
    tagline: "Pioneering Conversational Intelligence",
    icon: Compass,
    metric: "99.9% Precision",
    description:
      "To establish the global benchmark in AI-driven voice analytics—turning unstructured daily conversations into structured, actionable business strategy.",
    colorTheme: {
      accentBg: "bg-cyan-500/10 dark:bg-cyan-400/10",
      accentBorder: "border-cyan-500/20 dark:border-cyan-400/20",
      accentText: "text-cyan-600 dark:text-cyan-400",
      glow: "bg-cyan-500/10 dark:bg-cyan-500/15",
    },
    pillars: [
      {
        icon: Cpu,
        title: "Autonomous Intelligence",
        detail: "Real-time AI sentiment analysis on every incoming call.",
      },
      {
        icon: Globe2,
        title: "Global Scalability",
        detail: "Multilingual transcription supporting over 40+ languages.",
      },
      {
        icon: TrendingUp,
        title: "Predictive Analytics",
        detail: "Forecast sales conversions before calls even wrap up.",
      },
    ],
  },
  {
    id: "mission",
    type: "Our Mission",
    tagline: "Empowering Every Conversation",
    icon: Rocket,
    metric: "<200ms Latency",
    description:
      "To equip enterprise teams with continuous, automated call intelligence that boosts rep productivity, elevates customer happiness, and directly scales revenue.",
    colorTheme: {
      accentBg: "bg-violet-500/10 dark:bg-violet-400/10",
      accentBorder: "border-violet-500/20 dark:border-violet-400/20",
      accentText: "text-violet-600 dark:text-violet-400",
      glow: "bg-violet-500/10 dark:bg-violet-500/15",
    },
    pillars: [
      {
        icon: Zap,
        title: "Instant Guidance",
        detail: "Live agent coaching with real-time objection handling.",
      },
      {
        icon: ShieldCheck,
        title: "Enterprise Compliance",
        detail: "Automatic PII redaction and SOC2 Type II standard security.",
      },
      {
        icon: BarChart3,
        title: "Seamless CRM Sync",
        detail: "One-click auto logging to Salesforce, HubSpot & Zendesk.",
      },
    ],
  },
]