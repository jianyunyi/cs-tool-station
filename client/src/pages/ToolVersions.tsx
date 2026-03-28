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
        <h2 className="text-2xl font-bold mb-2">未找到该工具</h2>
        <p className="text-muted-foreground mb-6">抱歉，我们找不到您请求的工具信息。</p>
        <Link href="/">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> 返回首页
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent">
            <ChevronLeft className="mr-1 h-4 w-4" /> 返回首页
          </Button>
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              style={{ backgroundColor: tool.color || "#444" }}
            >
              {tool.title.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{tool.title}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">{tool.category}</Badge>
                {tool.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="opacity-70">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
          <a href={tool.url} target="_blank" rel="noopener noreferrer">
            <Button>
              <Globe className="mr-2 h-4 w-4" /> 访问官网 <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </a>
        </div>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {tool.description}
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">可用版本</h2>
        
        {!tool.versions || tool.versions.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="py-12 flex flex-col items-center justify-center text-center">
              <div className="bg-muted rounded-full p-3 mb-4">
                <Download className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">暂无特定版本数据</h3>
              <p className="text-muted-foreground max-w-xs mx-auto mt-2">
                该工具目前仅提供官网下载地址，请点击上方“访问官网”按钮获取最新版本。
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {tool.versions.map((v, index) => (
              <Card key={`${v.version}-${index}`} className="overflow-hidden border-l-4" style={{ borderLeftColor: tool.color }}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        版本 {v.version}
                        {index === 0 && <Badge className="bg-green-600 hover:bg-green-700">最新</Badge>}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        发布日期: {v.releaseDate || "未知"}
                      </CardDescription>
                    </div>
                    <a href={v.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Download className="h-4 w-4" /> 下载
                      </Button>
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  {v.description && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {v.description}
                    </p>
                  )}
                  {v.platform && v.platform.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs font-medium text-muted-foreground mr-1">支持平台:</span>
                      {v.platform.map(p => (
                        <Badge key={p} variant="secondary" className="text-[10px] px-1.5 py-0 h-4 uppercase">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© 2026 CS Tool Station - 致力于为开发者提供最全的工具导航</p>
      </footer>
    </div>
  );
}
