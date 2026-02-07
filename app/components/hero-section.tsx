import { Button } from "./ui/button";
import { ArrowRight, Play, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              Now live with 12,000+ streamers
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Let your fans pick
            <br />
            <span className="text-primary">the music</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            The real-time playlist platform where your community votes on what
            plays next. Turn passive listeners into active participants.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Start Streaming Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row">
            <div className="flex -space-x-2">
              {[
                "bg-emerald-500",
                "bg-teal-500",
                "bg-cyan-500",
                "bg-green-500",
                "bg-emerald-600",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background ${bg} text-xs font-bold text-white`}
                >
                  <Users className="h-3.5 w-3.5" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Loved by 12,000+ creators worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
