import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import PoliticaSeguranca from "./pages/PoliticaSeguranca";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PropostaComercial from "./pages/PropostaComercial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="webpro-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* ✅ CORREÇÃO AQUI */}
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/politica-de-seguranca" element={<PoliticaSeguranca />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        <CookieConsent />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
