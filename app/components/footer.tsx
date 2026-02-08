const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Resources: ["Documentation", "API Reference", "Blog", "Community", "Support"],
  Company: ["About", "Careers", "Press", "Partners", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary-foreground"
                >
                  <path
                    d="M9 18V5l12-2v13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="6" cy="18" r="3" fill="currentColor" />
                  <circle cx="18" cy="16" r="3" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Suno
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Community-powered music for every stream.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Suno. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "Discord", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
