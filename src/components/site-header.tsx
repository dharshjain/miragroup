import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useHeaderVisible } from "@/hooks/use-header-visible";

export const businessLinks = [
  { to: "/businesses/water", label: "Water Solutions", index: "01" },
  { to: "/businesses/tankers", label: "Chemical & Specialized Tankers", index: "02" },
  { to: "/businesses/heavy-vehicles", label: "Heavy Vehicles & Equipment", index: "03" },
  { to: "/businesses/oil", label: "Oil Transportation", index: "04" },
  { to: "/businesses/salt", label: "Salt & Minerals", index: "05" },
] as const;

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/businesses", label: "Our Businesses" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const visible = useHeaderVisible();

  const showHeader = visible || open;

  return (
    <header
      className={`sticky top-0 z-50 bg-ink text-ink-foreground transition-transform duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/mira-logo.png" alt="Mira Group" className="h-11 w-11 object-contain" />
          <span className="font-display text-lg font-semibold tracking-[-0.02em] leading-none">
            MIRA GROUP
            <span className="mt-1 block label-tech text-[0.55rem] tracking-[0.3em] text-ink-foreground/50">
              A Symbol of Quality
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <div key={link.to} className="group relative">
              <Link
                to={link.to}
                className="label-tech text-ink-foreground/70 transition-colors hover:text-primary"
                activeProps={{ className: "label-tech text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
              {link.to === "/businesses" && (
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="border border-ink-border bg-ink">
                    {businessLinks.map((b) => (
                      <Link
                        key={b.to}
                        to={b.to}
                        className="flex items-baseline gap-3 border-b border-ink-border px-5 py-3 text-sm text-ink-foreground/70 transition-colors last:border-b-0 hover:text-primary"
                      >
                        <span className="label-tech text-[0.6rem] text-primary">{b.index}</span>
                        {b.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="label-tech text-ink-foreground/80 lg:hidden"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-border lg:hidden">
          <div className="shell flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-ink-border py-3 font-display text-lg text-ink-foreground/85"
              >
                {link.label}
              </Link>
            ))}
            {businessLinks.map((b) => (
              <Link
                key={b.to}
                to={b.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-ink-border py-3 text-sm text-ink-foreground/60"
              >
                <span className="label-tech text-[0.6rem] text-primary">{b.index}</span>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
