import claudeCodeIcon from "@/assets/claude-code.svg";

export interface Skill {
  name: string;
  icon: string;
  category: "web" | "libraries" | "tools" | "os" | "ai";
}

export const skillCategories = [
  // { id: "web", label: "Web Development" },
  // { id: "libraries", label: "Libraries & Frameworks" },
  // { id: "tools", label: "Tools & Technologies" },
  // { id: "ai", label: "AI Tools" },
  // { id: "os", label: "Databases" },
] as const;

export const skills: Skill[] = [
  // Web Development
  {
    name: "React JS",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/react.png",
    category: "web",
  },
  {
    name: "Vue.js",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/vue.png",
    category: "web",
  },
  {
    name: "Redux",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/redux.png",
    category: "web",
  },
  { name: "Vite", icon: "https://vitejs.dev/logo.svg", category: "web" },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "web",
  },
{
    name: "Claude Code",
    icon: claudeCodeIcon,
    category: "web",
  },
  {
    name: "GitHub Copilot",
    icon: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
    category: "web",
  },
  {
    name: "Cursor",
    icon: "https://www.cursor.com/assets/images/logo.svg",
    category: "web",
  },
  { name: "Lovable", icon: "https://lovable.dev/icon.svg", category: "web" },

  {
    name: "ChatGPT",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    category: "web",
  },
  {
    name: "Google Gemini",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    category: "web",
  },
  {
    name: "JavaScript ES6",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/js.png",
    category: "web",
  },
  {
    name: "Node.js",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/node.png",
    category: "web",
  },
  // {
  //   name: "HTML 5",
  //   icon: "https://my-portfolio-asaf.netlify.app/img/logos/html.png",
  //   category: "web",
  // },
  {
    name: "CSS 3",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/css.png",
    category: "web",
  },
  {
    name: "SASS",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/sass.png",
    category: "web",
  },
  {
    name: "React Hooks",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/hooks.png",
    category: "web",
  },

  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "web",
  },
  {
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    category: "web",
  },
  {
    name: "yarn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    category: "web",
  },
  {
    name: "MongoDB",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/mongodb.png",
    category: "web",
  },
  {
    name: "SQL Server",
    icon: "https://my-portfolio-asaf.netlify.app/img/logos/sql.png",
    category: "web",
  },
];
