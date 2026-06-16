import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import gSunset from "@/assets/g-sunset.jpg";
import gFood from "@/assets/g-food.jpg";
import gCafe from "@/assets/g-cafe.jpg";
import gNature from "@/assets/g-nature.jpg";
import gCulture from "@/assets/g-culture.jpg";
import gPhoto from "@/assets/g-photo.jpg";
import gLakeside from "@/assets/g-lakeside.jpg";
import { cn } from "@/lib/utils";

const categories = ["All", "Solo Travel", "Pokhara", "Food", "Culture", "Photography", "Travel Tips", "Treks"] as const;

const posts = [
  { title: "A Solo Traveler's First 24 Hours in Pokhara", excerpt: "The smell of dal bhat, the first sight of Machhapuchhre, and where to land before the jet lag wins.", image: gLakeside, category: "Solo Travel", read: "6 min", featured: true },
  { title: "The 5 Cafés I'd Take My Best Friend To", excerpt: "Wooden chairs, slow wifi, the perfect black coffee — Pokhara's cafés don't trend, they linger.", image: gCafe, category: "Pokhara", read: "4 min" },
  { title: "Dal Bhat, Demystified", excerpt: "What's actually on the plate, why it's twice a day, and how to eat it the way a local would.", image: gFood, category: "Food", read: "5 min" },
  { title: "Prayer Flags, Stupas, and the Quiet Side of Pokhara", excerpt: "A walk through the spiritual corners most travelers rush past.", image: gCulture, category: "Culture", read: "7 min" },
  { title: "How to Photograph the Annapurnas Without Selling Your Soul", excerpt: "Light, timing, and the small viewpoint no one talks about.", image: gPhoto, category: "Photography", read: "5 min" },
  { title: "10 Honest Tips for First-Time Visitors to Nepal", excerpt: "SIM cards, money, taxis, and the one thing that always surprises people.", image: gNature, category: "Travel Tips", read: "8 min" },
  { title: "Why Sunset on Phewa Beats Every Bucket-List Item", excerpt: "A small wooden boat, an orange sky, and absolutely no rush.", image: gSunset, category: "Pokhara", read: "3 min" },
];

const Blog = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<typeof categories[number]>("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const matchQ = !q.trim() || (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  return (
    <Layout>
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Journal"
            title={<>Stories from <em className="text-accent not-italic">my Pokhara.</em></>}
            subtitle="Slow reads on travel, food, culture, photography — written like letters to a friend."
          />

          <div className="mt-10 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search stories..."
              maxLength={120}
              className="pl-11 h-12 rounded-full"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "px-4 h-9 rounded-full text-sm font-medium border transition-smooth",
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl overflow-hidden shadow-card border border-border/50"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Featured · {featured.category}</span>
                <h3 className="font-display text-3xl md:text-4xl font-medium mt-4 leading-tight">{featured.title}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.read}</span>
                </div>
                <Link to="/blog" className="mt-7 inline-flex items-center text-accent font-medium hover:gap-3 transition-all gap-2">
                  Read story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          )}

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-smooth border border-border/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{p.category}</span>
                  <h3 className="font-display text-xl mt-3 font-medium leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                    <Link to="/blog" className="font-medium text-foreground hover:text-accent">Read →</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">No stories match — try another search.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
