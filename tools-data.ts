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
    id: "react",
    title: "React",
    description: "用于构建用户界面的 JavaScript 库",
    category: "cs",
    subcategory: "前端框架",
    tags: ["前端", "JavaScript", "UI"],
    url: "https://react.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg",
    color: "#61DAFB"
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "基于 Chrome V8 引擎的 JavaScript 运行时",
    category: "cs",
    subcategory: "后端开发",
    tags: ["后端", "JavaScript", "Runtime"],
    url: "https://nodejs.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg",
    color: "#339933"
  },

  // --- 工科专业 ---
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
    id: "solidworks",
    title: "SolidWorks",
    description: "领先的 3D CAD 设计软件，广泛用于机械设计、仿真和制造",
    category: "engineering",
    subcategory: "机械/工业",
    tags: ["3D建模", "机械设计", "仿真"],
    url: "https://www.solidworks.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dassaultsystemes.svg",
    color: "#DC1928"
  },
  {
    id: "matlab",
    title: "MATLAB",
    description: "用于数值计算、可视化和编程的高级语言和交互式环境",
    category: "engineering",
    subcategory: "工程仿真",
    tags: ["数值计算", "算法开发", "全能"],
    url: "https://www.mathworks.com/products/matlab.html",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mathworks.svg",
    color: "#ED1C24"
  },

  // --- 金融/量化/财会 ---
  {
    id: "wind",
    title: "Wind 万得终端",
    description: "中国领先的金融数据和分析工具，广泛用于投行、券商和基金",
    category: "finance",
    subcategory: "金融终端",
    tags: ["金融数据", "投行", "分析"],
    url: "https://www.wind.com.cn",
    color: "#004B87"
  },
  {
    id: "bigquant",
    title: "BigQuant",
    description: "人工智能量化投资平台，提供海量数据和 AI 策略开发环境",
    category: "finance",
    subcategory: "量化交易",
    tags: ["量化交易", "AI", "策略开发"],
    url: "https://bigquant.com",
    color: "#2C3E50"
  },

  // --- 数字媒体/艺术设计 ---
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
  {
    id: "blender",
    title: "Blender",
    description: "开源的全能 3D 创作套件，支持建模、动画、渲染和视频编辑",
    category: "design",
    subcategory: "3D建模/动画",
    tags: ["3D建模", "动画", "开源"],
    url: "https://www.blender.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/blender.svg",
    color: "#F5792A"
  },

  // --- 商业分析/管理 ---
  {
    id: "tableau",
    title: "Tableau",
    description: "全球领先的数据可视化分析平台，帮助人们查看并理解数据",
    category: "business",
    subcategory: "BI分析",
    tags: ["BI", "可视化", "商业分析"],
    url: "https://www.tableau.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tableau.svg",
    color: "#E97627"
  },

  // --- 资源站与练手项目 ---
  {
    id: "kaggle",
    title: "Kaggle",
    description: "全球最大的数据科学竞赛和资源平台，提供海量行业数据集和练手项目",
    category: "resources",
    subcategory: "数据集/竞赛",
    tags: ["数据集", "竞赛", "数据科学"],
    url: "https://www.kaggle.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kaggle.svg",
    color: "#20BEFF"
  }
];
