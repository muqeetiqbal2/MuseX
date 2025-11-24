import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import UIUXDesigning from "./pages/services/UIUXDesigning";
import QATesting from "./pages/services/QATesting";
import AIAutomations from "./pages/services/AIAutomations";
import AIVideoAds from "./pages/services/AIVideoAds";
import Animations from "./pages/services/Animations";
import ShortFilms from "./pages/services/ShortFilms";
import CloudDevOps from "./pages/services/CloudDevOps";
import APIDevelopment from "./pages/services/APIDevelopment";
import Microservices from "./pages/services/Microservices";
import AIChatbots from "./pages/services/AIChatbots";
import DataEngineering from "./pages/services/DataEngineering";
import EnterpriseApplications from "./pages/services/EnterpriseApplications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileAppDevelopment />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/ui-ux-designing" element={<UIUXDesigning />} />
          <Route path="/services/qa-testing" element={<QATesting />} />
          <Route path="/services/ai-automations" element={<AIAutomations />} />
          <Route path="/services/ai-video-ads" element={<AIVideoAds />} />
          <Route path="/services/animations" element={<Animations />} />
          <Route path="/services/short-films" element={<ShortFilms />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/api-development" element={<APIDevelopment />} />
          <Route path="/services/microservices" element={<Microservices />} />
          <Route path="/services/ai-chatbots" element={<AIChatbots />} />
          <Route path="/services/data-engineering" element={<DataEngineering />} />
          <Route path="/services/enterprise-applications" element={<EnterpriseApplications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
