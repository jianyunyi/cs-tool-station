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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visualstudiocode.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jetbrains.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sublimetext.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/neovim.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#181717",
  },
  {
    id: "gitlab",
    title: "GitLab",
    description: "开源的 Git 仓库管理系统，支持自部署和企业级功能",
    category: "版本控制",
    tags: ["代码托管", "开源", "企业"],
    url: "https://about.gitlab.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gitlab.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vuedotjs.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/angular.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/svelte.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/express.svg",
    color: "#000000",
  },
  {
    id: "django",
    title: "Django",
    description: "Python 的全功能 Web 框架，包含 ORM、认证、管理后台等",
    category: "后端框架",
    tags: ["Python", "Web框架", "全功能"],
    url: "https://www.djangoproject.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/django.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastapi.svg",
    color: "#009688",
  },
  {
    id: "spring",
    title: "Spring Boot",
    description: "Java 生态中最流行的框架，用于快速开发企业级应用",
    category: "后端框架",
    tags: ["Java", "企业级", "全功能"],
    url: "https://spring.io/projects/spring-boot",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/springboot.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mysql.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg",
    color: "#13AA52",
  },
  {
    id: "redis",
    title: "Redis",
    description: "内存数据结构存储，用于缓存、会话、消息队列等",
    category: "数据库",
    tags: ["NoSQL", "缓存", "内存"],
    url: "https://redis.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/redis.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/webpack.svg",
    color: "#8DD6F9",
  },
  {
    id: "vite",
    title: "Vite",
    description: "新一代前端构建工具，提供极速的开发体验",
    category: "构建工具",
    tags: ["打包工具", "快速", "现代"],
    url: "https://vitejs.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vite.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/esbuild.svg",
    color: "#FFCB45",
  },
  {
    id: "babel",
    title: "Babel",
    description: "JavaScript 编译器，将 modern JavaScript 转换为向后兼容的版本",
    category: "构建工具",
    tags: ["编译器", "JavaScript", "兼容性"],
    url: "https://babeljs.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/babel.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/npm.svg",
    color: "#CB3837",
  },
  {
    id: "yarn",
    title: "Yarn",
    description: "Facebook 开源的包管理器，提供更快 and 更可靠的依赖管理",
    category: "包管理器",
    tags: ["包管理", "Node.js", "快速"],
    url: "https://yarnpkg.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/yarn.svg",
    color: "#2C8EBB",
  },
  {
    id: "pnpm",
    title: "pnpm",
    description: "高效的包管理器，通过硬链接节省磁盘空间",
    category: "包管理器",
    tags: ["包管理", "高效", "现代"],
    url: "https://pnpm.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pnpm.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jest.svg",
    color: "#15C213",
  },
  {
    id: "vitest",
    title: "Vitest",
    description: "由 Vite 驱动的单元测试框架，极速且兼容 Jest",
    category: "测试框架",
    tags: ["测试", "快速", "Vite"],
    url: "https://vitest.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vitest.svg",
    color: "#6BD7A8",
  },
  {
    id: "pytest",
    title: "pytest",
    description: "Python 的测试框架，简单易用且功能强大",
    category: "测试框架",
    tags: ["测试", "Python", "单元测试"],
    url: "https://pytest.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pytest.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docusaurus.svg",
    color: "#1E90FF",
  },
  {
    id: "mkdocs",
    title: "MkDocs",
    description: "基于 Markdown 的文档生成工具，快速且易用",
    category: "文档工具",
    tags: ["文档", "Python", "Markdown"],
    url: "https://www.mkdocs.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mkdocs.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg",
    color: "#FFA500",
  },
  {
    id: "codeforces",
    title: "Codeforces",
    description: "竞技编程平台，定期举办编程竞赛",
    category: "练手网站",
    tags: ["竞技编程", "算法", "比赛"],
    url: "https://codeforces.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/codeforces.svg",
    color: "#1F1C1C",
  },
  {
    id: "hackerrank",
    title: "HackerRank",
    description: "编程练习和招聘平台，提供多种难度的题目",
    category: "练手网站",
    tags: ["编程", "练习", "招聘"],
    url: "https://www.hackerrank.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hackerrank.svg",
    color: "#2EC866",
  },
  {
    id: "codewars",
    title: "Codewars",
    description: "游戏化的编程学习平台，通过解题升级",
    category: "练手网站",
    tags: ["编程", "游戏化", "学习"],
    url: "https://www.codewars.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/codewars.svg",
    color: "#8B4513",
  },
  {
    id: "projecteuler",
    title: "Project Euler",
    description: "数学和编程问题集合，适合提升编程和数学能力",
    category: "练手网站",
    tags: ["数学", "算法", "编程"],
    url: "https://projecteuler.net",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/projecteuler.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/coursera.svg",
    color: "#0056D2",
  },
  {
    id: "udemy",
    title: "Udemy",
    description: "在线课程平台，提供数千门编程和技术课程",
    category: "学习平台",
    tags: ["在线学习", "课程", "实惠"],
    url: "https://www.udemy.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/udemy.svg",
    color: "#EC5252",
  },
  {
    id: "edx",
    title: "edX",
    description: "由 MIT 和伯克利创办的在线学习平台",
    category: "学习平台",
    tags: ["在线学习", "大学课程", "认证"],
    url: "https://www.edx.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/edx.svg",
    color: "#02262B",
  },
  {
    id: "w3schools",
    title: "W3Schools",
    description: "Web 开发教程网站，涵盖 HTML、CSS、JavaScript 等",
    category: "学习平台",
    tags: ["教程", "Web", "参考"],
    url: "https://www.w3schools.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/w3schools.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg",
    color: "#F24E1E",
  },
  {
    id: "sketch",
    title: "Sketch",
    description: "专业的 UI 设计工具，被广泛用于 Web 和应用设计",
    category: "设计工具",
    tags: ["设计", "UI", "Mac"],
    url: "https://www.sketch.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sketch.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg",
    color: "#FF6C37",
  },
  {
    id: "insomnia",
    title: "Insomnia",
    description: "轻量级的 API 客户端，用于测试和调试 API",
    category: "开发工具",
    tags: ["API", "测试", "轻量级"],
    url: "https://insomnia.rest",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/insomnia.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg",
    color: "#000000",
  },
  {
    id: "obsidian",
    title: "Obsidian",
    description: "本地优先的知识管理工具，支持 Markdown 和双向链接",
    category: "生产力工具",
    tags: ["笔记", "知识管理", "本地"],
    url: "https://obsidian.md",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/obsidian.svg",
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
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg",
    color: "#000000",
  },
  {
    id: "netlify",
    title: "Netlify",
    description: "现代 Web 应用的部署平台，支持静态网站和无服务器函数",
    category: "云平台",
    tags: ["部署", "前端", "无服务器"],
    url: "https://www.netlify.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/netlify.svg",
    color: "#00AD9F",
  },
  {
    id: "cloudflare",
    title: "Cloudflare",
    description: "全球网络平台，提供 CDN、安全、边缘计算和 Pages 部署",
    category: "云平台",
    tags: ["CDN", "安全", "部署", "边缘计算"],
    url: "https://www.cloudflare.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cloudflare.svg",
    color: "#F38020",
  },

  // --- 人工智能 ---
  {
    id: "chatgpt",
    title: "ChatGPT",
    description: "OpenAI 的旗舰对话大模型，写代码、写作、问答全能选手",
    category: "人工智能",
    tags: ["AI对话", "大模型", "全能"],
    url: "https://chatgpt.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg",
    color: "#10A37F"
  },
  {
    id: "claude",
    title: "Claude",
    description: "Anthropic 的对话 AI，长文本理解和代码能力突出",
    category: "人工智能",
    tags: ["AI对话", "大模型", "代码"],
    url: "https://claude.ai",
    color: "#D97757"
  },
  {
    id: "gemini",
    title: "Gemini",
    description: "Google 的多模态大模型，与搜索和办公生态深度整合",
    category: "人工智能",
    tags: ["AI对话", "大模型", "多模态"],
    url: "https://gemini.google.com",
    color: "#1A73E8"
  },
  {
    id: "deepseek",
    title: "DeepSeek",
    description: "国产高性价比大模型，推理能力强，API 价格实惠",
    category: "人工智能",
    tags: ["AI对话", "大模型", "推理"],
    url: "https://chat.deepseek.com",
    color: "#4D6BFE"
  },
  {
    id: "grok",
    title: "Grok",
    description: "xAI 的对话模型，实时联网获取最新信息，风格直接",
    category: "人工智能",
    tags: ["AI对话", "大模型", "联网"],
    url: "https://grok.com",
    color: "#000000"
  },
  {
    id: "perplexity",
    title: "Perplexity",
    description: "AI 搜索引擎，每个回答都附带可验证的引用来源",
    category: "人工智能",
    tags: ["AI搜索", "问答", "引用"],
    url: "https://www.perplexity.ai",
    color: "#20B8CD"
  },
  {
    id: "kimi",
    title: "Kimi",
    description: "月之暗面的智能助手，超长文本处理是强项",
    category: "人工智能",
    tags: ["AI对话", "长文本", "国产"],
    url: "https://kimi.moonshot.cn",
    color: "#000000"
  },
  {
    id: "midjourney",
    title: "Midjourney",
    description: "顶级的 AI 绘画工具，艺术质感和审美出众",
    category: "人工智能",
    tags: ["AI绘画", "作图", "艺术"],
    url: "https://www.midjourney.com",
    color: "#000000"
  },
  {
    id: "leonardo",
    title: "Leonardo AI",
    description: "AI 绘画与游戏资产生成平台，模型丰富可微调",
    category: "人工智能",
    tags: ["AI绘画", "游戏资产", "模型"],
    url: "https://leonardo.ai",
    color: "#7C3AED"
  },
  {
    id: "civitai",
    title: "Civitai",
    description: "AI 绘画模型分享社区，海量 Stable Diffusion 模型和 LoRA",
    category: "人工智能",
    tags: ["模型社区", "分享", "LoRA"],
    url: "https://civitai.com",
    color: "#0EA5E9"
  },
  {
    id: "runway",
    title: "Runway",
    description: "AI 视频生成与剪辑平台，Gen 系列模型持续领先",
    category: "人工智能",
    tags: ["AI视频", "生成", "剪辑"],
    url: "https://runwayml.com",
    color: "#000000"
  },
  {
    id: "pika",
    title: "Pika",
    description: "文生视频工具，几句话生成创意短片",
    category: "人工智能",
    tags: ["AI视频", "生成", "创意"],
    url: "https://pika.art",
    color: "#EC4899"
  },
  {
    id: "copilot",
    title: "Muse",
    description: "GitHub 的 AI 结对编程助手，补全代码又快又准",
    category: "人工智能",
    tags: ["代码补全", "编程", "AI"],
    url: "https://github.com/features/copilot",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "cursor",
    title: "Cursor",
    description: "AI 原生代码编辑器，Agent 式编程体验",
    category: "人工智能",
    tags: ["编辑器", "Agent", "编程"],
    url: "https://cursor.com",
    color: "#000000"
  },
  {
    id: "suno",
    title: "Suno",
    description: "AI 音乐生成，一句话描述就能写出一首歌",
    category: "人工智能",
    tags: ["AI音乐", "生成", "作曲"],
    url: "https://suno.com",
    color: "#000000"
  },
  {
    id: "elevenlabs",
    title: "ElevenLabs",
    description: "逼真的 AI 语音合成与声音克隆，支持多语言",
    category: "人工智能",
    tags: ["语音合成", "配音", "克隆"],
    url: "https://elevenlabs.io",
    color: "#000000"
  },
  {
    id: "ollama",
    title: "Ollama",
    description: "本地运行大模型，一条命令就能拉起 llama 等模型",
    category: "人工智能",
    tags: ["本地部署", "大模型", "开源"],
    url: "https://ollama.com",
    color: "#000000"
  },
  {
    id: "comfyui",
    title: "ComfyUI",
    description: "节点式 AI 绘画工作流，高度可定制，玩 Stable Diffusion 必备",
    category: "人工智能",
    tags: ["工作流", "节点", "开源"],
    url: "https://github.com/comfyanonymous/ComfyUI",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  }
