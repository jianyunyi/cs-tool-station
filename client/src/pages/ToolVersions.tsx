import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toolsData } from "@/lib/tools-data";
import { ChevronLeft, Download, ExternalLink, Globe } from "lucide-react";
import { Link, useParams } from "wouter";

export default function ToolVersions() {
  const { id } = useParams();
  const tool = toolsData.find((t) => t.id === id);

  if (!tool) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-bold mb-4">未找到该工具</h2>
        <p className="text-muted-foreground mb-8 text-lg">抱歉，我们找不到您请求的工具信息。</p>
        <Link href="/">
          <Button variant="default" size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
            <ChevronLeft className="mr-2 h-5 w-5" /> 返回首页
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="mb-12 relative">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="mr-1 h-5 w-5" /> 返回首页
          </Button>
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 shadow-2xl relative overflow-hidden">
          {/* 背景装饰 */}
          <div 
            className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-10"
            style={{ backgroundColor: tool.color || "#00d9ff" }}
          />
          
          <div className="flex items-center gap-8 relative z-10">
            <div className="relative group">
              <div 
                className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: tool.color || "#444" }}
              />
              <div 
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-background/90 border border-border/50 flex items-center justify-center p-5 shadow-xl relative"
              >
                {tool.icon ? (
                  <img 
                    src={tool.icon} 
                    alt={tool.title} 
                    className="w-full h-full object-contain filter drop-shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.title)}&background=${(tool.color || "#444").replace("#", "")}&color=fff&size=128`;
                    }}
                  />
                ) : (
                  <div 
                    className="w-full h-full rounded-xl flex items-center justify-center text-white text-4xl font-black"
                    style={{ backgroundColor: tool.color || "#444" }}
                  >
                    {tool.title.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                {tool.title}
              </h1>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {tool.category}
                </Badge>
                {tool.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="border-border/50 bg-background/50 text-muted-foreground text-[10px] px-3 py-0.5 rounded-full font-semibold uppercase">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-8 h-14 font-bold shadow-xl shadow-primary/20 gap-3">
                <Globe className="h-5 w-5" /> 访问官网 <ExternalLink className="h-4 w-4 opacity-50" />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-10 max-w-3xl">
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-black tracking-tight">可用版本</h2>
          <div className="h-px flex-1 bg-border/50" />
        </div>
        
        {!tool.versions || tool.versions.length === 0 ? (
          <Card className="border-dashed border-2 bg-muted/20 rounded-3xl">
            <CardContent className="py-20 flex flex-col items-center justify-center text-center">
              <div className="bg-background rounded-full p-6 mb-6 shadow-inner">
                <Download className="h-10 w-10 text-muted-foreground/50" />
              </div>
              <h3 className="text-2xl font-bold mb-3">暂无特定版本数据</h3>
              <p className="text-muted-foreground max-w-md mx-auto text-lg leading-relaxed">
                该工具目前仅提供官网下载地址。建议您点击上方按钮前往官网获取最新版本，我们将持续更新版本库。
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {tool.versions.map((v, index) => (
              <Card key={`${v.version}-${index}`} className="overflow-hidden border-border/50 bg-card/30 backdrop-blur-md rounded-2xl hover:border-primary/30 transition-all group shadow-sm hover:shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full transition-all group-hover:w-2" style={{ backgroundColor: tool.color || "#444" }} />
                <CardHeader className="pb-4 pt-6 px-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-2xl font-black tracking-tight">
                          {v.version}
                        </CardTitle>
                        {index === 0 && (
                          <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-none font-black text-[10px] px-3 py-0.5 rounded-full uppercase tracking-tighter">
                            最新稳定版
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm font-semibold text-muted-foreground/60 flex items-center gap-2">
                        <span>发布于</span>
                        <span className="text-foreground/70">{v.releaseDate || "未知"}</span>
                      </CardDescription>
                    </div>
                    <a href={v.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="rounded-full px-6 font-bold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all gap-2 h-11">
                        <Download className="h-4 w-4" /> 立即下载
                      </Button>
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 pt-2">
                  {v.description && (
                    <div className="bg-background/40 p-5 rounded-xl border border-border/30 mb-5">
                      <p className="text-base text-muted-foreground leading-relaxed italic">
                        "{v.description}"
                      </p>
                    </div>
                  )}
                  {v.platform && v.platform.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-black text-muted-foreground/40 uppercase tracking-widest">支持平台</span>
                      <div className="flex flex-wrap gap-2">
                        {v.platform.map(p => (
                          <Badge key={p} variant="secondary" className="bg-secondary/40 text-secondary-foreground text-[10px] px-3 py-0.5 rounded-full font-bold uppercase border border-transparent hover:border-border/50 transition-colors">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <footer className="mt-24 pt-12 border-t border-border/50 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-primary animate-pulse" />
          </div>
          <span className="font-black tracking-tighter text-xl italic">CS TOOL STATION</span>
        </div>
        <p className="text-sm text-muted-foreground/60 font-medium">© 2026 致力于为全球开发者提供最极致的工具导航体验</p>
      </footer>
    </div>
  );
}
