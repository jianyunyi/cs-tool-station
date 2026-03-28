export interface ToolVersion {
  version: string;
  releaseDate?: string;
  downloadUrl: string;
  platform?: string[];
  description?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  icon?: string;
  color?: string;
  versions?: ToolVersion[];
}

export const toolsData: Tool[] = [
  // 编码编辑器与IDE
  {
    id: "vscode",
    title: "Visual Studio Code",
    description: "轻量级、功能强大的代码编辑器，支持多种编程语言和扩展",
    category: "编码编辑器",
    tags: ["编辑器", "IDE", "开源"],
    url: "https://code.visualstudio.com",
    color: "#007ACC",
    versions: [
      {
        version: "1.85.1",
        releaseDate: "2023-12-13",
        downloadUrl: "https://code.visualstudio.com/updates/v1_85",
        platform: ["Windows", "macOS", "Linux"],
        description: "稳定版更新，修复了多个关键漏洞和性能问题。"
      },
      {
        version: "1.84.2",
        releaseDate: "2023-11-09",
        downloadUrl: "https://code.visualstudio.com/updates/v1_84",
        platform: ["Windows", "macOS", "Linux"],
        description: "引入了改进的侧边栏交互和新的终端功能。"
      }
    ]
  },
  {
    id: "jetbrains",
    title: "JetBrains IDE 系列",
    description: "专业的集成开发环境，包括 IntelliJ IDEA、PyCharm、WebStorm 等",
    category: "编码编辑器",
    tags: ["IDE", "专业", "Java", "Python", "Web"],
    url: "https://www.jetbrains.com",
    color: "#000000",
    versions: [
      {
        version: "2023.3",
        releaseDate: "2023-12-06",
        downloadUrl: "https://www.jetbrains.com/idea/download/",
        platform: ["Windows", "macOS", "Linux"],
        description: "全面支持 Java 21 和最新的 AI 辅助开发功能。"
      }
    ]
  },
  {
    id: "sublime",
    title: "Sublime Text",
    description: "轻量级、快速的代码编辑器，支持自定义和插件",
    category: "编码编辑器",
    tags: ["编辑器", "轻量级"],
    url: "https://www.sublimetext.com",
    color: "#FF9800",
    versions: [
      {
        version: "Build 4169",
        releaseDate: "2023-11-20",
        downloadUrl: "https://www.sublimetext.com/download",
        platform: ["Windows", "macOS", "Linux"]
      }
    ]
  },
  {
    id: "neovim",
    title: "Neovim",
    description: "现代化的 Vim 编辑器，高度可定制，适合终端开发",
    category: "编码编辑器",
    tags: ["编辑器", "终端", "开源"],
    url: "https://neovim.io",
    color: "#57A143",
    versions: [
      {
        version: "0.9.4",
        releaseDate: "2023-10-10",
        downloadUrl: "https://github.com/neovim/neovim/releases/tag/v0.9.4",
        platform: ["Source", "Linux", "macOS", "Windows"]
      }
    ]
  },

  // 版本控制
  {
    id: "git",
    title: "Git",
    description: "分布式版本控制系统，是现代软件开发的标准",
    category: "版本控制",
    tags: ["版本控制", "开源", "必备"],
    url: "https://git-scm.com",
    color: "#F1502F",
    versions: [
      {
        version: "2.43.0",
        releaseDate: "2023-11-20",
        downloadUrl: "https://git-scm.com/download",
        platform: ["Windows", "macOS", "Linux"]
      }
    ]
  },
  {
    id: "github",
    title: "GitHub",
    description: "全球最大的代码托管平台，支持协作开发和社区贡献",
    category: "版本控制",
    tags: ["代码托管", "社区", "CI/CD"],
    url: "https://github.com",
    color: "#181717",
  },
  {
    id: "gitlab",
    title: "GitLab",
    description: "开源的 Git 仓库管理系统，支持自部署和企业级功能",
    category: "版本控制",
    tags: ["代码托管", "开源", "企业"],
    url: "https://about.gitlab.com",
    color: "#FC6D26",
  },

  // 前端框架与库
  {
    id: "react",
    title: "React",
    description: "Facebook 开源的 JavaScript 库，用于构建用户界面",
    category: "前端框架",
    tags: ["JavaScript", "UI库", "组件化"],
    url: "https://react.dev",
    color: "#61DAFB",
    versions: [
      {
        version: "18.2.0",
        releaseDate: "2022-06-14",
        downloadUrl: "https://github.com/facebook/react/releases/tag/v18.2.0",
        description: "当前稳定版本，包含并发渲染等核心特性。"
      }
    ]
  },
  {
    id: "vue",
    title: "Vue.js",
    description: "渐进式 JavaScript 框架，易学易用，适合快速开发",
    category: "前端框架",
    tags: ["JavaScript", "框架", "渐进式"],
    url: "https://vuejs.org",
    color: "#4FC08D",
    versions: [
      {
        version: "3.3.10",
        releaseDate: "2023-12-07",
        downloadUrl: "https://github.com/vuejs/core/releases",
        description: "性能优化和更好的 TypeScript 支持。"
      }
    ]
  },
  {
    id: "angular",
    title: "Angular",
    description: "Google 开源的前端框架，适合大型企业级应用",
    category: "前端框架",
    tags: ["JavaScript", "框架", "企业级"],
    url: "https://angular.io",
    color: "#DD0031",
    versions: [
      {
        version: "17.0.5",
        releaseDate: "2023-12-06",
        downloadUrl: "https://github.com/angular/angular/releases",
        description: "引入了全新的控制流语法和延迟加载特性。"
      }
    ]
  },
  {
    id: "svelte",
    title: "Svelte",
    description: "编译型前端框架，提供更小的包体积和更高的性能",
    category: "前端框架",
    tags: ["JavaScript", "框架", "编译型"],
    url: "https://svelte.dev",
    color: "#FF3E00",
  },

  // 后端框架
  {
    id: "nodejs",
    title: "Node.js",
    description: "基于 Chrome V8 引擎的 JavaScript 运行时，用于服务器端开发",
    category: "后端框架",
    tags: ["JavaScript", "运行时", "服务器"],
    url: "https://nodejs.org",
    color: "#339933",
    versions: [
      {
        version: "20.10.0 (LTS)",
        releaseDate: "2023-11-24",
        downloadUrl: "https://nodejs.org/en/download/",
        platform: ["Windows", "macOS", "Linux"]
      },
      {
        version: "21.4.0 (Current)",
        releaseDate: "2023-12-06",
        downloadUrl: "https://nodejs.org/en/download/current/",
        platform: ["Windows", "macOS", "Linux"]
      }
    ]
  },
  {
    id: "express",
    title: "Express.js",
    description: "Node.js 最流行的 Web 框架，轻量级且灵活",
    category: "后端框架",
    tags: ["Node.js", "Web框架", "轻量级"],
    url: "https://expressjs.com",
    color: "#000000",
  },
  {
    id: "django",
    title: "Django",
    description: "Python 的全功能 Web 框架，包含 ORM、认证、管理后台等",
    category: "后端框架",
    tags: ["Python", "Web框架", "全功能"],
    url: "https://www.djangoproject.com",
    color: "#092E20",
    versions: [
      {
        version: "5.0",
        releaseDate: "2023-12-04",
        downloadUrl: "https://www.djangoproject.com/download/",
        description: "正式支持异步 ORM 和字段验证改进。"
      }
    ]
  },
  {
    id: "fastapi",
    title: "FastAPI",
    description: "现代、快速的 Python Web 框架，用于构建 API",
    category: "后端框架",
    tags: ["Python", "API", "异步"],
    url: "https://fastapi.tiangolo.com",
    color: "#009688",
  },
  {
    id: "spring",
    title: "Spring Boot",
    description: "Java 生态中最流行的框架，用于快速开发企业级应用",
    category: "后端框架",
    tags: ["Java", "企业级", "全功能"],
    url: "https://spring.io/projects/spring-boot",
    color: "#6DB33F",
    versions: [
      {
        version: "3.2.0",
        releaseDate: "2023-11-23",
        downloadUrl: "https://spring.io/projects/spring-boot#learn",
        description: "支持虚拟线程和最新的 Java 特性。"
      }
    ]
  },

  // 数据库
  {
    id: "postgresql",
    title: "PostgreSQL",
    description: "功能强大的开源关系型数据库，支持高级特性",
    category: "数据库",
    tags: ["SQL", "关系型", "开源"],
    url: "https://www.postgresql.org",
    color: "#336791",
    versions: [
      {
        version: "16.1",
        releaseDate: "2023-11-09",
        downloadUrl: "https://www.postgresql.org/download/",
        platform: ["Windows", "macOS", "Linux", "Source"]
      }
    ]
  },
  {
    id: "mysql",
    title: "MySQL",
    description: "最流行的开源关系型数据库，被广泛应用于 Web 应用",
    category: "数据库",
    tags: ["SQL", "关系型", "开源"],
    url: "https://www.mysql.com",
    color: "#00758F",
    versions: [
      {
        version: "8.2.0",
        releaseDate: "2023-10-25",
        downloadUrl: "https://dev.mysql.com/downloads/mysql/",
        platform: ["Windows", "macOS", "Linux"]
      }
    ]
  },
  {
    id: "mongodb",
    title: "MongoDB",
    description: "流行的 NoSQL 文档数据库，支持灵活的数据模型",
    category: "数据库",
    tags: ["NoSQL", "文档数据库", "灵活"],
    url: "https://www.mongodb.com",
    color: "#13AA52",
  },
  {
    id: "redis",
    title: "Redis",
    description: "内存数据结构存储，用于缓存、会话、消息队列等",
    category: "数据库",
    tags: ["NoSQL", "缓存", "内存"],
    url: "https://redis.io",
    color: "#DC382D",
  },

  // 构建工具
  {
    id: "webpack",
    title: "Webpack",
    description: "现代 JavaScript 应用的模块打包器，支持代码分割和优化",
    category: "构建工具",
    tags: ["打包工具", "JavaScript", "优化"],
    url: "https://webpack.js.org",
    color: "#8DD6F9",
  },
  {
    id: "vite",
    title: "Vite",
    description: "新一代前端构建工具，提供极速的开发体验",
    category: "构建工具",
    tags: ["打包工具", "快速", "现代"],
    url: "https://vitejs.dev",
    color: "#646CFF",
    versions: [
      {
        version: "5.0.7",
        releaseDate: "2023-12-08",
        downloadUrl: "https://github.com/vitejs/vite/releases",
        description: "更快的构建速度和更小的包体积。"
      }
    ]
  },
  {
    id: "esbuild",
    title: "esbuild",
    description: "极速的 JavaScript 打包工具，用 Go 编写",
    category: "构建工具",
    tags: ["打包工具", "快速", "Go"],
    url: "https://esbuild.github.io",
    color: "#FFCB45",
  },
  {
    id: "babel",
    title: "Babel",
    description: "JavaScript 编译器，将 modern JavaScript 转换为向后兼容的版本",
    category: "构建工具",
    tags: ["编译器", "JavaScript", "兼容性"],
    url: "https://babeljs.io",
    color: "#F9DC3E",
  },

  // 包管理器
  {
    id: "npm",
    title: "npm",
    description: "Node.js 的包管理器，拥有最大的开源包生态",
    category: "包管理器",
    tags: ["包管理", "Node.js", "生态"],
    url: "https://www.npmjs.com",
    color: "#CB3837",
  },
  {
    id: "yarn",
    title: "Yarn",
    description: "Facebook 开源的包管理器，提供更快和更可靠的依赖管理",
    category: "包管理器",
    tags: ["包管理", "Node.js", "快速"],
    url: "https://yarnpkg.com",
    color: "#2C8EBB",
  },
  {
    id: "pnpm",
    title: "pnpm",
    description: "高效的包管理器，通过硬链接节省磁盘空间",
    category: "包管理器",
    tags: ["包管理", "高效", "现代"],
    url: "https://pnpm.io",
    color: "#F69220",
  },

  // 测试框架
  {
    id: "jest",
    title: "Jest",
    description: "JavaScript 测试框架，提供零配置的测试体验",
    category: "测试框架",
    tags: ["测试", "JavaScript", "单元测试"],
    url: "https://jestjs.io",
    color: "#15C213",
  },
  {
    id: "vitest",
    title: "Vitest",
    description: "由 Vite 驱动的单元测试框架，极速且兼容 Jest",
    category: "测试框架",
    tags: ["测试", "快速", "Vite"],
    url: "https://vitest.dev",
    color: "#6BD7A8",
  },
  {
    id: "pytest",
    title: "pytest",
    description: "Python 的测试框架，简单易用且功能强大",
    category: "测试框架",
    tags: ["测试", "Python", "单元测试"],
    url: "https://pytest.org",
    color: "#0A9EDC",
  },

  // 文档工具
  {
    id: "docusaurus",
    title: "Docusaurus",
    description: "Facebook 开源的文档生成工具，基于 React 和 Markdown",
    category: "文档工具",
    tags: ["文档", "静态网站", "React"],
    url: "https://docusaurus.io",
    color: "#1E90FF",
  },
  {
    id: "mkdocs",
    title: "MkDocs",
    description: "基于 Markdown 的文档生成工具，快速且易用",
    category: "文档工具",
    tags: ["文档", "Python", "Markdown"],
    url: "https://www.mkdocs.org",
    color: "#000000",
  },

  // 在线编程练习
  {
    id: "leetcode",
    title: "LeetCode",
    description: "最流行的算法练习平台，包含数千道编程题",
    category: "练手网站",
    tags: ["算法", "编程", "面试"],
    url: "https://leetcode.com",
    color: "#FFA500",
  },
  {
    id: "codeforces",
    title: "Codeforces",
    description: "竞技编程平台，定期举办编程竞赛",
    category: "练手网站",
    tags: ["竞技编程", "算法", "比赛"],
    url: "https://codeforces.com",
    color: "#1F1C1C",
  },
  {
    id: "hackerrank",
    title: "HackerRank",
    description: "编程练习和招聘平台，提供多种难度的题目",
    category: "练手网站",
    tags: ["编程", "练习", "招聘"],
    url: "https://www.hackerrank.com",
    color: "#2EC866",
  },
  {
    id: "codewars",
    title: "Codewars",
    description: "游戏化的编程学习平台，通过解题升级",
    category: "练手网站",
    tags: ["编程", "游戏化", "学习"],
    url: "https://www.codewars.com",
    color: "#8B4513",
  },
  {
    id: "projecteuler",
    title: "Project Euler",
    description: "数学和编程问题集合，适合提升编程和数学能力",
    category: "练手网站",
    tags: ["数学", "算法", "编程"],
    url: "https://projecteuler.net",
    color: "#000000",
  },

  // 在线学习平台
  {
    id: "coursera",
    title: "Coursera",
    description: "全球最大的在线学习平台，提供大学级别的课程",
    category: "学习平台",
    tags: ["在线学习", "课程", "认证"],
    url: "https://www.coursera.org",
    color: "#0056D2",
  },
  {
    id: "udemy",
    title: "Udemy",
    description: "在线课程平台，提供数千门编程和技术课程",
    category: "学习平台",
    tags: ["在线学习", "课程", "实惠"],
    url: "https://www.udemy.com",
    color: "#EC5252",
  },
  {
    id: "edx",
    title: "edX",
    description: "由 MIT 和伯克利创办的在线学习平台",
    category: "学习平台",
    tags: ["在线学习", "大学课程", "认证"],
    url: "https://www.edx.org",
    color: "#02262B",
  },
  {
    id: "w3schools",
    title: "W3Schools",
    description: "Web 开发教程网站，涵盖 HTML、CSS、JavaScript 等",
    category: "学习平台",
    tags: ["教程", "Web", "参考"],
    url: "https://www.w3schools.com",
    color: "#04AA6D",
  },

  // 设计工具
  {
    id: "figma",
    title: "Figma",
    description: "云端协作设计工具，用于 UI/UX 设计和原型制作",
    category: "设计工具",
    tags: ["设计", "协作", "原型"],
    url: "https://www.figma.com",
    color: "#F24E1E",
  },
  {
    id: "sketch",
    title: "Sketch",
    description: "专业的 UI 设计工具，被广泛用于 Web 和应用设计",
    category: "设计工具",
    tags: ["设计", "UI", "Mac"],
    url: "https://www.sketch.com",
    color: "#F7931E",
  },

  // 正则表达式工具
  {
    id: "regex101",
    title: "Regex101",
    description: "在线正则表达式测试和学习工具，支持多种语言",
    category: "在线工具",
    tags: ["正则表达式", "测试", "学习"],
    url: "https://regex101.com",
    color: "#0066CC",
  },
  {
    id: "regexper",
    title: "Regexper",
    description: "将正则表达式可视化，帮助理解复杂的正则模式",
    category: "在线工具",
    tags: ["正则表达式", "可视化"],
    url: "https://regexper.com",
    color: "#4A90E2",
  },

  // API 工具
  {
    id: "postman",
    title: "Postman",
    description: "API 开发和测试工具，支持请求构建、测试和文档生成",
    category: "开发工具",
    tags: ["API", "测试", "协作"],
    url: "https://www.postman.com",
    color: "#FF6C37",
  },
  {
    id: "insomnia",
    title: "Insomnia",
    description: "轻量级的 API 客户端，用于测试和调试 API",
    category: "开发工具",
    tags: ["API", "测试", "轻量级"],
    url: "https://insomnia.rest",
    color: "#4000BF",
  },

  // 文档和笔记
  {
    id: "notion",
    title: "Notion",
    description: "全能的笔记和文档工具，支持数据库、看板等多种视图",
    category: "生产力工具",
    tags: ["笔记", "文档", "协作"],
    url: "https://www.notion.so",
    color: "#000000",
  },
  {
    id: "obsidian",
    title: "Obsidian",
    description: "本地优先的知识管理工具，支持 Markdown 和双向链接",
    category: "生产力工具",
    tags: ["笔记", "知识管理", "本地"],
    url: "https://obsidian.md",
    color: "#7C3AED",
  },

  // 云平台
  {
    id: "vercel",
    title: "Vercel",
    description: "前端部署平台，为 Next.js 和静态网站提供最优体验",
    category: "云平台",
    tags: ["部署", "前端", "CI/CD"],
    url: "https://vercel.com",
    color: "#000000",
  },
  {
    id: "netlify",
    title: "Netlify",
    description: "现代 Web 应用的部署平台，支持静态网站和无服务器函数",
    category: "云平台",
    tags: ["部署", "前端", "无服务器"],
    url: "https://www.netlify.com",
    color: "#00AD9F",
  },
  {
    id: "cloudflare",
    title: "Cloudflare",
    description: "全球网络平台，提供 CDN、安全、边缘计算和 Pages 部署",
    category: "云平台",
    tags: ["CDN", "安全", "部署", "边缘计算"],
    url: "https://www.cloudflare.com",
    color: "#F38020",
  }
];
