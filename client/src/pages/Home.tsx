import { Input } from "@/components/ui/input";
import ToolCard from "@/components/ToolCard";
import BentoDashboard from "@/components/BentoDashboard";
import { toolsData } from "@/lib/tools-data";
import { Search, Sparkles, LayoutGrid, Terminal, Database, Code2, Layers, Server, Cloud, Github, Rocket, Wrench, BookOpen, Monitor, FileText, Hammer, FlaskConical, Lightbulb, Globe, Palette } from "lucide-react";
import { useState, useMemo } from "react";

/* Category icons. The list itself is derived from toolsData below — the old
 * hardcoded 10-button list hid 68 tools whose categories had no button
 * (开发工具、包管理器、构建工具等), so those tools could never be filtered to. */
const CATEGORY_ICONS: Record<string, typeof LayoutGrid> = {
  "编码编辑器": Code2,
  "版本控制": Terminal,
  "前端框架": Layers,
  "后端框架": Server,
  "数据库": Database,
  "云平台": Cloud,
  "人工智能": Sparkles,
  "开源精选": Github,
  "出海工具": Rocket,
  "开发工具": Wrench,
  "包管理器": Wrench,
  "构建工具": Hammer,
  "测试框架": FlaskConical,
  "学习平台": BookOpen,
  "在线工具": Globe,
  "文档工具": FileText,
  "生产力工具": Lightbulb,
  "练手网站": Monitor,
  "设计工具": Palette,
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "全部": toolsData.length };
    for (const tool of toolsData) {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    }
    return counts;
  }, []);

  const categories = useMemo(() => {
    const names = Object.keys(categoryCounts).filter((n) => n !== "全部");
    names.sort((a, b) => categoryCounts[b] - categoryCounts[a]);
    return ["全部", ...names];
  }, [categoryCounts]);

  const selectCategory = (name: string) => {
    setActiveCategory(name);
    document.getElementById("tools-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      const matchesSearch = 
        tool.title.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      
      const matchesCategory = activeCategory === "全部" || tool.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-clip">
      {/* 背景装饰渐变 */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto py-16 px-4 relative z-10">
        {/* Bento header — see BentoDashboard.tsx for the token mapping */}
        <BentoDashboard
          total={toolsData.length}
          categoryCounts={categoryCounts}
          onSelectCategory={selectCategory}
        />

        {/* Search & Filter Section — sticky so the filter survives scrolling 170 cards */}
        <div className="sticky top-0 z-20 py-4 bg-background/85 backdrop-blur-xl max-w-4xl mx-auto mb-12 space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-2 shadow-2xl">
              <Search className="absolute left-6 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                aria-label="搜索工具"
                placeholder="搜索工具名称、描述或标签..."
                className="h-14 pl-14 pr-6 bg-transparent border-none text-lg font-medium focus-visible:ring-0 placeholder:text-muted-foreground/50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs — 20 categories now, so scroll horizontally
              instead of wrapping into a tall sticky block */}
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((name) => {
              const Icon = CATEGORY_ICONS[name] ?? LayoutGrid;
              const isActive = activeCategory === name;
              return (
                <button
                  key={name}
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(name)}
                  className={`
                    shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border
                    ${isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                      : "bg-card/40 backdrop-blur-md text-muted-foreground border-border/50 hover:border-primary/30 hover:bg-card/60"
                    }
                  `}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "animate-pulse" : "opacity-70"}`} />
                  {name}
                  <span className="text-[11px] font-bold opacity-70">
                    {categoryCounts[name] ?? 0}
                  </span>
                  {name === "出海工具" && (
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full bg-amber-400 text-black">
                      新
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* How to navigate: 官网 = direct jump, 教程 = back to gv.uy */}
        <div className="mb-8 rounded-2xl border border-primary/30 bg-primary/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-bold text-foreground">怎么用：</span>
          点卡片上的 <span className="font-bold text-primary">“官网”</span>，直接跳转到该工具自己的官网；
          点 <span className="font-bold text-primary">“教程”</span>，回到{" "}
          <a href="https://jianyunyi.gv.uy/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline underline-offset-2">
            出海实操教程（gv.uy）
          </a>{" "}
          看对应的实测步骤。没有“教程”按钮的卡片，点“版本”看历史版本。
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <div className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            找到 {filteredTools.length} 个工具
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div id="tools-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-card/20 backdrop-blur-sm rounded-3xl border border-dashed border-border/50">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <Search className="h-10 w-10 text-muted-foreground/30" />
            </div>
            <h3 className="text-2xl font-bold mb-2">未找到匹配工具</h3>
            <p className="text-muted-foreground">试试搜索其他关键词或切换分类</p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="py-20 border-t border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
            </div>
            <span className="font-black tracking-tighter text-2xl italic text-foreground uppercase">CS TOOL STATION</span>
          </div>
          <p className="text-muted-foreground/60 font-bold text-sm uppercase tracking-[0.2em] mb-8">
            Build for developers by developers
          </p>
          <div className="flex justify-center gap-8">
            <a href="https://jianyunyi.gv.uy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest">教程站 gv.uy</a>
            <a href="https://github.com/jianyunyi/cs-tool-station" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest">开源仓库</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
