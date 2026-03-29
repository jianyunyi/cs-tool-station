import { Tool } from "@/lib/tools-data";
import { Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="tool-card group relative flex flex-col h-full overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border-border/50 hover:border-primary/50">
      {/* 背景光晕效果 */}
      <div
        className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-20"
        style={{
          backgroundColor: tool.color || "#00d9ff",
        }}
      />

      {/* 内容区域 */}
      <div className="relative z-10 flex flex-col gap-4 p-6 flex-grow">
        {/* 头部：Logo 和 标题 */}
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <div 
              className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: tool.color || "#00d9ff" }}
            />
            <div className="relative w-14 h-14 rounded-xl bg-background/80 border border-border/50 flex items-center justify-center p-2.5 shadow-sm group-hover:scale-110 transition-transform duration-500">
              {tool.icon ? (
                <img 
                  src={tool.icon} 
                  alt={tool.title} 
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.title)}&background=${(tool.color || "#444").replace("#", "")}&color=fff`;
                  }}
                />
              ) : (
                <div 
                  className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: tool.color || "#444" }}
                >
                  {tool.title.charAt(0)}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors truncate">
              {tool.title}
            </h3>
            <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mt-1">
              {tool.category}
            </p>
          </div>
        </div>

        {/* 描述文本 */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10 group-hover:text-foreground/80 transition-colors">
          {tool.description}
        </p>

        {/* 标签展示 */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary/40 px-3 py-0.5 text-[10px] font-bold text-secondary-foreground transition-all group-hover:bg-primary/10 group-hover:text-primary border border-transparent group-hover:border-primary/20"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              +{tool.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* 底部操作按钮 */}
      <div className="relative z-20 grid grid-cols-2 border-t border-border/50 bg-muted/20 backdrop-blur-md">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-muted-foreground hover:bg-background/50 hover:text-primary transition-all border-r border-border/50"
        >
          <ExternalLink className="h-4 w-4" />
          官网
        </a>
        <Link
          href={`/tool/${tool.id}/versions`}
          className="flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-muted-foreground hover:bg-background/50 hover:text-primary transition-all"
        >
          <Download className="h-4 w-4" />
          版本
        </Link>
      </div>
    </div>
  );
}
