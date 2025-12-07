export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Front End Developer',
    company: 'Mobitti',
    companyUrl: 'https://www.mobitti.com/',
    period: '2021-Present',
    description: 'Develop Websites using modern front-end technologies',
    technologies: ['React JS', 'Redux', 'Vue.js', 'JavaScript', 'CSS', 'Sass', 'Bootstrap'],
  },
  {
    title: 'Personal Projects',
    company: 'Self-Employed',
    period: '2020-2021',
    description: 'Develop various websites and applications for learning and portfolio',
    technologies: ['React JS', 'Redux', 'JavaScript', 'CSS', 'Sass', 'Bootstrap'],
  },
  {
    title: 'Software Implementation & Front End Developer',
    company: 'Eventact',
    companyUrl: 'https://www.eventact.com/',
    period: '2018-2020',
    description: 'Develop and Maintenance Websites',
    technologies: ['C#', 'JavaScript', 'HTML', 'CSS', 'Angular', 'Bootstrap'],
  },
  {
    title: 'Israel Support Engineer',
    company: 'LiveU',
    companyUrl: 'https://www.liveu.tv/',
    period: '2017-2018',
    description: 'Technical support and engineering for live video transmission',
    technologies: ['Technical Support', 'Video Streaming'],
  },
];
