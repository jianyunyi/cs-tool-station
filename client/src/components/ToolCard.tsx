import { Tool } from "@/lib/tools-data";
import { Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="tool-card group relative flex flex-col h-full overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* 背景装饰 */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]"
        style={{
          backgroundColor: tool.color || "#00d9ff",
        }}
      />

      {/* 内容区域 */}
      <div className="relative z-10 flex flex-col gap-3 p-5 flex-grow">
        {/* 头部：标题和分类 */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: tool.color || "#00d9ff" }}
              />
              <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
            </div>
            <p className="text-xs font-medium text-muted-foreground mt-0.5">{tool.category}</p>
          </div>
        </div>

        {/* 描述文本 */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10">
          {tool.description}
        </p>

        {/* 标签展示 */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground uppercase tracking-wider transition-colors group-hover:bg-primary/10 group-hover:text-primary"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-secondary/30 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              +{tool.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* 底部操作按钮 */}
      <div className="relative z-20 grid grid-cols-2 border-t divide-x bg-muted/30">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-muted-foreground hover:bg-background hover:text-primary transition-all"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          访问官网
        </a>
        <Link
          href={`/tool/${tool.id}/versions`}
          className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-muted-foreground hover:bg-background hover:text-primary transition-all"
        >
          <Download className="h-3.5 w-3.5" />
          版本下载
        </Link>
      </div>
    </div>
  );
}
