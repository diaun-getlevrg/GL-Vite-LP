export type ServiceType = "video-editing" | "social-media" | "crm" | "fractional-marketing-team";

export interface ServiceInfo {
  id: ServiceType;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
}

export const services: ServiceInfo[] = [
  {
    id: "fractional-marketing-team",
    label: "Fractional Marketing & Sales Execution Team",
    shortLabel: "FMT",
    description:
      "A coordinated offshore execution team for content, campaigns, CRM, outbound, video, and operations. Deploy in 7 days. 40–70% cost savings.",
    icon: "Users",
  },
  {
    id: "video-editing",
    label: "Video Editing",
    shortLabel: "Video",
    description:
      "White-label video editing for agencies & content teams. 48-hour turnaround, 80% cost savings vs hiring.",
    icon: "Video",
  },
  {
    id: "social-media",
    label: "Social Media Management",
    shortLabel: "Social",
    description:
      "Done-for-you social media for law firms, CPAs & consultants. 12-20 posts monthly, zero partner time.",
    icon: "Share2",
  },
  {
    id: "crm",
    label: "CRM Optimization",
    shortLabel: "CRM",
    description:
      "HubSpot CRM optimization & sales data cleanup. 14-day transformation, find $500K-$2M hidden revenue.",
    icon: "Database",
  },
];
