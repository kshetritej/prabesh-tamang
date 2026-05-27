import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Blog = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

const blogs: Blog[] = [
  {
    title: "Building a Topic Cluster Strategy That Actually Ranks",
    excerpt:
      "How to architect content around pillar pages and semantic clusters to dominate non-brand search in competitive niches.",
    category: "SEO Strategy",
    date: "May 12, 2026",
    readTime: "8 min read",
  },
  {
    title: "Core Web Vitals: A Practical Guide for Content Sites",
    excerpt:
      "From LCP fixes to CLS hunting, the engineering playbook I use to take WordPress sites from sluggish to sub-second.",
    category: "Technical SEO",
    date: "April 28, 2026",
    readTime: "11 min read",
  },
  {
    title: "Writing Long-Form That Holds Attention (and Backlinks)",
    excerpt:
      "Editorial frameworks for crafting 3,000-word pieces that earn featured snippets without sacrificing voice.",
    category: "Content",
    date: "April 03, 2026",
    readTime: "6 min read",
  },
  {
    title: "Local SEO in 2026: Beyond the Google Business Profile",
    excerpt:
      "Citation hygiene, geo-content frameworks, and review velocity tactics that move the map pack needle.",
    category: "Local SEO",
    date: "March 18, 2026",
    readTime: "7 min read",
  },
  {
    title: "GA4 + Search Console: The Reporting Stack I Actually Use",
    excerpt:
      "Lightweight dashboards, custom dimensions, and the metrics that matter when you report SEO to non-technical stakeholders.",
    category: "Analytics",
    date: "February 22, 2026",
    readTime: "9 min read",
  },
  {
    title: "Hosting, CDNs, and the Hidden SEO Tax of Bad Infrastructure",
    excerpt:
      "Why your stack choices quietly cap your organic ceiling — and the pragmatic migrations that unlock growth.",
    category: "IT / Web",
    date: "January 30, 2026",
    readTime: "10 min read",
  },
];

const Blogs = () => {
  return (
    <Layout>
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on SEO, content, and the web."
          description="Field notes, frameworks, and case-study breakdowns from my day-to-day work across search and editorial."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <article
              key={b.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-soft transition-smooth flex flex-col"
            >
              <span className="inline-flex w-fit text-xs font-semibold tracking-wider uppercase text-primary mb-4">
                {b.category}
              </span>
              <h3 className="font-display text-xl font-semibold leading-snug mb-3 group-hover:text-primary transition-smooth">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {b.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {b.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {b.readTime}
                </span>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
