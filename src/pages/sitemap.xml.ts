import type { APIRoute } from "astro";
import { site } from "../config/site";

interface PageModule {
  frontmatter?: {
    sitemap?: boolean;
  };
}

const pageModules = import.meta.glob<PageModule>("./**/*.{astro,md,mdx}", { eager: true });
const excludedRoutes = new Set(["/404", "/404/"]);

const toRoute = (filePath: string): string => {
  const withoutPrefix = filePath.replace(/^\.\//, "");
  const withoutExtension = withoutPrefix.replace(/\.(astro|md|mdx)$/, "");

  if (withoutExtension === "index") {
    return "/";
  }

  if (withoutExtension.endsWith("/index")) {
    return `/${withoutExtension.replace(/\/index$/, "")}/`;
  }

  return `/${withoutExtension}/`;
};

export const GET: APIRoute = () => {
  const routes = Object.entries(pageModules)
    .filter(([, module]) => module.frontmatter?.sitemap !== false)
    .map(([filePath]) => toRoute(filePath))
    .filter((route) => !excludedRoutes.has(route))
    .sort((a, b) => a.localeCompare(b));

  const entries = routes
    .map((route) => `  <url><loc>${new URL(route, site.url).toString()}</loc></url>`)
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</urlset>"
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
