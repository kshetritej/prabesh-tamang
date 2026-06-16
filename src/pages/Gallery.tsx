import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import gCafe from "@/assets/g-cafe.jpg";
import gFood from "@/assets/g-food.jpg";
import gSunset from "@/assets/g-sunset.jpg";
import gLakeside from "@/assets/g-lakeside.jpg";
import gCulture from "@/assets/g-culture.jpg";
import gNature from "@/assets/g-nature.jpg";
import gPeople from "@/assets/g-people.jpg";
import gPhoto from "@/assets/g-photo.jpg";
import { cn } from "@/lib/utils";

type Cat = "All" | "Nature" | "Food" | "Sunset" | "Lakeside" | "Culture" | "Cafés" | "People" | "Photography";

const items: { src: string; alt: string; cat: Exclude<Cat, "All"> }[] = [
  { src: gNature, alt: "Pokhara valley", cat: "Nature" },
  { src: gCafe, alt: "Local café", cat: "Cafés" },
  { src: gFood, alt: "Dal bhat thali", cat: "Food" },
  { src: gSunset, alt: "Sunset over Phewa", cat: "Sunset" },
  { src: gLakeside, alt: "Lakeside dusk", cat: "Lakeside" },
  { src: gCulture, alt: "Prayer flags", cat: "Culture" },
  { src: gPeople, alt: "Traveler", cat: "People" },
  { src: gPhoto, alt: "Camera view", cat: "Photography" },
  { src: gNature, alt: "Mountain view", cat: "Nature" },
  { src: gSunset, alt: "Sunset boats", cat: "Sunset" },
  { src: gLakeside, alt: "Phewa evening", cat: "Lakeside" },
  { src: gCafe, alt: "Coffee detail", cat: "Cafés" },
];

const cats: Cat[] = ["All", "Nature", "Food", "Sunset", "Lakeside", "Culture", "Cafés", "People", "Photography"];

const Gallery = () => {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const list = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <Layout>
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title={<>Pokhara, through <em className="text-accent not-italic">my lens.</em></>}
            subtitle="Real moments from real days — no stock photos, no filters."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
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

          <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {list.map((img, i) => (
              <motion.button
                key={i}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                onClick={() => setLightbox(img.src)}
                className="block w-full overflow-hidden rounded-2xl group break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto transition-smooth group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt=""
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-2xl shadow-elevated"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
