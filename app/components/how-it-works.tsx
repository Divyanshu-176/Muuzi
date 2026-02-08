import { Link2, ListMusic, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect your stream",
    description:
      "Link your Twitch, YouTube, or any streaming platform in seconds. Our widget integrates seamlessly with OBS, Streamlabs, and more.",
  },
  {
    number: "02",
    icon: ThumbsUp,
    title: "Fans vote on songs",
    description:
      "Share your unique playlist link with your audience. They browse, add songs, and upvote their favorites in real time.",
  },
  {
    number: "03",
    icon: ListMusic,
    title: "Music plays by votes",
    description:
      "The most upvoted song plays next automatically. Your community drives the vibe while you focus on creating content.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-32">
      {/* Subtle divider line */}
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-border" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Three steps to playlist democracy
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-display text-4xl text-gray-400 font-bold ">
                  {step.number} 
                </span>
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
