import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const placeholderProjects = [
    {
      id: "1",
      name: "Consultation",
      description: "Project design services",
      image_url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Design",
      description: "Project design services",
      image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Marketing & Design",
      description: "Project design services",
      image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Consultation & Marketing",
      description: "Project design services",
      image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&auto=format&fit=crop",
    },
    {
      id: "5",
      name: "Consultation",
      description: "Project design services",
      image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&auto=format&fit=crop",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : placeholderProjects;

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-circle w-48 h-48 -bottom-20 -left-20 opacity-20" />
      <div className="decorative-circle-medium w-24 h-24 top-20 right-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We know what buyers are looking for and suggest projects that will bring 
            clients top dollar for the sale of their homes.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-pulse text-muted-foreground">Loading projects...</div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {displayProjects.map((project, index) => (
              <Card
                key={project.id}
                className="card-hover overflow-hidden bg-card border-0 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image_url || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&auto=format&fit=crop"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-1">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <Button variant="accent" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
