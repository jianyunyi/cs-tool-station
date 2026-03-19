import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "搜索工具、库或网站...",
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // 处理快捷键 Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border bg-card py-2 pl-10 pr-10 text-sm text-foreground placeholder-muted-foreground transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          aria-label="搜索工具"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="清除搜索"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* 快捷键提示 */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none">
        {!value && (
          <kbd className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
            ⌘K
          </kbd>
        )}
      </div>
    </div>
  );
}
