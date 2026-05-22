import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/views/home/HomePage";
import { VideoPage } from "@/views/video/VideoPage";
import { SocialPage } from "@/views/social/SocialPage";
import { CrmPage } from "@/views/crm/CrmPage";
import { ThankYouPage } from "@/views/thank-you/ThankYouPage";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/crm" element={<CrmPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}
