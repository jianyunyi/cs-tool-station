# CS Tool Station - 计算机专业工具导航站

一个为计算机及软件工程专业人士精心整理的工具导航站，包含编码工具、第三方库、练手网站等资源。

## 🎯 项目特性

- **全面的工具库**：涵盖编码编辑器、版本控制、前后端框架、数据库、构建工具等多个领域
- **智能搜索**：实时搜索和过滤功能，快速找到所需工具
- **分类导航**：17 个精心分类，清晰的信息架构
- **极简科技风设计**：深色主题 + 电光蓝强调色，专业且易用
- **响应式设计**：完美适配桌面、平板和移动设备
- **快速加载**：静态网站，CDN 部署，极速访问

## 📚 包含的工具分类

- **编码编辑器**：VS Code、JetBrains IDE、Sublime Text、Neovim
- **版本控制**：Git、GitHub、GitLab
- **前端框架**：React、Vue.js、Angular、Svelte
- **后端框架**：Node.js、Express、Django、FastAPI、Spring Boot
- **数据库**：PostgreSQL、MySQL、MongoDB、Redis
- **构建工具**：Webpack、Vite、esbuild、Babel
- **包管理器**：npm、Yarn、pnpm
- **测试框架**：Jest、Vitest、pytest
- **文档工具**：Docusaurus、MkDocs
- **练手网站**：LeetCode、Codeforces、HackerRank、Codewars、Project Euler
- **学习平台**：Coursera、Udemy、edX、W3Schools
- **设计工具**：Figma、Sketch
- **在线工具**：Regex101、Regexper
- **开发工具**：Postman、Insomnia
- **生产力工具**：Notion、Obsidian
- **云平台**：Vercel、Netlify、Heroku
- **第三方库**：Lodash、Axios、Day.js、Tailwind CSS、Bootstrap

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 打开浏览器访问 http://localhost:3000
```

### 构建生产版本

```bash
# 构建项目
pnpm build

# 预览构建结果
pnpm preview
```

## 📦 技术栈

- **前端框架**：React 19
- **构建工具**：Vite
- **样式框架**：Tailwind CSS 4
- **UI 组件**：shadcn/ui
- **图标库**：Lucide React
- **路由**：Wouter
- **字体**：Geist Mono + Inter

## 🎨 设计理念

项目采用**极简科技风**设计方案：

- **深灰蓝色背景**（`#0f1419`）：减少眼睛疲劳，适合长时间阅读
- **电光蓝强调色**（`#00d9ff`）：代表科技、能量、创新
- **高对比度文字**：确保易读性和无障碍访问
- **平滑过渡效果**：所有交互都使用 150ms 的 ease-out 过渡
- **左侧分类侧栏**：高效的信息架构，易于导航

## 📝 项目结构

```
cs-tool-station/
├── client/
│   ├── public/              # 静态资源
│   ├── src/
│   │   ├── components/      # React 组件
│   │   ├── pages/           # 页面组件
│   │   ├── lib/             # 工具函数和数据
│   │   ├── contexts/        # React Context
│   │   ├── App.tsx          # 主应用组件
│   │   ├── main.tsx         # 入口文件
│   │   └── index.css        # 全局样式
│   └── index.html           # HTML 模板
├── server/                  # 服务器配置（静态部署）
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions 工作流
├── package.json             # 项目配置
├── vite.config.ts           # Vite 配置
└── README.md                # 项目说明
```

## 🔧 主要组件

### ToolCard
展示单个工具的卡片组件，包含：
- 工具标题和分类
- 工具描述
- 标签
- 外链按钮

### CategorySidebar
左侧分类导航侧栏，支持：
- 分类列表展示
- 分类选择过滤
- 侧栏展开/收起

### SearchBar
搜索栏组件，支持：
- 实时搜索和过滤
- 快捷键支持（Cmd/Ctrl + K）
- 清除搜索功能

## 🌐 部署

### GitHub Pages 部署

项目已配置 GitHub Actions 自动部署工作流：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建项目
3. 构建结果自动部署到 GitHub Pages

访问地址：`https://jianyunyi.github.io/cs-tool-station/`

### 自定义域名

如需使用自定义域名，修改 `.github/workflows/deploy.yml` 中的 `cname` 字段。

## 📖 使用指南

### 搜索工具

1. 点击搜索栏或按 `Cmd/Ctrl + K` 快捷键
2. 输入工具名称、描述关键词或标签
3. 结果实时更新

### 浏览分类

1. 点击左侧侧栏中的分类
2. 只显示该分类下的工具
3. 点击"全部工具"返回所有工具视图

### 访问工具

点击任何工具卡片即可打开该工具的官方网站。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 添加新工具

编辑 `client/src/lib/tools-data.ts` 文件，按照以下格式添加：

```typescript
{
  id: "unique-id",
  title: "工具名称",
  description: "工具描述",
  category: "分类名称",
  tags: ["标签1", "标签2"],
  url: "https://example.com",
  color: "#00d9ff",
}
```

### 修改分类

在 `client/src/lib/tools-data.ts` 中的 `categories` 数组中修改。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📧 联系方式

如有问题或建议，欢迎通过以下方式联系：

- GitHub Issues：[提交 Issue](https://github.com/jianyunyi/cs-tool-station/issues)
- GitHub Discussions：[参与讨论](https://github.com/jianyunyi/cs-tool-station/discussions)

---

**CS Tool Station** - 为开发者打造的工具导航站 🚀
