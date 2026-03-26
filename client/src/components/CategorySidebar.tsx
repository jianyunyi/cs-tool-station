import { categories } from "@/lib/tools-data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function CategorySidebar({
  selectedCategory,
  onCategoryChange,
}: CategorySidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className="sticky top-0 h-screen w-64 border-r border-border bg-background px-4 py-6 overflow-y-auto">
      {/* 侧栏标题 */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">分类</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded p-1 text-muted-foreground transition-colors hover:text-accent"
          aria-label="切换分类菜单"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* 全部选项 */}
      {isExpanded && (
        <div className="space-y-1">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ${
              selectedCategory === null
                ? "bg-accent text-accent-foreground font-semibold"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            全部工具
          </button>

          {/* 分类列表 */}
          <div className="space-y-1 border-t border-border pt-4 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 分类计数 */}
      {!isExpanded && (
        <div className="text-xs text-muted-foreground">
          {categories.length} 个分类
        </div>
      )}
    </aside>
  );
}