,
  // --- 开源精选 ---
  {
    id: "n8n",
    title: "n8n",
    description: "开源工作流自动化平台，可视化编排定时任务、API 调用和 AI Agent，Make/Zapier 的免费自托管替代",
    category: "开源精选",
    tags: ["自动化", "工作流", "自托管"],
    url: "https://github.com/n8n-io/n8n",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#EA4B71"
  },
  {
    id: "dify",
    title: "Dify",
    description: "开源 LLM 应用开发平台，可视化编排 Agent、工作流和知识库，开箱即用的 AI 应用工厂",
    category: "开源精选",
    tags: ["AI应用", "Agent", "低代码"],
    url: "https://github.com/langgenius/dify",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#1C64F2"
  },
  {
    id: "flowise",
    title: "Flowise",
    description: "拖拽式 LLM 应用构建器，用节点连出聊天机器人和 Agent，最快把大模型变成可用产品",
    category: "开源精选",
    tags: ["AI应用", "拖拽", "Agent"],
    url: "https://github.com/FlowiseAI/Flowise",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#0EA5E9"
  },
  {
    id: "langchain",
    title: "LangChain",
    description: "最主流的 LLM 应用开发框架，链式调用、RAG、Agent 的标准件，做 AI 应用绕不开它",
    category: "开源精选",
    tags: ["开发框架", "RAG", "Agent"],
    url: "https://github.com/langchain-ai/langchain",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#1C3C3C"
  },
  {
    id: "textgen-webui",
    title: "text-generation-webui",
    description: "oobabooga 的大模型本地运行界面，点几下就能在自己电脑上跑各种开源模型",
    category: "开源精选",
    tags: ["本地部署", "大模型", "对话"],
    url: "https://github.com/oobabooga/text-generation-webui",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "localai",
    title: "LocalAI",
    description: "本地 OpenAI 兼容 API，一套接口同时跑文本、语音、图像生成，旧电脑也能变 AI 服务器",
    category: "开源精选",
    tags: ["本地部署", "API兼容", "多模态"],
    url: "https://github.com/mudler/LocalAI",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "cherry-studio",
    title: "Cherry Studio",
    description: "颜值最高的 AI 对话客户端，支持 30+ 模型服务商，知识库、AI 绘画、翻译全都有",
    category: "开源精选",
    tags: ["客户端", "多模型", "知识库"],
    url: "https://github.com/CherryHQ/cherry-studio",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#FF8C00"
  },
  {
    id: "sd-webui",
    title: "stable-diffusion-webui",
    description: "AUTOMATIC1111 的 SD 出图界面，AI 绘画事实标准，插件生态最全，玩法最多",
    category: "开源精选",
    tags: ["AI绘画", "本地部署", "插件"],
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "invokeai",
    title: "InvokeAI",
    description: "更现代的 Stable Diffusion 创作套件，节点式工作流，出图、管理和模型训练一条龙",
    category: "开源精选",
    tags: ["AI绘画", "工作流", "创作"],
    url: "https://github.com/invoke-ai/InvokeAI",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#7C3AED"
  },
  {
    id: "uptime-kuma",
    title: "Uptime Kuma",
    description: "漂亮的开源站点监控，服务挂了第一时间推送告警，自托管 5 分钟搞定",
    category: "开源精选",
    tags: ["监控", "告警", "自托管"],
    url: "https://github.com/louislam/uptime-kuma",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#5CDD8B"
  },
  {
    id: "umami",
    title: "Umami",
    description: "轻量隐私友好的网站统计，Google Analytics 的平替，不用弹 Cookie 横幅",
    category: "开源精选",
    tags: ["统计分析", "隐私", "轻量"],
    url: "https://github.com/umami-software/umami",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "listmonk",
    title: "listmonk",
    description: "自托管邮件营销系统，Newsletter 和用户群发一站式，配合 SES 发信成本极低",
    category: "开源精选",
    tags: ["邮件营销", "群发", "自托管"],
    url: "https://github.com/knadh/listmonk",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#0EA5E9"
  },
  {
    id: "hoppscotch",
    title: "Hoppscotch",
    description: "开源 Postman 替代，浏览器里直接调试 API，轻快无登录墙",
    category: "开源精选",
    tags: ["API调试", "测试", "轻量"],
    url: "https://github.com/hoppscotch/hoppscotch",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#09090B"
  },
  {
    id: "appflowy",
    title: "AppFlowy",
    description: "开源 Notion 平替，笔记、看板、日历全有，数据存在自己手里不怕跑路",
    category: "开源精选",
    tags: ["笔记", "协作", "隐私"],
    url: "https://github.com/AppFlowy-IO/AppFlowy",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#FF6B62"
  },
  {
    id: "affine",
    title: "AFFiNE",
    description: "下一代知识库，白板+文档+数据库三合一，Notion 和 Miro 的开源结合体",
    category: "开源精选",
    tags: ["知识库", "白板", "文档"],
    url: "https://github.com/toeverything/AFFiNE",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#1E96EB"
  },
  {
    id: "logseq",
    title: "Logseq",
    description: "本地优先的双链笔记，隐私拉满，知识管理重度用户的选择",
    category: "开源精选",
    tags: ["笔记", "双链", "本地"],
    url: "https://github.com/logseq/logseq",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#85C8C8"
  },
  {
    id: "yt-dlp",
    title: "yt-dlp",
    description: "命令行视频下载神器，YouTube、B 站等上千站点通吃，清晰度任选",
    category: "开源精选",
    tags: ["下载", "视频", "命令行"],
    url: "https://github.com/yt-dlp/yt-dlp",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "medusa",
    title: "Medusa",
    description: "开源电商系统，Shopify 的自托管替代，API 优先方便二次开发",
    category: "开源精选",
    tags: ["电商", "建站", "API"],
    url: "https://github.com/medusajs/medusa",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#7C3AED"
  }
