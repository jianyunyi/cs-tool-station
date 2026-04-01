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
  // --- 计算机与软件工程 ---
  {
    id: "vscode",
    title: "Visual Studio Code",
    description: "轻量级、功能强大的代码编辑器，支持多种编程语言和扩展",
    category: "计算机/软件",
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
    category: "计算机/软件",
    tags: ["前端", "JavaScript", "UI"],
    url: "https://react.dev",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg",
    color: "#61DAFB"
  },

  // --- 电子信息/电气工程 ---
  {
    id: "altium",
    title: "Altium Designer",
    description: "全球领先的 PCB 设计软件，提供一体化的设计环境",
    category: "电子/电气",
    tags: ["PCB设计", "硬件", "EDA"],
    url: "https://www.altium.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/altiumdesigner.svg",
    color: "#A52019",
    versions: [
      {
        version: "24.0",
        releaseDate: "2023-11",
        downloadUrl: "https://www.altium.com/altium-designer/download",
        platform: ["Windows"]
      }
    ]
  },
  {
    id: "keil",
    title: "Keil MDK",
    description: "最流行的嵌入式微控制器开发工具，支持 ARM Cortex-M 处理器",
    category: "电子/电气",
    tags: ["嵌入式", "单片机", "ARM"],
    url: "https://www.keil.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/arm.svg",
    color: "#0091BD",
  },

  // --- 机械/工业设计 ---
  {
    id: "solidworks",
    title: "SolidWorks",
    description: "领先的 3D CAD 设计软件，广泛用于机械设计、仿真和制造",
    category: "机械/工业",
    tags: ["3D建模", "机械设计", "仿真"],
    url: "https://www.solidworks.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dassaultsystemes.svg",
    color: "#DC1928",
    versions: [
      {
        version: "2024 SP0",
        releaseDate: "2023-10",
        downloadUrl: "https://www.solidworks.com/support/downloads",
        platform: ["Windows"]
      }
    ]
  },
  {
    id: "autocad",
    title: "AutoCAD",
    description: "全球著名的 2D 和 3D 计算机辅助设计软件",
    category: "机械/工业",
    tags: ["CAD", "2D图纸", "通用"],
    url: "https://www.autodesk.com/products/autocad",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/autodesk.svg",
    color: "#0696D7",
  },

  // --- 土木/建筑工程 ---
  {
    id: "revit",
    title: "Autodesk Revit",
    description: "专业的 BIM（建筑信息模型）软件，支持建筑、结构和机电设计",
    category: "土木/建筑",
    tags: ["BIM", "建筑设计", "结构工程"],
    url: "https://www.autodesk.com/products/revit",
    color: "#0696D7",
  },

  // --- 化学/材料工程 ---
  {
    id: "chemdraw",
    title: "ChemDraw",
    description: "化学结构绘图软件的标准，支持复杂的分子结构和反应式绘制",
    category: "化学/材料",
    tags: ["化学绘图", "分子结构", "科研必备"],
    url: "https://revvitysignals.com/products/research/chemdraw",
    color: "#0072C6",
  },

  // --- 工程仿真 ---
  {
    id: "matlab",
    title: "MATLAB",
    description: "用于数值计算、可视化和编程的高级语言和交互式环境",
    category: "工程仿真",
    tags: ["数值计算", "算法开发", "全能"],
    url: "https://www.mathworks.com/products/matlab.html",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mathworks.svg",
    color: "#ED1C24",
  },

  // --- 金融/量化/财会 (新增) ---
  {
    id: "wind",
    title: "Wind 万得终端",
    description: "中国领先的金融数据和分析工具，广泛用于投行、券商和基金",
    category: "金融/财会",
    tags: ["金融数据", "投行", "分析"],
    url: "https://www.wind.com.cn",
    color: "#004B87",
  },
  {
    id: "bigquant",
    title: "BigQuant",
    description: "人工智能量化投资平台，提供海量数据和 AI 策略开发环境",
    category: "金融/财会",
    tags: ["量化交易", "AI", "策略开发"],
    url: "https://bigquant.com",
    color: "#2C3E50",
  },
  {
    id: "pandas-finance",
    title: "Pandas Finance",
    description: "Python 金融数据分析的核心库，支持时间序列处理和统计建模",
    category: "金融/财会",
    tags: ["数据分析", "Python", "开源"],
    url: "https://pandas.pydata.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pandas.svg",
    color: "#150458",
  },

  // --- 数字媒体/艺术设计 (新增) ---
  {
    id: "figma",
    title: "Figma",
    description: "基于浏览器的协作式设计工具，广泛用于 UI/UX 设计",
    category: "设计/传媒",
    tags: ["UI设计", "协作", "矢量"],
    url: "https://www.figma.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg",
    color: "#F24E1E",
  },
  {
    id: "blender",
    title: "Blender",
    description: "开源的全能 3D 创作套件，支持建模、动画、渲染和视频编辑",
    category: "设计/传媒",
    tags: ["3D建模", "动画", "开源"],
    url: "https://www.blender.org",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/blender.svg",
    color: "#F5792A",
  },
  {
    id: "adobe-cc",
    title: "Adobe Creative Cloud",
    description: "包含 Photoshop, Premiere Pro, After Effects 等全套设计工具",
    category: "设计/传媒",
    tags: ["图像处理", "视频剪辑", "行业标准"],
    url: "https://www.adobe.com/creativecloud.html",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobe.svg",
    color: "#FF0000",
  },

  // --- 商业分析/管理 (新增) ---
  {
    id: "tableau",
    title: "Tableau",
    description: "全球领先的数据可视化分析平台，帮助人们查看并理解数据",
    category: "商业/管理",
    tags: ["BI", "可视化", "商业分析"],
    url: "https://www.tableau.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tableau.svg",
    color: "#E97627",
  },
  {
    id: "mbalib",
    title: "智库百科 MBA Lib",
    description: "全球最大中文经管百科，提供海量管理模型、战略分析工具和案例",
    category: "商业/管理",
    tags: ["管理模型", "百科", "学习"],
    url: "https://wiki.mbalib.com",
    color: "#005599",
  },
  {
    id: "powerbi",
    title: "Microsoft Power BI",
    description: "微软推出的商业智能分析服务，提供交互式可视化效果和商业智能功能",
    category: "商业/管理",
    tags: ["BI", "数据分析", "微软生态"],
    url: "https://powerbi.microsoft.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/powerbi.svg",
    color: "#F2C811",
  },

  // --- 资源站与练手项目 (新增) ---
  {
    id: "kaggle",
    title: "Kaggle",
    description: "全球最大的数据科学竞赛和资源平台，提供海量行业数据集和练手项目",
    category: "资源/练手",
    tags: ["数据集", "竞赛", "数据科学"],
    url: "https://www.kaggle.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kaggle.svg",
    color: "#20BEFF",
  },
  {
    id: "awesome-quant",
    title: "Awesome Quant",
    description: "GitHub 上的量化交易资源库，涵盖数据获取、策略回测到实盘部署的全流程",
    category: "资源/练手",
    tags: ["量化交易", "开源资源", "GitHub"],
    url: "https://github.com/wilsonfreitas/awesome-quant",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
    color: "#181717",
  },
  {
    id: "uisdc",
    title: "优设网 UISDC",
    description: "国内极具人气的设计师交流学习平台，提供设计教程、灵感及行业资讯",
    category: "资源/练手",
    tags: ["设计教程", "灵感", "社区"],
    url: "https://www.uisdc.com",
    color: "#FF4D4D",
  }
];
