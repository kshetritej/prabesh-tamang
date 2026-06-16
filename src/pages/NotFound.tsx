import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <Layout>
    <section className="min-h-[70vh] flex items-center justify-center text-center py-20">
      <div className="container max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">404</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight">
          A little <em className="text-accent not-italic">lost?</em>
        </h1>
        <p className="mt-6 text-muted-foreground">
          That happens in the best places. Let's get you back to Pokhara.
        </p>
        <Button asChild className="mt-8 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-6">
          <Link to="/">Take me home</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default NotFound;
