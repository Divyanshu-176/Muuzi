import {
  Zap,
  Shield,
  BarChart3,
  Palette,
  Globe,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Sync",
    description:
      "Votes update instantly across all connected viewers. Zero delay between upvote and queue reorder.",
  },
  {
    icon: Shield,
    title: "Moderation Tools",
    description:
      "Block explicit content, set genre filters, and ban trolls. You stay in control of the vibe.",
  },
  {
    icon: BarChart3,
    title: "Stream Analytics",
    description:
      "Track engagement, top-voted songs, peak voting times, and audience preferences with detailed dashboards.",
  },
  {
    icon: Palette,
    title: "Custom Overlays",
    description:
      "Match your brand with fully customizable OBS overlays. Themes, colors, and animations built in.",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description:
      "Works with Twitch, YouTube, Kick, and more. One playlist link for all your viewers everywhere.",
  },
  {
    icon: Headphones,
    title: "Music Library",
    description:
      "Access millions of licensed tracks from our catalog. No DMCA worries, no takedowns, just music.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-border" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Features
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Everything you need to run
            <br className="hidden sm:block" />
            community-powered streams
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
