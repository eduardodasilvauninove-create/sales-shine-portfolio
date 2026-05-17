import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuemSomos } from "@/components/QuemSomos";
import { Services } from "@/components/Services";
import { Diferenciais } from "@/components/Diferenciais";
import { Normas } from "@/components/Normas";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppPopup } from "@/components/WhatsAppPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Services />
        <Diferenciais />
        <Normas />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
