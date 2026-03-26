import CategorySidebar from "@/components/CategorySidebar";
import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import { toolsData } from "@/lib/tools-data";
import { useMemo, useState } from "react";
import { Github } from "lucide-react";

/**
 * 设计哲学：极简科技风
 * - 深灰蓝色背景 + 电光蓝强调色
 * - 左侧分类侧栏 + 右侧卡片网格
 * - 高对比度文字，易于阅读
 * - 平滑的过渡和微妙的悬停效果
 */
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 过滤工具数据
  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === null || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // 按分类分组工具
  const groupedTools = useMemo(() => {
    const groups: Record<string, typeof toolsData> = {};
    filteredTools.forEach((tool) => {
      if (!groups[tool.category]) {
        groups[tool.category] = [];
      }
      groups[tool.category].push(tool);
    });
    return groups;
  }, [filteredTools]);

  return (
    <div className="flex h-screen bg-background">
      {/* 分类侧栏 */}
      <CategorySidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* 主内容区域 */}
      <main className="flex-1 overflow-y-auto">
        {/* 顶部导航栏 */}
        <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 px-6 py-4">
            <div className="flex-1">
              <h1 className="mb-2 text-2xl font-bold text-foreground">
                CS Tool Station
              </h1>
              <p className="text-sm text-muted-foreground">
                为计算机及软件工程专业人士精心整理的工具导航站
              </p>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card p-2 text-muted-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
              aria-label="访问 GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* 搜索栏 */}
          <div className="px-6 pb-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="搜索工具、库或网站..."
            />
          </div>
        </div>

        {/* 工具网格 */}
        <div className="px-6 py-8">
          {filteredTools.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12">
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  未找到匹配的工具
                </p>
                <p className="text-sm text-muted-foreground">
                  尝试调整搜索条件或浏览其他分类
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
              >
                重置筛选
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {selectedCategory ? (
                // 单个分类视图
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-foreground">
                    {selectedCategory}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredTools.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                </div>
              ) : (
                // 多分类视图
                Object.entries(groupedTools).map(([category, tools]) => (
                  <div key={category}>
                    <h2 className="mb-4 text-xl font-semibold text-foreground">
                      {category}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {tools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* 页脚 */}
        <footer className="border-t border-border bg-card px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            CS Tool Station © 2024 • 为开发者打造的工具导航站
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            持续更新中... 如有建议，欢迎通过 GitHub 提交 Issue
          </p>
        </footer>
      </main>
    </div>
  );
}
