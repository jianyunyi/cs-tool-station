import { Tool } from "@/lib/tools-data";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool-card group"
    >
      {/* 背景装饰 */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-10"
        style={{
          background: tool.color || "#00d9ff",
        }}
      />

      {/* 内容 */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* 标题和图标 */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
              {tool.title}
            </h3>
            <p className="text-xs text-muted-foreground">{tool.category}</p>
          </div>
          <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-accent" />
        </div>

        {/* 描述 */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {tool.description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground transition-colors duration-200 group-hover:bg-accent/20 group-hover:text-accent"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              +{tool.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
