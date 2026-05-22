import { Routes, Route } from "react-router-dom";
import { VideoPage } from "@/views/video/VideoPage";
import { SocialPage } from "@/views/social/SocialPage";
import { CrmPage } from "@/views/crm/CrmPage";
import { ThankYouPage } from "@/views/thank-you/ThankYouPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/video" element={<VideoPage />} />
      <Route path="/social" element={<SocialPage />} />
      <Route path="/crm" element={<CrmPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}
