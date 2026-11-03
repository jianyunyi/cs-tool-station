import { useEffect, useId, useRef, useState } from "react";

interface KittyPawHeroProps {
  total: number;
  categoryCount: number;
  outboundCount: number;
  onSelectCategory: (category: string) => void;
}

/**
 * KittyPaw video hero, natively ported to React (skill allows a native port
 * with the same state machine, instead of DOM-injecting hero.js into a
 * React-managed tree).
 *
 * Adapted from skills/add-kittypaw-hero (Jiro KittyPaw public preview):
 * full-viewport hero, glass Menu pill with a translucent panel, large
 * three-line title left-of-centre, white pill CTA bottom-left, trust block
 * bottom-right, spinning circular-text cursor following the mouse.
 *
 * Static-poster variant (recommended brief, 2026-11-03): NO video is wired
 * in yet, so there is no fake video path and no play button. The poster is
 * a CSS dark gradient, not the skill's cat image — the cat video is only
 * for a KittyPaw demo, never a formal asset for a dev-tool site.
 * When a real video is provided, add a <video> here with the template's
 * state machine: muted inline, first-5-seconds preview loop, click the
 * background to play the full video, resume the preview when it ends.
 * Trust data is real only: 170 tools / 19 categories, no avatars, no 648+.
 */
export default function KittyPawHero({ total, categoryCount, outboundCount, onSelectCategory }: KittyPawHeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringId = useId();

  // Menu: outside click, Escape (focus returns to toggle), focus-out close.
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (menuWrapRef.current && !menuWrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onFocusOut = (e: FocusEvent) => {
      if (menuWrapRef.current && !menuWrapRef.current.contains(e.relatedTarget as Node)) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    menuWrapRef.current?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      menuWrapRef.current?.removeEventListener("focusout", onFocusOut);
    };
  }, [menuOpen]);

  // Rotating circular-text cursor: fine pointer + no reduced motion only,
  // one rAF per move (never a React render per pointermove).
  useEffect(() => {
    const section = document.getElementById("kp-hero");
    const cursor = cursorRef.current;
    if (!section || !cursor) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    let raf = 0;
    let point = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      point = { x: e.clientX - r.left, y: e.clientY - r.top };
      cursor.hidden = !!(e.target as HTMLElement).closest("a,button,nav");
      if (!raf) {
        raf = requestAnimationFrame(() => {
          cursor.style.transform = `translate3d(${point.x}px,${point.y}px,0)`;
          raf = 0;
        });
      }
    };
    const onLeave = () => {
      cursor.hidden = true;
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const closeAnd = (fn: () => void) => () => {
    setMenuOpen(false);
    fn();
  };

  return (
    <section id="kp-hero" className="kp-hero" aria-label="CS TOOL STATION">
      <div className="kp-shade" aria-hidden="true" />
      <header className="kp-header">
        <a className="kp-brand" href="#top" aria-label="CS TOOL STATION">
          CS TOOL STATION
        </a>
        <div className="kp-menu-wrap" ref={menuWrapRef}>
          <button
            ref={toggleRef}
            type="button"
            className="kp-toggle"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setMenuOpen(true);
                navRef.current?.querySelector("a,button")?.focus();
              }
            }}
          >
            ☰ Menu
          </button>
          {menuOpen && (
            <nav ref={navRef} className="kp-nav" aria-label="Main navigation">
              <button type="button" onClick={closeAnd(() => window.scrollTo({ top: 0, behavior: "smooth" }))}>
                首页
              </button>
              <button type="button" onClick={closeAnd(() => onSelectCategory("全部"))}>
                全部工具
              </button>
              <button type="button" onClick={closeAnd(() => onSelectCategory("出海工具"))}>
                出海工具
              </button>
              <a href="#how" onClick={() => setMenuOpen(false)}>
                怎么用
              </a>
              <a href="https://jianyunyi.gv.uy/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                教程站 gv.uy
              </a>
              <a href="https://github.com/jianyunyi/cs-tool-station" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                GitHub 仓库
              </a>
            </nav>
          )}
        </div>
      </header>

      <div className="kp-content">
        <h1>
          <span>找工具</span>
          <span>直接去</span>
          <span>官网</span>
        </h1>
        <p>
          {total} 个开发与出海工具，点官网直达，点教程回 gv.uy 看实测步骤。
        </p>
      </div>

      <div className="kp-footer">
        <button type="button" className="kp-cta" onClick={() => onSelectCategory("出海工具")}>
          浏览出海工具 <span className="kp-arrow" aria-hidden="true">→</span>
        </button>
        <div className="kp-trust">
          <div>
            <strong>{total} 个工具</strong>
            <p>
              {categoryCount} 个分类 · 出海工具 {outboundCount} 个 · 官网直达
            </p>
          </div>
        </div>
      </div>

      <div ref={cursorRef} className="kp-cursor" aria-hidden="true" hidden>
        <svg viewBox="0 0 120 120">
          <defs>
            <path id={ringId} d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
          </defs>
          <text>
            <textPath href={`#${ringId}`}>直接去官网 • 查看工具 • 直接去官网 • </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}
