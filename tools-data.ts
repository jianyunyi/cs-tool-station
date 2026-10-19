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
  category: string;      // 一级分类 (领域)
  subcategory: string;   // 二级分类 (功能)
  tags: string[];
  url: string;
  icon?: string;
  color?: string;
  versions?: ToolVersion[];
}

export const CATEGORY_MAP: Record<string, { label: string; subcategories: string[] }> = {
  "cs": {
    label: "计算机/软件",
    subcategories: ["编辑器/IDE", "前端框架", "后端开发", "数据库", "版本控制", "开发辅助"]
  },
  "ops": {
    label: "运维/部署",
    subcategories: ["容器化", "云原生", "远程连接", "监控日志", "网络工具"]
  },
  "security": {
    label: "网络安全",
    subcategories: ["渗透测试", "流量分析", "安全加固", "密码学"]
  },
  "engineering": {
    label: "工科专业",
    subcategories: ["电子/电气", "机械/工业", "土木/建筑", "化学/材料", "工程仿真"]
  },
  "finance": {
    label: "金融/财会",
    subcategories: ["金融终端", "量化交易", "数据分析"]
  },
  "design": {
    label: "设计/传媒",
    subcategories: ["UI/UX设计", "3D建模/动画", "平面/视频编辑"]
  },
  "business": {
    label: "商业/管理",
    subcategories: ["BI分析", "管理模型", "办公协同"]
  },
  "resources": {
    label: "资源/练手",
    subcategories: ["数据集/竞赛", "开源资源", "学习社区"]
  }
,
  "ai": {
    label: "人工智能",
    subcategories: ["大模型/对话", "图像生成", "视频生成", "编程辅助", "音频/语音", "本地部署"]
  }
};

