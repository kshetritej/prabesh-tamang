import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
};

const SectionHeading = ({ eyebrow, title, subtitle, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}
  >
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
