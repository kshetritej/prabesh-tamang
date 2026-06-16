import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Please tell me your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().min(5, "Just a few words is fine").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Hmm, something's off", description: parsed.error.issues[0].message });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent ✨", description: "Talk soon — I'll reply within a few hours." });
      setForm({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <Layout>
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Get in touch"
            title={<>Say <em className="text-accent not-italic">hi.</em></>}
            subtitle="Planning a trip, already in Pokhara, or just curious — write whenever."
          />

          <div className="mt-16 grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-5">
              <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-6 rounded-3xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50">
                <div className="h-12 w-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <p className="font-display text-lg">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Fastest way to reach me</p>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-6 rounded-3xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50">
                <div className="h-12 w-12 rounded-2xl bg-accent/15 text-accent flex items-center justify-center"><Instagram className="h-5 w-5" /></div>
                <div>
                  <p className="font-display text-lg">Instagram</p>
                  <p className="text-sm text-muted-foreground">@yourpokharafriend</p>
                </div>
              </a>
              <a href="mailto:hello@yourpokharafriend.com" className="flex items-start gap-4 p-6 rounded-3xl bg-card shadow-soft hover:shadow-card transition-smooth border border-border/50">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"><Mail className="h-5 w-5" /></div>
                <div>
                  <p className="font-display text-lg">Email</p>
                  <p className="text-sm text-muted-foreground">hello@yourpokharafriend.com</p>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-accent" /> Pokhara, Nepal</p>
                <p className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 text-accent" /> Replies in hours</p>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              onSubmit={submit}
              className="lg:col-span-3 bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={80} className="rounded-xl h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" maxLength={160} className="rounded-xl h-12" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your trip..." rows={6} maxLength={1000} className="rounded-xl" />
              </div>
              <Button type="submit" disabled={loading} className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                {loading ? "Sending..." : "Send message"}
              </Button>
            </motion.form>
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden shadow-card border border-border/50 aspect-[16/9]">
            <iframe
              title="Pokhara map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=83.95%2C28.18%2C84.05%2C28.25&layer=mapnik&marker=28.2096%2C83.9856"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
