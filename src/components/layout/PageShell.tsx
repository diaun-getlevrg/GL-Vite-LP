import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ServiceCapabilities } from "@/components/shared/ServiceCapabilities";

interface NavItem {
  label: string;
  href: string;
}

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

interface PageShellProps {
  children: React.ReactNode;
  navItems?: NavItem[];
  ctaText?: string;
  ctaTarget?: string;
  showCapabilities?: boolean;
  meta?: PageMetaProps;
}

export function PageShell({
  children,
  navItems,
  ctaText,
  ctaTarget,
  showCapabilities = true,
  meta,
}: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {meta && (
        <>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          {meta.keywords && <meta name="keywords" content={meta.keywords} />}
          <meta property="og:title" content={meta.ogTitle ?? meta.title} />
          <meta property="og:description" content={meta.ogDescription ?? meta.description} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Get Levrg" />
        </>
      )}
      <Header navItems={navItems} ctaText={ctaText} ctaTarget={ctaTarget} />
      <main className="flex-1 pt-16 sm:pt-20">{children}</main>
      {showCapabilities && <ServiceCapabilities />}
      <Footer />
    </div>
  );
}
