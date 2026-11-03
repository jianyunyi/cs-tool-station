import { Github, Rocket, ArrowUpRight } from "lucide-react";

interface BentoDashboardProps {
  total: number;
  categoryCounts: Record<string, number>;
  onSelectCategory: (category: string) => void;
}

/**
 * Bento header for cs-tool, adapted from the bento-roadmap-dashboard skill.
 * Token mapping (skill adaptation guide §2, dark theme §4):
 * - accent = project's own primary (cyan #00d9ff), NOT the skill's lime —
 *   introducing lime would create a second competing accent.
 * - canvas = project background, surface = project card, surface-alt = secondary.
 * - dark theme: the single high-contrast tile is the accent hero card;
 *   there is no separate dark card, because dark shadows disappear on dark.
 * - radius 30px, pill/circle shapes, soft cyan-tinted shadows, tight headings.
 * - float: ±2px, 4s, neighbours in opposite phase, off under reduced motion.
 * All numbers come from toolsData via props — no placeholder data.
 */
export default function BentoDashboard({ total, categoryCounts, onSelectCategory }: BentoDashboardProps) {
  const categories = Object.entries(categoryCounts)
    .filter(([name]) => name !== "全部")
    .sort((a, b) => b[1] - a[1]);
  const topCategories = categories.slice(0, 5);
  const maxCount = topCategories[0]?.[1] ?? 1;
  const outboundCount = categoryCounts["出海工具"] ?? 0;

  return (
    <section aria-label="工具站总览" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {/* Hero — accent card, spans 2 columns on desktop */}
      <div
        className="bento-card bento-float md:col-span-2 lg:col-span-2 rounded-[30px] p-7 md:p-8"
        style={{
          background: "linear-gradient(135deg, var(--bento-accent-soft), var(--bento-accent-deep))",
          color: "var(--bento-on-accent)",
          boxShadow: "var(--bento-shadow)",
        }}
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-3">
          极致开发者工具导航
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-[-0.045em] leading-[1.05] mb-4">
          CS TOOL <span className="italic">STATION</span>
        </h1>
        <p className="text-base md:text-lg font-medium leading-relaxed opacity-80 max-w-xl">
          为您精选全球顶尖开发工具、框架与数据库，提供一站式官方下载与版本管理。
          点卡片上的“官网”直接跳转目标网站，点“教程”回 gv.uy 看实测步骤。
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={() => onSelectCategory("出海工具")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--bento-on-accent)] text-[var(--bento-accent-deep)] text-sm font-bold hover:scale-[1.03] transition-transform"
          >
            <Rocket className="h-4 w-4" />
            浏览出海工具（{outboundCount} 个）
          </button>
          <a
            href="https://github.com/jianyunyi/cs-tool-station"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--bento-on-accent)]/40 text-sm font-bold hover:bg-white/20 transition-colors"
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>
      </div>

      {/* Stat tile — total */}
      <div className="bento-card bento-float-alt rounded-[30px] p-7 bg-card border border-white/10" style={{ boxShadow: "var(--bento-shadow)" }}>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
          全部工具
        </p>
        <p className="text-6xl font-black tracking-[-0.045em] leading-none">
          {total}
          <span className="text-2xl ml-1">个</span>
        </p>
        <p className="text-sm text-muted-foreground mt-3">
          共 {categories.length} 个分类 · 出海工具 {outboundCount} 个
        </p>
      </div>

      {/* Outbound promo tile */}
      <div className="bento-card bento-float rounded-[30px] p-7 bg-secondary/60 border border-white/10" style={{ boxShadow: "var(--bento-shadow)" }}>
        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-4">
          <Rocket className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-black tracking-tight mb-2">出海工具</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          本站教程里提到的工具都在这里：Wise、Render、Pollinations、Firsty 等，
          官网直达，教程回 gv.uy。
        </p>
        <button
          onClick={() => onSelectCategory("出海工具")}
          className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-primary hover:gap-2 transition-all"
        >
          查看 {outboundCount} 个出海工具 <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Top categories tile — spans 2 columns, bars from real counts */}
      <div className="bento-card bento-float-alt md:col-span-2 rounded-[30px] p-7 bg-card border border-white/10" style={{ boxShadow: "var(--bento-shadow)" }}>
        <h2 className="text-2xl font-black tracking-tight mb-5">热门分类</h2>
        <div className="space-y-3">
          {topCategories.map(([name, count]) => (
            <button
              key={name}
              onClick={() => onSelectCategory(name)}
              className="w-full group flex items-center gap-3 text-left"
              aria-label={`筛选分类 ${name}，共 ${count} 个`}
            >
              <span className="w-20 shrink-0 text-sm font-bold truncate">{name}</span>
              <span className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                <span
                  className="block h-full rounded-full bg-primary group-hover:bg-primary/80 transition-colors"
                  style={{ width: `${Math.round((count / maxCount) * 100)}%` }}
                />
              </span>
              <span className="w-8 shrink-0 text-right text-sm font-bold text-muted-foreground">{count}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
