export interface Skill {
  name: string;
  icon: string;
  category: 'web' | 'libraries' | 'tools' | 'os';
}

export const skillCategories = [
  { id: 'web', label: 'Web Development' },
  { id: 'libraries', label: 'Libraries & Frameworks' },
  { id: 'tools', label: 'Tools & Technologies' },
  { id: 'os', label: 'Databases' },
] as const;

export const skills: Skill[] = [
  // Web Development
  { name: 'JavaScript ES6', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/js.png', category: 'web' },
  { name: 'React JS', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/react.png', category: 'web' },
  { name: 'React Hooks', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/hooks.png', category: 'web' },
  { name: 'Node.js', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/node.png', category: 'web' },
  { name: 'HTML 5', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/html.png', category: 'web' },
  { name: 'CSS 3', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/css.png', category: 'web' },
  
  // Libraries
  { name: 'Redux', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/redux.png', category: 'libraries' },
  { name: 'SASS', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/sass.png', category: 'libraries' },
  { name: 'Angular', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/angular.png', category: 'libraries' },
  { name: 'Vue.js', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/vue.png', category: 'libraries' },
  
  // Databases
  { name: 'MongoDB', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/mongodb.png', category: 'os' },
  { name: 'SQL Server', icon: 'https://my-portfolio-asaf.netlify.app/img/logos/sql.png', category: 'os' },
];
