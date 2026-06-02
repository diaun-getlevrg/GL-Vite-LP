import { HashRouter, Routes, Route } from "react-router-dom";
import { VideoPage } from "@/views/video/VideoPage";
import { SocialPage } from "@/views/social/SocialPage";
import { CrmPage } from "@/views/crm/CrmPage";
import { FmtPage } from "@/views/fmt/FmtPage";
import { WebsiteOptimizationPage } from "@/views/website-optimization/WebsiteOptimizationPage";
import { LinkedInOutboundPage } from "@/views/linkedin-outbound/LinkedInOutboundPage";
import { ThankYouPage } from "@/views/thank-you/ThankYouPage";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/video" element={<VideoPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/crm" element={<CrmPage />} />
        <Route path="/fmt" element={<FmtPage />} />
        <Route path="/website-optimization" element={<WebsiteOptimizationPage />} />
        <Route path="/linkedin-outbound" element={<LinkedInOutboundPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}
