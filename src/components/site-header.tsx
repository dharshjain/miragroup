import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useHeaderVisible } from "@/hooks/use-header-visible";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

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
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const visible = useHeaderVisible();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setBusinessesOpen(false); // Reset dropdown state when menu closes
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 label-tech text-xs text-ink-foreground/80 lg:hidden p-2 hover:text-primary transition-colors cursor-pointer"
          aria-expanded={open}
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          <span>{open ? "CLOSE" : "MENU"}</span>
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full z-50 bg-ink border-t border-ink-border px-6 py-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="shell flex flex-col gap-1 p-0">
              {navLinks.map((link) => {
                if (link.to === "/businesses") {
                  return (
                    <div key={link.to} className="border-b border-ink-border/50 py-2">
                      <button
                        type="button"
                        onClick={() => setBusinessesOpen((v) => !v)}
                        className="w-full flex items-center justify-between py-2 text-left font-display text-xl sm:text-2xl font-medium text-ink-foreground/90 hover:text-primary transition-colors cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <div className="flex items-center gap-2 text-xs label-tech text-primary">
                          <span className="text-[0.65rem]">{businessesOpen ? "HIDE" : "EXPLORE"}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              businessesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {/* Animated Dropdown Sub-menu */}
                      <AnimatePresence>
                        {businessesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-3 border-l-2 border-primary/40 my-2 space-y-1"
                          >
                            <Link
                              to="/businesses"
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 py-2.5 text-sm font-medium text-primary hover:underline transition-colors"
                            >
                              <span className="label-tech text-[0.65rem]">00</span>
                              <span>All Businesses Overview →</span>
                            </Link>
                            {businessLinks.map((b) => (
                              <Link
                                key={b.to}
                                to={b.to}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 py-2.5 text-sm text-ink-foreground/75 hover:text-primary transition-colors"
                              >
                                <span className="label-tech text-[0.65rem] text-primary font-mono">{b.index}</span>
                                <span>{b.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-ink-border/50 py-3.5 font-display text-xl sm:text-2xl font-medium text-ink-foreground/90 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer Info inside drawer */}
            <div className="shell border-t border-ink-border/60 pt-5 mt-6 p-0 flex flex-col gap-3 text-xs text-ink-foreground/50">
              <div className="flex justify-between items-center label-tech text-[0.65rem]">
                <span>MIRA GROUP LOGISTICS</span>
                <span className="text-primary">KUTCH, GUJARAT</span>
              </div>
              <p className="text-xs text-ink-foreground/60">
                Moving Industries. Delivering Reliability across India.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
