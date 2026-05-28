import { useEffect, useMemo, useState, useCallback } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryItem = {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  span: "tall" | "wide" | "normal" | "large";
};

const CATEGORIES = [
  "All",
  "Travel",
  "Work",
  "Projects",
  "Lifestyle",
  "Photography",
  "Tech",
  "Nepal",
] as const;

const items: GalleryItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", title: "Mountain Horizons", description: "Chasing first light above the clouds — a reminder that perspective changes everything.", category: "Travel", span: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80", title: "Deep Work", description: "Late-night sessions, dark themes, and the quiet rhythm of building.", category: "Work", span: "normal" },
  { id: 3, src: "https://images.unsplash.com/photo-1526481280690-e3a7b6b6d3a3?w=1200&q=80", title: "Himalayan Dusk", description: "Annapurna circuit — the kind of silence that resets you.", category: "Nepal", span: "wide" },
  { id: 4, src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80", title: "Ship Mode", description: "Pair programming on a launch week. Coffee fueled, deadline driven.", category: "Tech", span: "normal" },
  { id: 5, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80", title: "Circuitry", description: "The texture of the systems that quietly run our days.", category: "Tech", span: "tall" },
  { id: 6, src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80", title: "Reflections", description: "Glassy alpine lake — a still moment between long walks.", category: "Photography", span: "large" },
  { id: 7, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", title: "Coastal Drift", description: "Salt air, no agenda. Reset days are productive days.", category: "Travel", span: "normal" },
  { id: 8, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80", title: "Slow Mornings", description: "Notebook, espresso, sunlight — the format I keep coming back to.", category: "Lifestyle", span: "normal" },
  { id: 9, src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80", title: "Strategy Session", description: "Mapping a content roadmap — sticky notes still beat dashboards.", category: "Projects", span: "wide" },
  { id: 10, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", title: "Ridge Lines", description: "Where the trail thins out and the conversation goes quiet.", category: "Travel", span: "tall" },
  { id: 11, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", title: "Forest Cathedral", description: "Pine and patience. A long walk between two long projects.", category: "Photography", span: "normal" },
  { id: 12, src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80", title: "Whiteboard Thinking", description: "When the architecture finally clicks and you draw it three times to be sure.", category: "Projects", span: "normal" },
  { id: 13, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", title: "Kathmandu Skylines", description: "Home views — the city that taught me how to hustle and how to slow down.", category: "Nepal", span: "wide" },
  { id: 14, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80", title: "Editor, Late Night", description: "The cursor blinks. The draft gets shorter. The point gets sharper.", category: "Work", span: "normal" },
  { id: 15, src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80", title: "Golden Fields", description: "Autumn light is the only light I really trust.", category: "Photography", span: "tall" },
  { id: 16, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80", title: "Above Everything", description: "Wide views, narrow worries.", category: "Travel", span: "large" },
];

const spanClass = (s: GalleryItem["span"]) => {
  switch (s) {
    case "tall": return "row-span-2";
    case "wide": return "md:col-span-2";
    case "large": return "md:col-span-2 row-span-2";
    default: return "";
  }
};

const Gallery = () => {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [filter]
  );

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-subtle" aria-hidden />
        <div
          className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl animate-fade-in"
          style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.6), transparent)" }}
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl animate-fade-in"
          style={{ background: "radial-gradient(closest-side, hsl(var(--secondary) / 0.6), transparent)" }}
          aria-hidden
        />

        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              <Camera className="h-3.5 w-3.5" /> Visual Journal
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95]">
              <span className="text-gradient">Gallery</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A slow-moving archive of moments — trails, screens, cities, and the small details
              that quietly shape the work. Travel, projects, growth, and the in-between.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container pt-12 md:pt-16">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-smooth",
                  active
                    ? "bg-foreground text-background border-foreground shadow-soft"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                )}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="container py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-muted shadow-card hover:shadow-elevated transition-smooth animate-fade-in text-left",
                spanClass(item.span)
              )}
              style={{ animationDelay: `${(idx % 8) * 40}ms` }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-foreground/80">
                  {item.category}
                </span>
                <h3 className="text-base md:text-lg font-display font-semibold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Storytelling */}
      <section className="relative overflow-hidden border-y border-border bg-gradient-subtle">
        <div className="container py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 animate-fade-in">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              The Long Walk
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight">
              Documenting the
              <span className="text-gradient"> in-between </span>
              moments.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I keep a camera close because the best lessons rarely arrive at the desk. A ridge
              line at sunrise, a half-finished sketch on a café napkin, a launch-night sprint —
              they all feed the same body of work. This gallery is the visual side of that
              practice: travel as research, photography as note-taking, projects as proof.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Less a portfolio, more a journal — a quiet record of curiosity.
            </p>
          </div>

          <div className="lg:col-span-7 relative h-[420px] md:h-[520px]">
            <div className="absolute top-0 left-4 w-2/3 h-3/4 rounded-2xl overflow-hidden shadow-elevated animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=1200&q=80"
                alt="Travel notebook"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-elevated border-4 border-background animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&q=80"
                alt="Mountain pass"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute top-8 right-8 w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-elevated border-4 border-background animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80"
                alt="Coastal moment"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="More to come"
          title="An archive that keeps growing."
          description="New frames added as the trails, projects, and cities pile up. Have a place I should photograph next? Send it my way."
          align="center"
        />
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-background/60 backdrop-blur-xl animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-card transition-smooth"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-card transition-smooth"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-card transition-smooth"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <figure
            className="relative max-w-6xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated bg-muted">
              <img
                src={active.src.replace("w=1200", "w=1800")}
                alt={active.title}
                className="w-full max-h-[78vh] object-contain bg-black"
              />
            </div>
            <figcaption className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  {active.category}
                </p>
                <h3 className="text-xl md:text-2xl font-display font-semibold mt-1">
                  {active.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                  {active.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                {(activeIndex ?? 0) + 1} / {filtered.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
