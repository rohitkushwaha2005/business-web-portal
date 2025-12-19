import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({
        email,
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Subscribed!",
          description: "You've been successfully subscribed to our newsletter.",
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      <div
        className="relative h-[400px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Learn more about our listing process, as well as our
            <br className="hidden md:block" />
            additional staging and design work.
          </h2>
          <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
            Learn More
          </Button>
        </div>
      </div>

      {/* Newsletter bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <a href="#hero" className="hover:text-primary-foreground transition-colors">Home</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Services</a>
              <a href="#projects" className="hover:text-primary-foreground transition-colors">Projects</a>
              <a href="#clients" className="hover:text-primary-foreground transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
            </nav>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <span className="text-primary-foreground/80 text-sm hidden sm:block self-center">Subscribe to</span>
              <Input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-48 sm:w-64 bg-primary-foreground border-0"
              />
              <Button type="submit" variant="accent" disabled={isSubmitting}>
                {isSubmitting ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