export const toolsData: Tool[] = [
  // --- 计算机与软件工程 ---
  {
    id: "vscode",
    title: "Visual Studio Code",
    description: "轻量级、功能强大的代码编辑器，支持多种编程语言和扩展",
    category: "cs",
    subcategory: "编辑器/IDE",
    tags: ["编辑器", "IDE", "开源"],
    url: "https://code.visualstudio.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visualstudiocode.svg",
    color: "#007ACC",
    versions: [
      {
        version: "1.85.1",
        releaseDate: "2023-12-13",
        downloadUrl: "https://code.visualstudio.com/updates/v1_85",
        platform: ["Windows", "macOS", "Linux"]
      }
    ]
  },
  {
    id: "apifox",
    title: "Apifox",
    description: "API 设计、开发、测试、管理一体化平台，Postman 的完美替代品",
    category: "cs",
    subcategory: "开发辅助",
    tags: ["API", "测试", "文档"],
    url: "https://apifox.com",
    color: "#FF3C2F"
  },
  {
    id: "postman",
    title: "Postman",
    description: "全球领先的 API 开发协作平台",
    category: "cs",
    subcategory: "开发辅助",
    tags: ["API", "调试", "协作"],
    url: "https://www.postman.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg",
    color: "#FF6C37"
  },

  // --- 运维/部署 (新增) ---
  {
    id: "docker",
    title: "Docker",
    description: "开源的应用容器引擎，让开发者可以打包应用及其依赖包到一个可移植的容器中",
    category: "ops",
    subcategory: "容器化",
    tags: ["容器", "虚拟化", "DevOps"],
    url: "https://www.docker.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg",
    color: "#2496ED"
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    description: "生产级别的容器编排系统，用于自动化部署、扩展和管理容器化应用",
    category: "ops",
    subcategory: "云原生",
    tags: ["K8s", "编排", "集群"],
    url: "https://kubernetes.io",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg",
    color: "#326CE5"
  },
  {
    id: "termius",
    title: "Termius",
    description: "跨平台的 SSH 客户端，支持多端同步和团队协作",
    category: "ops",
    subcategory: "远程连接",
    tags: ["SSH", "运维", "远程"],
    url: "https://termius.com",
    color: "#EB5424"
  },

  // --- 网络安全 (新增) ---
  {
    id: "wireshark",
    title: "Wireshark",
    description: "世界上最广泛使用的网络协议分析器",
    category: "security",
    subcategory: "流量分析",
    tags: ["抓包", "网络", "分析"],
    url: "https://www.wireshark.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/wireshark.svg",
    color: "#1679A7"
  },
  {
    id: "burpsuite",
    title: "Burp Suite",
    description: "Web 应用程序安全测试的最佳工具集",
    category: "security",
    subcategory: "渗透测试",
    tags: ["Web安全", "渗透", "测试"],
    url: "https://portswigger.net/burp",
    color: "#FF6633"
  },

  // --- 商业/管理 (办公协同) ---
  {
    id: "notion",
    title: "Notion",
    description: "集笔记、任务、数据库于一体的数字化工作空间",
    category: "business",
    subcategory: "办公协同",
    tags: ["笔记", "协作", "生产力"],
    url: "https://www.notion.so",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg",
    color: "#000000"
  },
  {
    id: "obsidian",
    title: "Obsidian",
    description: "基于本地 Markdown 文件的强大知识库管理工具",
    category: "business",
    subcategory: "办公协同",
    tags: ["知识库", "双链", "Markdown"],
    url: "https://obsidian.md",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/obsidian.svg",
    color: "#483699"
  },

  // --- 工科专业 (保留) ---
  {
    id: "altium",
    title: "Altium Designer",
    description: "全球领先的 PCB 设计软件，提供一体化的设计环境",
    category: "engineering",
    subcategory: "电子/电气",
    tags: ["PCB设计", "硬件", "EDA"],
    url: "https://www.altium.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/altiumdesigner.svg",
    color: "#A52019"
  },
  {
    id: "matlab",
    title: "MATLAB",
    description: "用于数值计算、可视化和编程的高级语言 and 交互式环境",
    category: "engineering",
    subcategory: "工程仿真",
    tags: ["数值计算", "算法开发", "全能"],
    url: "https://www.mathworks.com/products/matlab.html",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mathworks.svg",
    color: "#ED1C24"
  },

  // --- 金融/量化 ---
  {
    id: "wind",
    title: "Wind 万得终端",
    description: "中国领先的金融数据和分析工具",
    category: "finance",
    subcategory: "金融终端",
    tags: ["金融数据", "投行", "分析"],
    url: "https://www.wind.com.cn",
    color: "#004B87"
  },

  // --- 设计/传媒 ---
  {
    id: "figma",
    title: "Figma",
    description: "基于浏览器的协作式设计工具，广泛用于 UI/UX 设计",
    category: "design",
    subcategory: "UI/UX设计",
    tags: ["UI设计", "协作", "矢量"],
    url: "https://www.figma.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg",
    color: "#F24E1E"
  },

  // --- 资源/练手 ---
  {
    id: "kaggle",
    title: "Kaggle",
    description: "全球最大的数据科学竞赛和资源平台",
    category: "resources",
    subcategory: "数据集/竞赛",
    tags: ["数据集", "竞赛", "数据科学"],
    url: "https://www.kaggle.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kaggle.svg",
    color: "#20BEFF"
  }
  // --- 人工智能 ---
  {
    id: "chatgpt",
    title: "ChatGPT",
    description: "OpenAI 的旗舰对话大模型，写代码、写作、问答全能选手",
    category: "ai",
    subcategory: "大模型/对话",
    tags: ["对话", "大模型", "全能"],
    url: "https://chatgpt.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg",
    color: "#10A37F"
  },
  {
    id: "claude",
    title: "Claude",
    description: "Anthropic 的对话 AI，长文本理解和代码能力突出",
    category: "ai",
    subcategory: "大模型/对话",
    tags: ["对话", "大模型", "代码"],
    url: "https://claude.ai",
    color: "#D97757"
  },
  {
    id: "gemini",
    title: "Gemini",
    description: "Google 的多模态大模型，与搜索和办公生态深度整合",
    category: "ai",
    subcategory: "大模型/对话",
    tags: ["对话", "大模型", "多模态"],
    url: "https://gemini.google.com",
    color: "#1A73E8"
  },
  {
    id: "deepseek",
    title: "DeepSeek",
    description: "国产高性价比大模型，推理能力强，API 价格实惠",
    category: "ai",
    subcategory: "大模型/对话",
    tags: ["对话", "大模型", "推理"],
    url: "https://chat.deepseek.com",
    color: "#4D6BFE"
  },
  {
    id: "grok",
    title: "Grok",
    description: "xAI 的对话模型，实时联网获取最新信息，风格直接",
    category: "ai",
    subcategory: "大模型/对话",
    tags: ["对话", "大模型", "联网"],
    url: "https://grok.com",
    color: "#000000"
  },
  {
    id: "perplexity",
    title: "Perplexity",
    description: "AI 搜索引擎，每个回答都附带可验证的引用来源",
    category: "ai",
    subcategory: "大模型/对话",
    tags: ["搜索", "问答", "引用"],
    url: "https://www.perplexity.ai",
    color: "#20B8CD"
  },
  {
    id: "kimi",
    title: "Kimi",
    description: "月之暗面的智能助手，超长文本处理是强项",
    category: "ai",
    subcategory: "大模型/对话",
    tags: ["对话", "长文本", "国产"],
    url: "https://kimi.moonshot.cn",
    color: "#000000"
  },
  {
    id: "midjourney",
    title: "Midjourney",
    description: "顶级的 AI 绘画工具，艺术质感和审美出众",
    category: "ai",
    subcategory: "图像生成",
    tags: ["绘画", "AI作图", "艺术"],
    url: "https://www.midjourney.com",
    color: "#000000"
  },
  {
    id: "leonardo",
    title: "Leonardo AI",
    description: "AI 绘画与游戏资产生成平台，模型丰富可微调",
    category: "ai",
    subcategory: "图像生成",
    tags: ["绘画", "游戏资产", "模型"],
    url: "https://leonardo.ai",
    color: "#7C3AED"
  },
  {
    id: "civitai",
    title: "Civitai",
    description: "AI 绘画模型分享社区，海量 Stable Diffusion 模型和 LoRA",
    category: "ai",
    subcategory: "图像生成",
    tags: ["模型社区", "分享", "LoRA"],
    url: "https://civitai.com",
    color: "#0EA5E9"
  },
  {
    id: "runway",
    title: "Runway",
    description: "AI 视频生成与剪辑平台，Gen 系列模型持续领先",
    category: "ai",
    subcategory: "视频生成",
    tags: ["视频", "生成", "剪辑"],
    url: "https://runwayml.com",
    color: "#000000"
  },
  {
    id: "pika",
    title: "Pika",
    description: "文生视频工具，几句话生成创意短片",
    category: "ai",
    subcategory: "视频生成",
    tags: ["视频", "生成", "创意"],
    url: "https://pika.art",
    color: "#EC4899"
  },
  {
    id: "copilot",
    title: "Muse",
    description: "GitHub 的 AI 结对编程助手，补全代码又快又准",
    category: "ai",
    subcategory: "编程辅助",
    tags: ["代码补全", "编程", "AI"],
    url: "https://github.com/features/copilot",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  },
  {
    id: "cursor",
    title: "Cursor",
    description: "AI 原生代码编辑器，Agent 式编程体验",
    category: "ai",
    subcategory: "编程辅助",
    tags: ["编辑器", "Agent", "编程"],
    url: "https://cursor.com",
    color: "#000000"
  },
  {
    id: "suno",
    title: "Suno",
    description: "AI 音乐生成，一句话描述就能写出一首歌",
    category: "ai",
    subcategory: "音频/语音",
    tags: ["音乐", "生成", "作曲"],
    url: "https://suno.com",
    color: "#000000"
  },
  {
    id: "elevenlabs",
    title: "ElevenLabs",
    description: "逼真的 AI 语音合成与声音克隆，支持多语言",
    category: "ai",
    subcategory: "音频/语音",
    tags: ["语音合成", "配音", "克隆"],
    url: "https://elevenlabs.io",
    color: "#000000"
  },
  {
    id: "ollama",
    title: "Ollama",
    description: "本地运行大模型，一条命令就能拉起 llama 等模型",
    category: "ai",
    subcategory: "本地部署",
    tags: ["本地", "大模型", "开源"],
    url: "https://ollama.com",
    color: "#000000"
  },
  {
    id: "comfyui",
    title: "ComfyUI",
    description: "节点式 AI 绘画工作流，高度可定制，玩 Stable Diffusion 必备",
    category: "ai",
    subcategory: "本地部署",
    tags: ["工作流", "节点", "开源"],
    url: "https://github.com/comfyanonymous/ComfyUI",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#000000"
  }
];