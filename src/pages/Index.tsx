import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import UseCases from "@/components/UseCases";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Experience Catalogue */}
        <section id="experiences">
          <Experiences />
        </section>
        
        {/* 4. Use Cases / Applications */}
        <UseCases />
        
        {/* 5. Roadmap / Future Vision */}
        <Roadmap />
        
        {/* 6. Funding / Collaboration / Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
