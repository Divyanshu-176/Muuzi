"use client";

import { useState } from "react";
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Live Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const session = useSession()
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className=" top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Muuzi
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {session.status === "authenticated" && <Button variant="outline" size="sm" className="text-muted-foreground hover:text-foreground" onClick={()=>signOut()}>LogOut</Button>}
          {session.status === "unauthenticated" && <Button variant="outline" size="sm" className="text-muted-foreground hover:text-foreground" onClick={()=>signIn()}>LogIn</Button>}
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              {session.status === "authenticated" && <Button variant="outline" size="sm" className="text-muted-foreground hover:text-foreground" onClick={()=>signOut()}>LogOut</Button>}
              {session.status === "unauthenticated" && <Button variant="outline" size="sm" className="text-muted-foreground hover:text-foreground" onClick={()=>signIn()}>LogIn</Button>}             
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
