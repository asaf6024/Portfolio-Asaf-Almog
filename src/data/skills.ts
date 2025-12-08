export interface Skill {
  name: string;
  icon: string;
  category: 'web' | 'libraries' | 'tools' | 'os' | 'ai';
}

export const skillCategories = [
  { id: 'web', label: 'Web Development' },
  { id: 'libraries', label: 'Libraries & Frameworks' },
  { id: 'tools', label: 'Tools & Technologies' },
  { id: 'ai', label: 'AI Tools' },
  { id: 'os', label: 'Databases' },
] as const;

export const skills: Skill[] = [
  // Web Development
  { name: 'JavaScript ES6', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/js.png', category: 'web' },
  { name: 'React JS', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/react.png', category: 'web' },
  { name: 'React Hooks', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/hooks.png', category: 'web' },
  { name: 'Vue.js', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/vue.png', category: 'web' },
  { name: 'Node.js', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/node.png', category: 'web' },
  { name: 'HTML 5', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/html.png', category: 'web' },
  { name: 'CSS 3', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/css.png', category: 'web' },
  
  // Libraries
  { name: 'Redux', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/redux.png', category: 'libraries' },
  { name: 'SASS', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/sass.png', category: 'libraries' },
  { name: 'Angular', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/angular.png', category: 'libraries' },
  
  // Tools & Technologies
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
  { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', category: 'tools' },
  { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', category: 'tools' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg', category: 'tools' },
  
  // AI Tools
  { name: 'Cursor', icon: 'https://www.cursor.com/assets/images/logo.svg', category: 'ai' },
  { name: 'Claude', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anthropic/anthropic-original.svg', category: 'ai' },
  { name: 'Lovable', icon: 'https://lovable.dev/icon.svg', category: 'ai' },
  { name: 'GitHub Copilot', icon: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png', category: 'ai' },
  { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', category: 'ai' },
  { name: 'Google Gemini', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', category: 'ai' },
  { name: 'Copilot', icon: 'https://img.icons8.com/fluency/48/microsoft-copilot.png', category: 'ai' },
  
  // Databases
  { name: 'MongoDB', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/mongodb.png', category: 'os' },
  { name: 'SQL Server', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/sql.png', category: 'os' },
];
