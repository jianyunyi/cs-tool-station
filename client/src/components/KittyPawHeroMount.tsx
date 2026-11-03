import { useEffect, useRef } from "react";

interface KittyPawHeroMountProps {
  total: number;
  categoryCount: number;
  outboundCount: number;
}

/**
 * KittyPaw hero, exactly as the add-kittypaw-hero skill prescribes:
 * the scaffold template's own hero.js / hero.css / media, mounted with
 * mountKittyPawHero into an empty container (integration.md React pattern),
 * disposed on unmount. This is NOT a rewritten native port.
 *
 * Template code (hero.js/hero.css/arrow.svg) is packaged locally under
 * public/kittypaw/; hero.js resolves ./media/ relative to itself.
 * BINARY LIMIT (2026-11-03, verified): the GitHub connector's push
 * path rejects non-UTF-8 files, so hero.mp4/poster.jpg cannot be pushed
 * through it — they are ready in workspace public/kittypaw/media/ and
 * need one GitHub-web upload to go fully local. For this preview the
 * video streams from the skill's own listed CDN source (design.md);
 * the poster path below is the local one, falling back to the template
 * background colour until that upload lands. Do not present this
 * preview as fully locally packaged.
 *
 * Options (skill step 5/7): brand replaced AND logo set to null (never
 * change only the brand string); title/description/CTA/links are the
 * project's real content; trust uses real counts, not the template's
 * 648+ demo or its avatar images (avatars: []).
 */
export default function KittyPawHeroMount({ total, categoryCount, outboundCount }: KittyPawHeroMountProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dispose: (() => void) | undefined;
    let cancelled = false;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/kittypaw/hero.css";
    document.head.appendChild(link);

    (async () => {
      const mod = await import(/* @vite-ignore */ "/kittypaw/hero.js");
      if (cancelled || !ref.current) return;
      dispose = mod.mountKittyPawHero(ref.current, {
        brand: "CS TOOL STATION",
        logo: null,
        titleLines: ["找工具", "直接去", "官网"],
        description: `${total} 个开发与出海工具，点官网直达，点教程回 gv.uy 看实测步骤。`,
        video: "https://cdn.jiro.build/KittyPaw/All%20Images/section%20bg.mp4",
        poster: "/kittypaw/media/poster.jpg",
        ctaLabel: "浏览出海工具",
        ctaHref: "#tools-grid",
        cursorText: "直接去官网 • 查看工具 • ",
        menuLabel: "Menu",
        previewSeconds: 5,
        count: `${total} 个工具`,
        trustText: `${categoryCount} 个分类 · 出海工具 ${outboundCount} 个 · 官网直达`,
        avatars: [],
        links: [
          { label: "首页", href: "#top" },
          { label: "全部工具", href: "#tools-grid" },
          { label: "出海工具", href: "#tools-grid" },
          { label: "怎么用", href: "#how" },
          { label: "教程站 gv.uy", href: "https://jianyunyi.gv.uy/" },
          { label: "GitHub 仓库", href: "https://github.com/jianyunyi/cs-tool-station" },
        ],
      });
    })();

    return () => {
      cancelled = true;
      dispose?.();
      link.remove();
    };
  }, [total, categoryCount, outboundCount]);

  // Must stay empty in JSX: hero.js owns this subtree.
  return <div ref={ref} />;
}
