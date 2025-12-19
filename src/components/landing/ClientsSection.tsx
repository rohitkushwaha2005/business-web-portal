import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Client {
  id: string;
  name: string;
  designation: string;
  description: string;
  image_url: string | null;
}

const ClientsSection = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data, error } = await supabase
          .from("clients")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setClients(data || []);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const placeholderClients = [
    {
      id: "1",
      name: "Sharon Smith",
      designation: "CEO, Prime Estates",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Shijoy Kayak",
      designation: "Lead Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "John Lappos",
      designation: "CEO, Genesis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Marry Freeman",
      designation: "Marketing Manager",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    },
    {
      id: "5",
      name: "Lucy",
      designation: "Sales Director",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop",
    },
  ];

  const displayClients = clients.length > 0 ? clients : placeholderClients;

  return (
    <section id="clients" className="py-20 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="decorative-circle w-32 h-32 top-10 left-10 opacity-40" />
      <div className="decorative-circle-medium w-20 h-20 bottom-20 right-20" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Happy Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-pulse text-muted-foreground">Loading testimonials...</div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {displayClients.map((client, index) => (
              <Card
                key={client.id}
                className="card-hover bg-card border-0 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-6 italic leading-relaxed">
                    "{client.description}"
                  </p>
                  <Avatar className="w-16 h-16 mx-auto mb-3 ring-4 ring-primary/10">
                    <AvatarImage src={client.image_url || undefined} alt={client.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {client.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold text-primary">{client.name}</h4>
                  <p className="text-xs text-muted-foreground">{client.designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;
