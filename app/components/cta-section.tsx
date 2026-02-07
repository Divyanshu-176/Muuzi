import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-border" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-8 py-16 text-center sm:px-16 lg:py-24">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Ready to let your fans
              <br />
              <span className="text-primary">own the playlist?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Join thousands of streamers who turned their music into a
              community experience. Set up in under 2 minutes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
