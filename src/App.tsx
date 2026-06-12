import { HashRouter, Routes, Route } from "react-router-dom";
import { VideoPage } from "@/views/video/VideoPage";
import { VideoAgenciesPage } from "@/views/video/VideoAgenciesPage";
import { VideoConsultingPage } from "@/views/video/VideoConsultingPage";
import { VideoFinancialAdvisoryPage } from "@/views/video/VideoFinancialAdvisoryPage";
import { VideoITServicesPage } from "@/views/video/VideoITServicesPage";
import { VideoLegalPage } from "@/views/video/VideoLegalPage";
import { VideoSaaSPage } from "@/views/video/VideoSaaSPage";
import { VideoVPMarketingPage } from "@/views/video/VideoVPMarketingPage";
import { VideoAccountingPage } from "@/views/video/VideoAccountingPage";
import { SocialPage } from "@/views/social/SocialPage";
import { SocialAccountingPage } from "@/views/social/SocialAccountingPage";
import { SocialArchitecturePage } from "@/views/social/SocialArchitecturePage";
import { SocialCommercialREPage } from "@/views/social/SocialCommercialREPage";
import { SocialConsultingPage } from "@/views/social/SocialConsultingPage";
import { SocialEngineeringPage } from "@/views/social/SocialEngineeringPage";
import { SocialFinancialAdvisoryPage } from "@/views/social/SocialFinancialAdvisoryPage";
import { SocialITServicesPage } from "@/views/social/SocialITServicesPage";
import { SocialLegalPage } from "@/views/social/SocialLegalPage";
import { SocialSaaSPage } from "@/views/social/SocialSaaSPage";
import { SocialStaffingPage } from "@/views/social/SocialStaffingPage";
import { CrmPage } from "@/views/crm/CrmPage";
import { FmtPage } from "@/views/fmt/FmtPage";
import { WebsiteOptimizationPage } from "@/views/website-optimization/WebsiteOptimizationPage";
import { WebsiteOptimizationAccountingPage } from "@/views/website-optimization/WebsiteOptimizationAccountingPage";
import { WebsiteOptimizationAgenciesPage } from "@/views/website-optimization/WebsiteOptimizationAgenciesPage";
import { WebsiteOptimizationCommercialREPage } from "@/views/website-optimization/WebsiteOptimizationCommercialREPage";
import { WebsiteOptimizationConsultingPage } from "@/views/website-optimization/WebsiteOptimizationConsultingPage";
import { WebsiteOptimizationFinancialAdvisoryPage } from "@/views/website-optimization/WebsiteOptimizationFinancialAdvisoryPage";
import { WebsiteOptimizationITServicesPage } from "@/views/website-optimization/WebsiteOptimizationITServicesPage";
import { WebsiteOptimizationLegalPage } from "@/views/website-optimization/WebsiteOptimizationLegalPage";
import { WebsiteOptimizationSaaSPage } from "@/views/website-optimization/WebsiteOptimizationSaaSPage";
import { LinkedInOutboundPage } from "@/views/linkedin-outbound/LinkedInOutboundPage";
import { ThankYouPage } from "@/views/thank-you/ThankYouPage";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Video main */}
        <Route path="/video" element={<VideoPage />} />
        {/* Video LP variants */}
        <Route path="/video-agencies" element={<VideoAgenciesPage />} />
        <Route path="/video-consulting" element={<VideoConsultingPage />} />
        <Route path="/video-financial-advisory" element={<VideoFinancialAdvisoryPage />} />
        <Route path="/video-it-services" element={<VideoITServicesPage />} />
        <Route path="/video-legal" element={<VideoLegalPage />} />
        <Route path="/video-saas" element={<VideoSaaSPage />} />
        <Route path="/video-vp-marketing" element={<VideoVPMarketingPage />} />
        <Route path="/video-accounting" element={<VideoAccountingPage />} />
        {/* Social main */}
        <Route path="/social" element={<SocialPage />} />
        {/* Social LP variants */}
        <Route path="/social-accounting" element={<SocialAccountingPage />} />
        <Route path="/social-architecture" element={<SocialArchitecturePage />} />
        <Route path="/social-commercial" element={<SocialCommercialREPage />} />
        <Route path="/social-consulting" element={<SocialConsultingPage />} />
        <Route path="/social-engineering" element={<SocialEngineeringPage />} />
        <Route path="/social-financial-advisory" element={<SocialFinancialAdvisoryPage />} />
        <Route path="/social-it-services" element={<SocialITServicesPage />} />
        <Route path="/social-legal" element={<SocialLegalPage />} />
        <Route path="/social-saas" element={<SocialSaaSPage />} />
        <Route path="/social-staffing" element={<SocialStaffingPage />} />
        {/* Other pages */}
        <Route path="/crm" element={<CrmPage />} />
        <Route path="/fmt" element={<FmtPage />} />
        <Route path="/website-optimization" element={<WebsiteOptimizationPage />} />
        {/* Website Optimization LP variants */}
        <Route path="/website-optimization-accounting" element={<WebsiteOptimizationAccountingPage />} />
        <Route path="/website-optimization-agencies" element={<WebsiteOptimizationAgenciesPage />} />
        <Route path="/website-optimization-commercial" element={<WebsiteOptimizationCommercialREPage />} />
        <Route path="/website-optimization-consulting" element={<WebsiteOptimizationConsultingPage />} />
        <Route path="/website-optimization-financial-advisory" element={<WebsiteOptimizationFinancialAdvisoryPage />} />
        <Route path="/website-optimization-it-services" element={<WebsiteOptimizationITServicesPage />} />
        <Route path="/website-optimization-legal" element={<WebsiteOptimizationLegalPage />} />
        <Route path="/website-optimization-saas" element={<WebsiteOptimizationSaaSPage />} />
        <Route path="/linkedin-outbound" element={<LinkedInOutboundPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}
