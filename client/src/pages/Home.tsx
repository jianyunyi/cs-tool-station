import { Input } from "@/components/ui/input";
import ToolCard from "@/components/ToolCard";
import { toolsData } from "@/lib/tools-data";
import { Search, Sparkles, LayoutGrid, Terminal, Database, Code2, Globe, Github } from "lucide-react";
import { useState, useMemo } from "react";

const CATEGORIES = [
  { name: "全部", icon: LayoutGrid },
  { name: "编码编辑器", icon: Code2 },
  { name: "版本控制", icon: Terminal },
  { name: "前端框架", icon: Globe },
  { name: "后端框架", icon: Database },
  { name: "数据库", icon: Database },
  { name: "云平台", icon: Globe },
  { name: "人工智能", icon: Sparkles },
  { name: "开源精选", icon: Github },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* 背景装饰渐变 */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto py-16 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" />
            极致开发者工具导航
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1]">
            CS TOOL <span className="text-primary italic">STATION</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            为您精选全球顶尖开发工具、框架与数据库，提供一站式官方下载与版本管理。
          </p>
          <div className="pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm font-bold text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-2 shadow-2xl">
              <Search className="absolute left-6 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="搜索工具名称、描述或标签..."
                className="h-14 pl-14 pr-6 bg-transparent border-none text-lg font-medium focus-visible:ring-0 placeholder:text-muted-foreground/50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`
                    flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border
                    ${isActive 
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105" 
                      : "bg-card/40 backdrop-blur-md text-muted-foreground border-border/50 hover:border-primary/30 hover:bg-card/60"
                    }
                  `}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "animate-pulse" : "opacity-70"}`} />
                  {cat.name}
                </button>
              );
            })}
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest">关于我们</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest">提交工具</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest">开源协议</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
