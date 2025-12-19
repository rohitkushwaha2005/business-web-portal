import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        full_name: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        city: formData.city,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your consultation request has been submitted.",
      });
      setFormData({ fullName: "", email: "", mobile: "", city: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="decorative-circle w-32 h-32 top-20 right-1/4 opacity-60" />
      <div className="decorative-circle-medium w-16 h-16 top-40 right-1/3" />
      <div className="decorative-circle w-24 h-24 bottom-20 left-10 opacity-40" />

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
                alt="Business consultation"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
                <div className="p-8 text-primary-foreground">
                  <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
                    Consultation,
                    <br />
                    Design,
                    <br />& Marketing
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-primary rounded-2xl p-8 shadow-card animate-slide-up">
            <h2 className="font-display text-2xl font-bold text-primary-foreground mb-6">
              Get a Free Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="bg-primary-foreground border-0"
              />
              <Input
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-primary-foreground border-0"
              />
              <Input
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
                className="bg-primary-foreground border-0"
              />
              <Input
                placeholder="Area / City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="bg-primary-foreground border-0"
              />
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Quick Quote"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
