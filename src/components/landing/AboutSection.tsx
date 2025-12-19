const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="decorative-circle w-40 h-40 -top-10 -right-10 opacity-30" />
      <div className="decorative-circle-medium w-20 h-20 top-1/2 right-20" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-card border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-card border-4 border-background mt-8">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-card border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="section-title">Not Your Average Realtor</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use our expertise as a listing agent to get your property sold at a 
              price befitting design and effective marketing to get the buyers any 
              way that suits them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines years of experience with innovative approaches to deliver 
              exceptional results. Whether you're buying or selling, we're here to guide 
              you through every step of the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