,
  // --- 全栈开发补完 ---
  {
    id: "nextjs",
    title: "Next.js",
    description: "React 全栈框架，SSR/SSG 开箱即用，Vercel 亲儿子，做 React 项目首选",
    category: "前端框架",
    tags: ["React", "SSR", "全能"],
    url: "https://nextjs.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg",
    color: "#000000"
  },
  {
    id: "nuxt",
    title: "Nuxt",
    description: "Vue 全栈框架，约定式路由+自动导入，Vue 生态的 Next.js",
    category: "前端框架",
    tags: ["Vue", "SSR", "全能"],
    url: "https://nuxt.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nuxtdotjs.svg",
    color: "#00DC82"
  },
  {
    id: "astro",
    title: "Astro",
    description: "群岛架构的静态站点框架，只给交互部分发 JS，快得离谱",
    category: "前端框架",
    tags: ["静态站点", "性能", "群岛"],
    url: "https://astro.build",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/astro.svg",
    color: "#FF5D01"
  },
  {
    id: "solidjs",
    title: "SolidJS",
    description: "细粒度响应的前端框架，React 写法、原生 DOM 性能",
    category: "前端框架",
    tags: ["响应式", "性能", "类React"],
    url: "https://www.solidjs.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#2C4F7C"
  },
  {
    id: "qwik",
    title: "Qwik",
    description: "可恢复性前端框架，首屏零 JS hydration，性能天花板",
    category: "前端框架",
    tags: ["性能", "SSR", "创新"],
    url: "https://qwik.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#AC7EF4"
  },
  {
    id: "remix",
    title: "Remix",
    description: "拥抱 Web 标准的 React 全栈框架，表单+嵌套路由是灵魂",
    category: "前端框架",
    tags: ["React", "全栈", "Web标准"],
    url: "https://remix.run",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "preact",
    title: "Preact",
    description: "3KB 的 React 替代品，API 兼容，嵌入小部件和轻量场景神器",
    category: "前端框架",
    tags: ["轻量", "兼容React", "小体积"],
    url: "https://preactjs.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/preact.svg",
    color: "#673AB8"
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    description: "原子化 CSS 框架，类名即样式，快速堆出好看页面的标配",
    category: "前端框架",
    tags: ["CSS", "原子化", "样式"],
    url: "https://tailwindcss.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg",
    color: "#06B6D4"
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    description: "最经典的 CSS 组件库，栅格+组件一把梭，管理后台速成",
    category: "前端框架",
    tags: ["CSS", "组件库", "响应式"],
    url: "https://getbootstrap.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bootstrap.svg",
    color: "#7952B3"
  },
  {
    id: "sass",
    title: "Sass",
    description: "CSS 预处理器，变量嵌套 mixin，大型样式表的组织方式",
    category: "前端框架",
    tags: ["CSS", "预处理", "样式"],
    url: "https://sass-lang.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sass.svg",
    color: "#CC6699"
  },
  {
    id: "nestjs",
    title: "NestJS",
    description: "Node.js 企业级框架，装饰器+模块化，TypeScript 后端的 Spring",
    category: "后端框架",
    tags: ["Node.js", "TypeScript", "企业级"],
    url: "https://nestjs.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nestjs.svg",
    color: "#E0234E"
  },
  {
    id: "fastify",
    title: "Fastify",
    description: "高性能 Node.js 框架，Schema 校验内置，比 Express 快数倍",
    category: "后端框架",
    tags: ["Node.js", "高性能", "API"],
    url: "https://fastify.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastify.svg",
    color: "#000000"
  },
  {
    id: "koa",
    title: "Koa",
    description: "Express 原班人马的下一代，洋葱圈中间件，小而美",
    category: "后端框架",
    tags: ["Node.js", "中间件", "轻量"],
    url: "https://koajs.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/koa.svg",
    color: "#33333D"
  },
  {
    id: "flask",
    title: "Flask",
    description: "Python 微框架，一文件起服务，原型验证最快的一条路",
    category: "后端框架",
    tags: ["Python", "微框架", "轻量"],
    url: "https://flask.palletsprojects.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/flask.svg",
    color: "#000000"
  },
  {
    id: "gin",
    title: "Gin",
    description: "Go 最流行的 Web 框架，路由快、中间件全，API 服务标配",
    category: "后端框架",
    tags: ["Go", "高性能", "API"],
    url: "https://gin-gonic.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#00ADD8"
  },
  {
    id: "fiber",
    title: "Fiber",
    description: "Go 的 Express 风格框架，基于 Fasthttp，性能怪兽",
    category: "后端框架",
    tags: ["Go", "高性能", "类Express"],
    url: "https://gofiber.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "laravel",
    title: "Laravel",
    description: "PHP 王者框架，优雅语法+全家桶，单人全栈接单利器",
    category: "后端框架",
    tags: ["PHP", "全栈", "优雅"],
    url: "https://laravel.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/laravel.svg",
    color: "#FF2D20"
  },
  {
    id: "rails",
    title: "Ruby on Rails",
    description: "全栈鼻祖，约定大于配置，独立开发快速上线神器",
    category: "后端框架",
    tags: ["Ruby", "全栈", "快速开发"],
    url: "https://rubyonrails.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rubyonrails.svg",
    color: "#CC0000"
  },
  {
    id: "hono",
    title: "Hono",
    description: "超轻量 Web 框架，跑在任何 JS 运行时，边缘计算首选",
    category: "后端框架",
    tags: ["JS运行时", "边缘", "轻量"],
    url: "https://hono.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "dotnet",
    title: "ASP.NET Core",
    description: "微软跨平台后端框架，高性能+强类型，企业级首选",
    category: "后端框架",
    tags: ["C#", "跨平台", "企业级"],
    url: "https://dotnet.microsoft.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dotnet.svg",
    color: "#512BD4"
  },
  {
    id: "sqlite",
    title: "SQLite",
    description: "零配置嵌入式数据库，单文件跑全栈，小项目和本地开发神器",
    category: "数据库",
    tags: ["嵌入式", "轻量", "零配置"],
    url: "https://www.sqlite.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sqlite.svg",
    color: "#003B57"
  },
  {
    id: "supabase",
    title: "Supabase",
    description: "开源 Firebase 替代，Postgres+鉴权+存储，开箱即用的后端",
    category: "数据库",
    tags: ["BaaS", "Postgres", "开源"],
    url: "https://supabase.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/supabase.svg",
    color: "#3ECF8E"
  },
  {
    id: "prisma",
    title: "Prisma",
    description: "Node.js 下一代 ORM，类型安全的数据库访问，DX 拉满",
    category: "数据库",
    tags: ["ORM", "TypeScript", "类型安全"],
    url: "https://www.prisma.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/prisma.svg",
    color: "#2D3748"
  },
  {
    id: "drizzle",
    title: "Drizzle ORM",
    description: "轻量 TypeScript ORM，SQL 味浓、体积小，Prisma 的轻量替代",
    category: "数据库",
    tags: ["ORM", "TypeScript", "轻量"],
    url: "https://orm.drizzle.team",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#C5F74F"
  },
  {
    id: "planetscale",
    title: "PlanetScale",
    description: "Serverless MySQL 平台，分支式 schema 变更，像用 Git 管数据库",
    category: "数据库",
    tags: ["MySQL", "Serverless", "分支"],
    url: "https://planetscale.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/planetscale.svg",
    color: "#000000"
  },
  {
    id: "neon",
    title: "Neon",
    description: "Serverless Postgres，秒级分支、自动休眠，开发体验极佳",
    category: "数据库",
    tags: ["Postgres", "Serverless", "分支"],
    url: "https://neon.tech",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#00E599"
  },
  {
    id: "elasticsearch",
    title: "Elasticsearch",
    description: "分布式搜索与分析引擎，全文检索、日志分析的事实标准",
    category: "数据库",
    tags: ["搜索", "日志", "分布式"],
    url: "https://www.elastic.co",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/elasticsearch.svg",
    color: "#005571"
  },
  {
    id: "firebase",
    title: "Firebase",
    description: "Google 一站式后端，鉴权数据库推送全包，独立开发快速起盘",
    category: "数据库",
    tags: ["BaaS", "Google", "全包"],
    url: "https://firebase.google.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/firebase.svg",
    color: "#FFCA28"
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "带类型的 JavaScript，大型项目标配， Bug 在编译期现形",
    category: "开发工具",
    tags: ["语言", "类型安全", "前端"],
    url: "https://www.typescriptlang.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg",
    color: "#3178C6"
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Web 的语言，前后端通吃，生态最大没有之一",
    category: "开发工具",
    tags: ["语言", "Web", "生态"],
    url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg",
    color: "#F7DF1E"
  },
  {
    id: "python",
    title: "Python",
    description: "胶水语言之王，AI/数据/后端全都要会一点",
    category: "开发工具",
    tags: ["语言", "AI", "后端"],
    url: "https://www.python.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg",
    color: "#3776AB"
  },
  {
    id: "go",
    title: "Go",
    description: "云原生时代的语言，简单高效，并发模型漂亮",
    category: "开发工具",
    tags: ["语言", "云原生", "并发"],
    url: "https://go.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/go.svg",
    color: "#00ADD8"
  },
  {
    id: "rust",
    title: "Rust",
    description: "内存安全无 GC，性能拉满，系统编程和 WebAssembly 的未来",
    category: "开发工具",
    tags: ["语言", "性能", "内存安全"],
    url: "https://www.rust-lang.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg",
    color: "#000000"
  },
  {
    id: "java",
    title: "Java",
    description: "企业级老炮，生态深不见底，Spring 全家桶的家",
    category: "开发工具",
    tags: ["语言", "企业级", "生态"],
    url: "https://www.java.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#ED8B00"
  },
  {
    id: "php",
    title: "PHP",
    description: "Web 常青树，Laravel 加持下依然是接单赚钱利器",
    category: "开发工具",
    tags: ["语言", "Web", "接单"],
    url: "https://www.php.net",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/php.svg",
    color: "#777BB4"
  },
  {
    id: "ruby",
    title: "Ruby",
    description: "优雅的脚本语言，Rails 让它成为全栈神器",
    category: "开发工具",
    tags: ["语言", "优雅", "全栈"],
    url: "https://www.ruby-lang.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ruby.svg",
    color: "#CC342D"
  },
  {
    id: "csharp",
    title: "C#",
    description: "微软亲儿子，.NET/Unity 通吃，强类型开发体验一流",
    category: "开发工具",
    tags: ["语言", ".NET", "强类型"],
    url: "https://learn.microsoft.com/dotnet/csharp",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#239120"
  },
  {
    id: "kotlin",
    title: "Kotlin",
    description: "Android 官方语言，比 Java 爽十倍，也能写后端",
    category: "开发工具",
    tags: ["语言", "Android", "现代"],
    url: "https://kotlinlang.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kotlin.svg",
    color: "#7F52FF"
  },
  {
    id: "swift",
    title: "Swift",
    description: "苹果全家桶语言，iOS/macOS 开发唯一真神",
    category: "开发工具",
    tags: ["语言", "iOS", "苹果"],
    url: "https://www.swift.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/swift.svg",
    color: "#F05138"
  },
  {
    id: "dart",
    title: "Dart",
    description: "Flutter 的语言，一套代码跑全端",
    category: "开发工具",
    tags: ["语言", "Flutter", "跨端"],
    url: "https://dart.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dart.svg",
    color: "#0175C2"
  },
  {
    id: "docker",
    title: "Docker",
    description: "容器化标配，打包一次到处运行，部署烦恼终结者",
    category: "开发工具",
    tags: ["容器", "部署", "标准化"],
    url: "https://www.docker.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg",
    color: "#2496ED"
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    description: "容器编排事实标准，生产级调度的必修课",
    category: "开发工具",
    tags: ["容器", "编排", "生产级"],
    url: "https://kubernetes.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg",
    color: "#326CE5"
  },
  {
    id: "trpc",
    title: "tRPC",
    description: "前后端类型共享的 API 方案，写 TS 全栈不用再对接口",
    category: "开发工具",
    tags: ["API", "类型安全", "全栈"],
    url: "https://trpc.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trpc.svg",
    color: "#2596BE"
  },
  {
    id: "graphql",
    title: "GraphQL",
    description: "Meta 出品的查询语言，一次请求拿全数据，前端自由",
    category: "开发工具",
    tags: ["API", "查询语言", "灵活"],
    url: "https://graphql.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/graphql.svg",
    color: "#E10098"
  },
  {
    id: "yeoman",
    title: "Yeoman",
    description: "老牌脚手架工具，海量 generator，一键生成项目骨架",
    category: "开发工具",
    tags: ["脚手架", "生成器", "效率"],
    url: "https://yeoman.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/yeoman.svg",
    color: "#000000"
  },
  {
    id: "bruno",
    title: "Bruno",
    description: "开源 API 客户端新贵，Postman 平替，请求文件可进 Git",
    category: "开发工具",
    tags: ["API", "测试", "开源"],
    url: "https://www.usebruno.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "rollup",
    title: "Rollup",
    description: "JS 库打包首选，Tree-shaking 标杆，Vite 底层功臣",
    category: "构建工具",
    tags: ["打包", "库", "TreeShaking"],
    url: "https://rollupjs.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rollupdotjs.svg",
    color: "#EC4A3F"
  },
  {
    id: "swc",
    title: "SWC",
    description: "Rust 写的 JS/TS 编译器，比 Babel 快 20 倍",
    category: "构建工具",
    tags: ["编译", "Rust", "极速"],
    url: "https://swc.rs",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "turborepo",
    title: "Turborepo",
    description: "JS monorepo 构建编排，缓存拉满，Vercel 出品",
    category: "构建工具",
    tags: ["Monorepo", "缓存", "构建"],
    url: "https://turbo.build",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/turborepo.svg",
    color: "#EF4444"
  },
  {
    id: "nx",
    title: "Nx",
    description: "企业级 monorepo 方案，Angular 团队出品，功能最全",
    category: "构建工具",
    tags: ["Monorepo", "企业级", "构建"],
    url: "https://nx.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nx.svg",
    color: "#143055"
  },
  {
    id: "parcel",
    title: "Parcel",
    description: "零配置打包工具，开箱即用，小项目最快上手",
    category: "构建工具",
    tags: ["打包", "零配置", "简单"],
    url: "https://parceljs.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "tsup",
    title: "tsup",
    description: "基于 esbuild 的 TS 库打包器，配置极简，库作者最爱",
    category: "构建工具",
    tags: ["打包", "TS", "库"],
    url: "https://tsup.egoist.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "bun",
    title: "Bun",
    description: "Zig 写的 JS 全能运行时，包管理+打包+运行，快得不讲道理",
    category: "包管理器",
    tags: ["运行时", "极速", "全能"],
    url: "https://bun.sh",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bun.svg",
    color: "#000000"
  },
  {
    id: "pip",
    title: "pip",
    description: "Python 官方包管理器，装库一行命令",
    category: "包管理器",
    tags: ["Python", "官方", "基础"],
    url: "https://pip.pypa.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "uv",
    title: "uv",
    description: "Rust 写的 Python 包管理器，比 pip 快 10-100 倍",
    category: "包管理器",
    tags: ["Python", "极速", "Rust"],
    url: "https://github.com/astral-sh/uv",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "cargo",
    title: "Cargo",
    description: "Rust 官方包管理+构建，一条命令管全套",
    category: "包管理器",
    tags: ["Rust", "官方", "构建"],
    url: "https://doc.rust-lang.org/cargo",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "maven",
    title: "Maven",
    description: "Java 老牌构建+依赖管理，Spring 项目的标配",
    category: "包管理器",
    tags: ["Java", "构建", "依赖"],
    url: "https://maven.apache.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachemaven.svg",
    color: "#C71A36"
  },
  {
    id: "gradle",
    title: "Gradle",
    description: "JVM 新一代构建工具，Android 官方构建系统",
    category: "包管理器",
    tags: ["JVM", "Android", "构建"],
    url: "https://gradle.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gradle.svg",
    color: "#02303A"
  },
  {
    id: "composer",
    title: "Composer",
    description: "PHP 依赖管理器，Laravel 生态的基石",
    category: "包管理器",
    tags: ["PHP", "依赖", "生态"],
    url: "https://getcomposer.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/composer.svg",
    color: "#885630"
  },
  {
    id: "playwright",
    title: "Playwright",
    description: "微软 E2E 测试框架，多浏览器并行，又快又稳",
    category: "测试框架",
    tags: ["E2E", "自动化", "多浏览器"],
    url: "https://playwright.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/playwright.svg",
    color: "#2EAD33"
  },
  {
    id: "cypress",
    title: "Cypress",
    description: "前端 E2E 测试标杆，实时重载看测试跑，DX 极佳",
    category: "测试框架",
    tags: ["E2E", "前端", "可视化"],
    url: "https://www.cypress.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cypress.svg",
    color: "#17202C"
  },
  {
    id: "testing-library",
    title: "Testing Library",
    description: "以用户视角写前端测试，React/Vue 通用",
    category: "测试框架",
    tags: ["单元测试", "前端", "用户视角"],
    url: "https://testing-library.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/testinglibrary.svg",
    color: "#E33332"
  },
  {
    id: "mocha",
    title: "Mocha",
    description: "Node.js 老牌测试框架，灵活可配，生态丰富",
    category: "测试框架",
    tags: ["单元测试", "Node.js", "灵活"],
    url: "https://mochajs.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mocha.svg",
    color: "#8D6748"
  },
  {
    id: "k6",
    title: "k6",
    description: "开源负载测试，JS 写脚本，API 压测一把好手",
    category: "测试框架",
    tags: ["压测", "性能", "API"],
    url: "https://k6.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/k6.svg",
    color: "#7D64FF"
  },
  {
    id: "junit",
    title: "JUnit",
    description: "Java 单元测试事实标准，TDD 的起点",
    category: "测试框架",
    tags: ["单元测试", "Java", "标准"],
    url: "https://junit.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/junit5.svg",
    color: "#25A162"
  },
  {
    id: "gitea",
    title: "Gitea",
    description: "轻量自托管 Git 服务，一台小鸡就能跑的 GitHub 平替",
    category: "版本控制",
    tags: ["Git", "自托管", "轻量"],
    url: "https://gitea.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gitea.svg",
    color: "#609926"
  },
  {
    id: "bitbucket",
    title: "Bitbucket",
    description: "Atlassian 的 Git 仓库，与 Jira 联动丝滑",
    category: "版本控制",
    tags: ["Git", "Atlassian", "协作"],
    url: "https://bitbucket.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bitbucket.svg",
    color: "#0052CC"
  },
  {
    id: "railway",
    title: "Railway",
    description: "新一代 PaaS，git push 即部署，独立开发最爱",
    category: "云平台",
    tags: ["PaaS", "部署", "简单"],
    url: "https://railway.app",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/railway.svg",
    color: "#000000"
  },
  {
    id: "render",
    title: "Render",
    description: "Heroku 精神续作，免费额度良心，全栈一键上线",
    category: "云平台",
    tags: ["PaaS", "免费", "部署"],
    url: "https://render.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg",
    color: "#000000"
  },
  {
    id: "flyio",
    title: "Fly.io",
    description: "全球边缘部署，Docker 镜像秒变全球服务",
    category: "云平台",
    tags: ["边缘", "Docker", "全球"],
    url: "https://fly.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#7C3AED"
  },
  {
    id: "vitepress",
    title: "VitePress",
    description: "Vue 团队的静态文档站，写文档又快又好看",
    category: "文档工具",
    tags: ["文档", "静态站", "Vue"],
    url: "https://vitepress.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vitepress.svg",
    color: "#5C73E7"
  },
  {
    id: "storybook",
    title: "Storybook",
    description: "前端组件工作坊，独立开发调试 UI 组件",
    category: "文档工具",
    tags: ["组件", "UI", "调试"],
    url: "https://storybook.js.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/storybook.svg",
    color: "#FF4785"
  }
];

export const categories = [...new Set(toolsData.map((tool) => tool.category))].sort();