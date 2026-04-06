import { Input } from "@/components/ui/input";
import ToolCard from "@/components/ToolCard";
import { toolsData, CATEGORY_MAP } from "@/lib/tools-data";
import { 
  Search, Sparkles, LayoutGrid, Code2, Cpu, Settings, 
  Building2, FlaskConical, Binary, Landmark, Palette, 
  Briefcase, GraduationCap, Github, ChevronRight, Home as HomeIcon
} from "lucide-react";
import { useState, useMemo } from "react";
import { useRoute, Link } from "wouter";

const CATEGORY_ICONS: Record<string, any> = {
  "cs": Code2,
  "engineering": Cpu,
  "finance": Landmark,
  "design": Palette,
  "business": Briefcase,
  "resources": GraduationCap
};

export default function Home() {
  const [search, setSearch] = useState("");
  
  // 获取当前路由参数
  const [matchCategory, paramsCategory] = useRoute("/category/:category");
  const [matchSubcategory, paramsSubcategory] = useRoute("/category/:category/:subcategory");
  
  const activeCategory = paramsCategory?.category || paramsSubcategory?.category || "all";
  const activeSubcategory = paramsSubcategory?.subcategory || "all";

  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      const matchesSearch = 
        tool.title.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
      
      const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
      const matchesSubcategory = activeSubcategory === "all" || tool.subcategory === activeSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [search, activeCategory, activeSubcategory]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col md:flex-row">
      {/* 背景装饰渐变 */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0" />
      
      {/* 侧边栏导航 (Sidebar) */}
      <aside className="w-full md:w-72 bg-card/30 backdrop-blur-2xl border-r border-border/50 sticky top-0 h-auto md:h-screen overflow-y-auto z-20 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
          </div>
          <span className="font-black tracking-tighter text-xl italic text-foreground uppercase">CS STATION</span>
        </div>

        <nav className="space-y-6 flex-1">
          <div>
            <Link href="/">
              <a className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeCategory === "all" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"}`}>
                <LayoutGrid className="h-4 w-4" />
                全部领域
              </a>
            </Link>
          </div>

          {Object.entries(CATEGORY_MAP).map(([key, config]) => {
            const Icon = CATEGORY_ICONS[key] || Code2;
            const isCategoryActive = activeCategory === key;
            
            return (
              <div key={key} className="space-y-1">
                <Link href={`/category/${key}`}>
                  <a className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${isCategoryActive && activeSubcategory === "all" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : isCategoryActive ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"}`}>
                    <Icon className="h-4 w-4" />
                    {config.label}
                  </a>
                </Link>
                
                {/* 二级功能分类 */}
                {isCategoryActive && (
                  <div className="ml-9 space-y-1 border-l border-primary/20 pl-4 py-1 animate-in slide-in-from-left-2 duration-300">
                    {config.subcategories.map(sub => (
                      <Link key={sub} href={`/category/${key}/${sub}`}>
                        <a className={`block py-1.5 text-xs font-bold transition-all ${activeSubcategory === sub ? "text-primary" : "text-muted-foreground/60 hover:text-primary"}`}>
                          {sub}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="pt-8 border-t border-border/50 mt-auto">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
          >
            <Github className="h-4 w-4" />
            GitHub Star
          </a>
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 relative z-10 p-4 md:p-10 lg:p-16 max-w-7xl">
        {/* Breadcrumbs & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
            <Link href="/"><a className="hover:text-primary transition-colors"><HomeIcon className="h-3 w-3" /></a></Link>
            <ChevronRight className="h-3 w-3" />
            {activeCategory !== "all" && (
              <>
                <Link href={`/category/${activeCategory}`}><a className="hover:text-primary transition-colors">{CATEGORY_MAP[activeCategory]?.label}</a></Link>
                {activeSubcategory !== "all" && (
                  <>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-primary">{activeSubcategory}</span>
                  </>
                )}
              </>
            )}
            {activeCategory === "all" && <span className="text-primary">全部工具</span>}
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="搜索工具名称..."
              className="h-10 pl-11 pr-4 bg-card/40 backdrop-blur-xl border-border/50 rounded-xl text-sm focus-visible:ring-primary/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            {activeSubcategory !== "all" ? activeSubcategory : activeCategory !== "all" ? CATEGORY_MAP[activeCategory]?.label : "全领域工具导航"}
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            {activeSubcategory !== "all" ? `精选 ${activeSubcategory} 相关的顶级开发与设计工具。` : "为您搜罗全球范围内各专业领域的顶尖生产力工具。"}
          </p>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          当前分类下找到 {filteredTools.length} 个资源
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
            <h3 className="text-2xl font-bold mb-2 text-foreground">未找到匹配工具</h3>
            <p className="text-muted-foreground">试试搜索其他关键词或切换分类</p>
          </div>
        )}
      </main>
    </div>
  );
}
