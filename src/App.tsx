
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import L1Portal from "./pages/L1Portal";
import Projects from "./pages/Projects";
import StoreBlog from "./pages/StoreBlog";
import Guide from "./pages/Guide";
import MentorMe from "./pages/MentorMe";
import TechMentor from "./pages/TechMentor";
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
          <Route path="/l1-portal" element={<L1Portal />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/store-blog" element={<StoreBlog />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/mentor-me" element={<MentorMe />} />
          <Route path="/tech-mentor" element={<TechMentor />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
