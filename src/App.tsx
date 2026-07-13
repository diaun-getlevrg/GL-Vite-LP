import { HashRouter, Routes, Route } from "react-router-dom";
import { VideoPage } from "@/views/video/VideoPage";
import { VideoAgenciesPage } from "@/views/video/VideoAgenciesPage";
import { VideoConsultingPage } from "@/views/video/VideoConsultingPage";
import { VideoFinancialAdvisoryPage } from "@/views/video/VideoFinancialAdvisoryPage";
import { VideoITServicesPage } from "@/views/video/VideoITServicesPage";
import { VideoLegalPage } from "@/views/video/VideoLegalPage";
import { VideoSaaSPage } from "@/views/video/VideoSaaSPage";
import { VideoVPMarketingPage } from "@/views/video/VideoVPMarketingPage";
import { VideoMarketingOpsPage } from "@/views/video/VideoMarketingOpsPage";
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
import { CrmAccountingPage } from "@/views/crm/CrmAccountingPage";
import { CrmConsultingPage } from "@/views/crm/CrmConsultingPage";
import { CrmFinancialAdvisoryPage } from "@/views/crm/CrmFinancialAdvisoryPage";
import { CrmITServicesPage } from "@/views/crm/CrmITServicesPage";
import { CrmLegalPage } from "@/views/crm/CrmLegalPage";
import { CrmSaaSPage } from "@/views/crm/CrmSaaSPage";
import { CrmStaffingPage } from "@/views/crm/CrmStaffingPage";
import { LinkedInOutboundPage } from "@/views/linkedin-outbound/LinkedInOutboundPage";
import { LinkedInAccountingPage } from "@/views/linkedin-outbound/LinkedInAccountingPage";
import { LinkedInArchitecturePage } from "@/views/linkedin-outbound/LinkedInArchitecturePage";
import { LinkedInCommercialREPage } from "@/views/linkedin-outbound/LinkedInCommercialREPage";
import { LinkedInConsultingPage } from "@/views/linkedin-outbound/LinkedInConsultingPage";
import { LinkedInEngineeringPage } from "@/views/linkedin-outbound/LinkedInEngineeringPage";
import { LinkedInFinancialAdvisoryPage } from "@/views/linkedin-outbound/LinkedInFinancialAdvisoryPage";
import { LinkedInITServicesPage } from "@/views/linkedin-outbound/LinkedInITServicesPage";
import { LinkedInLegalPage } from "@/views/linkedin-outbound/LinkedInLegalPage";
import { LinkedInSaaSPage } from "@/views/linkedin-outbound/LinkedInSaaSPage";
import { LinkedInStaffingPage } from "@/views/linkedin-outbound/LinkedInStaffingPage";
import { LinkedInVPMarketingPage } from "@/views/linkedin-outbound/LinkedInVPMarketingPage";
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
        <Route path="/video-marketing-ops" element={<VideoMarketingOpsPage />} />
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
        {/* CRM LP variants */}
        <Route path="/crm-accounting" element={<CrmAccountingPage />} />
        <Route path="/crm-consulting" element={<CrmConsultingPage />} />
        <Route path="/crm-financial-advisory" element={<CrmFinancialAdvisoryPage />} />
        <Route path="/crm-it-services" element={<CrmITServicesPage />} />
        <Route path="/crm-legal" element={<CrmLegalPage />} />
        <Route path="/crm-saas" element={<CrmSaaSPage />} />
        <Route path="/crm-staffing" element={<CrmStaffingPage />} />
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
        {/* LinkedIn & Outbound LP variants */}
        <Route path="/linkedin-accounting" element={<LinkedInAccountingPage />} />
        <Route path="/linkedin-architecture" element={<LinkedInArchitecturePage />} />
        <Route path="/linkedin-commercial" element={<LinkedInCommercialREPage />} />
        <Route path="/linkedin-consulting" element={<LinkedInConsultingPage />} />
        <Route path="/linkedin-engineering" element={<LinkedInEngineeringPage />} />
        <Route path="/linkedin-financial-advisory" element={<LinkedInFinancialAdvisoryPage />} />
        <Route path="/linkedin-it-services" element={<LinkedInITServicesPage />} />
        <Route path="/linkedin-legal" element={<LinkedInLegalPage />} />
        <Route path="/linkedin-saas" element={<LinkedInSaaSPage />} />
        <Route path="/linkedin-staffing" element={<LinkedInStaffingPage />} />
        <Route path="/linkedin-vp-marketing" element={<LinkedInVPMarketingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}
