/**
 * Prerender script — runs after the client build.
 * Generates dist/video.html, dist/social.html, dist/crm.html, dist/thank-you.html
 * each with the full React tree pre-rendered into <div id="root">.
 */
import { render } from "../dist-ssr/entry-server.js";
import fs from "node:fs/promises";
import path from "node:path";

const routes = [
  {
    url: "/video",
    file: "video.html",
    title: "White-Label Video Editing Services | Get Levrg",
    description:
      "Dedicated white-label video editing teams for agencies and content studios. 48-hour turnaround, client-ready quality, 80% cost savings vs hiring.",
    keywords:
      "white label video editing, video editing outsourcing, agency video editing, white label video production, dedicated video editors",
    ogTitle: "White-Label Video Editing | Get Levrg",
    ogDescription:
      "Dedicated video editors for agencies. 48-hour turnaround, client-ready quality, 80% cheaper than hiring.",
  },
  {
    url: "/social",
    file: "social.html",
    title: "Social Media Management for Law Firms & B2B Professionals | Get Levrg",
    description:
      "Done-for-you social media management for law firms, CPAs, consultants and B2B firms. 12–20 posts monthly, zero partner time, first posts live in 14 days.",
    keywords:
      "social media management for law firms, social media for accountants, B2B social media management, LinkedIn management for professionals, social media for consultants",
    ogTitle: "Social Media Management for Professional Firms | Get Levrg",
    ogDescription:
      "12–20 posts monthly for law firms, CPAs & consultants. No partner time required. First posts live in 14 days.",
  },
  {
    url: "/crm",
    file: "crm.html",
    title: "HubSpot CRM Optimization & Cleanup | Get Levrg",
    description:
      "HubSpot CRM optimization for B2B revenue teams. Pipeline cleanup, sales automation, and revenue attribution in 14 days. Find $500K–$2M in hidden pipeline revenue.",
    keywords:
      "HubSpot CRM optimization, CRM data cleanup, HubSpot setup, revenue operations, CRM automation, sales pipeline optimization, HubSpot consultant",
    ogTitle: "HubSpot CRM Optimization | Get Levrg",
    ogDescription:
      "Transform your HubSpot from a contact database into a revenue engine in 14 days. Cleanup, automation, and reporting built for B2B teams.",
  },
  {
    url: "/thank-you",
    file: "thank-you.html",
    title: "Thank You — Book Your Discovery Call | Get Levrg",
    description:
      "Book your free 15-minute discovery call. We’ll build a custom plan for your video editing, social media, or CRM needs — no pitch deck, no commitment.",
    ogTitle: "Book Your Discovery Call | Get Levrg",
    ogDescription:
      "15 minutes. Custom plan. No pitch deck. No commitment.",
  },
];

const template = await fs.readFile("./dist/index.html", "utf-8");

for (const route of routes) {
  console.log(`Rendering ${route.url}...`);

  const appHtml = render(route.url);

  // Build per-page <head> meta block
  const metaBlock = [
    `  <title>${route.title}</title>`,
    `  <meta name="description" content="${route.description}" />`,
    route.keywords
      ? `  <meta name="keywords" content="${route.keywords}" />`
      : null,
    `  <meta property="og:title" content="${route.ogTitle ?? route.title}" />`,
    `  <meta property="og:description" content="${route.ogDescription ?? route.description}" />`,
    `  <meta property="og:type" content="website" />`,
    `  <meta property="og:site_name" content="Get Levrg" />`,
  ]
    .filter(Boolean)
    .join("\n");

  // 1. Strip generic title + meta from the template first
  let html = template
    .replace(/<title>.*?<\/title>/s, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<meta name="keywords"[^>]*>/g, "")
    .replace(/<meta property="og:[^"]*"[^>]*>/g, "");

  // 2. Inject per-page meta block right after <head>
  html = html.replace("<head>", `<head>\n${metaBlock}`);

  // 3. Inject pre-rendered HTML into root
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outPath = path.join("./dist", route.file);
  await fs.writeFile(outPath, html, "utf-8");
  console.log(`  ✓ dist/${route.file}`);
}

console.log("\nAll pages pre-rendered.");
