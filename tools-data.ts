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
  // --- 计算机与软件工程 (原有) ---
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
  {
    id: "ltspice",
    title: "LTspice",
    description: "高性能 SPICE 仿真软件，用于电路原理图的捕获和波形查看",
    category: "电子/电气",
    tags: ["电路仿真", "SPICE", "免费"],
    url: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
    color: "#004B87",
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
  {
    id: "fusion360",
    title: "Autodesk Fusion 360",
    description: "基于云的 3D CAD、CAM、CAE 和 PCB 平台",
    category: "机械/工业",
    tags: ["云端CAD", "工业设计", "一体化"],
    url: "https://www.autodesk.com/products/fusion-360",
    color: "#EA5002",
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
    versions: [
      {
        version: "2024",
        releaseDate: "2023-04",
        downloadUrl: "https://www.autodesk.com/products/revit/free-trial",
        platform: ["Windows"]
      }
    ]
  },
  {
    id: "sketchup",
    title: "SketchUp",
    description: "直观易用的 3D 建模工具，广泛用于建筑和室内设计",
    category: "土木/建筑",
    tags: ["快速建模", "建筑设计", "3D"],
    url: "https://www.sketchup.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sketchup.svg",
    color: "#005F9E",
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
  {
    id: "origin",
    title: "OriginLab",
    description: "专业的数据分析和绘图软件，广泛用于科学研究和工程领域",
    category: "化学/材料",
    tags: ["数据分析", "科学绘图", "科研"],
    url: "https://www.originlab.com",
    color: "#E52E2E",
  },

  // --- 通用工程计算与仿真 ---
  {
    id: "matlab",
    title: "MATLAB",
    description: "用于数值计算、可视化和编程的高级语言和交互式环境",
    category: "工程仿真",
    tags: ["数值计算", "算法开发", "全能"],
    url: "https://www.mathworks.com/products/matlab.html",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mathworks.svg",
    color: "#ED1C24",
    versions: [
      {
        version: "R2023b",
        releaseDate: "2023-09",
        downloadUrl: "https://www.mathworks.com/downloads/",
        platform: ["Windows", "macOS", "Linux"]
      }
    ]
  },
  {
    id: "ansys",
    title: "Ansys",
    description: "全球领先的工程仿真软件，涵盖结构、流体、电磁等领域",
    category: "工程仿真",
    tags: ["有限元分析", "仿真", "CAE"],
    url: "https://www.ansys.com",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ansys.svg",
    color: "#FFB400",
  },
  {
    id: "comsol",
    title: "COMSOL Multiphysics",
    description: "多物理场仿真软件，用于模拟各种物理过程及其相互作用",
    category: "工程仿真",
    tags: ["多物理场", "仿真", "科研"],
    url: "https://www.comsol.com",
    color: "#004B87",
  },
  {
    id: "labview",
    title: "LabVIEW",
    description: "图形化编程环境，专为测试、测量和控制应用而设计",
    category: "工程仿真",
    tags: ["图形化编程", "自动化测试", "仪器控制"],
    url: "https://www.ni.com/zh-cn/shop/labview.html",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nationalinstruments.svg",
    color: "#FFD200",
  }
];
