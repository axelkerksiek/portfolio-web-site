type Project = {
  title: string
  description: string
  notable_features: string[]
  tech: string[]
  image: string
  github_url?: string
  project_url?: string
}

export const projects: Project[] = [
  {
    title: '📋 ToDo Web App',
    description:
      'A simple ToDo web app to manage your tasks with a twist: choose your desired level of sarcastic motivation.',
    notable_features: ['Customizable level of sarcasm', 'Fun reminders'],
    tech: ['Ruby + Rails', 'PostgreSQL', 'Vite + Vue 3', 'Tailwind CSS', 'SPA', 'AWS'],
    image: '/images/projects/under_construction_3_2_optimized.png',
    github_url: '',
    project_url: '',
  },
  {
    title: '🕹️ 2D Arcade Game',
    description:
      'A 2D space shooter game inspired by Stargate: SG-1. Fight your way through waves of enemies unlocking upgrades as you progress. ',
    notable_features: ['Multiple levels', 'RPG mechanics', 'Pixel art and music'],
    tech: ['PICO-8', 'Lua'],
    image: '/images/projects/under_construction_3_2_optimized.png',
    github_url: '',
    project_url: '',
  },
  {
    title: '🧑‍💻 Personal Portfolio',
    description: 'A place for others to see some of the coding projects I have been working on.',
    notable_features: ['Light/Dark mode', 'Customizable styling', 'Responsive design'],
    tech: ['Vite + Vue 3', 'Tailwind CSS', 'SSG', 'AWS'],
    image: '/images/projects/axel_portfolio_1500x979_light_optimized.png',
    github_url: 'https://github.com/axelkerksiek/portfolio-web-site',
    project_url: '',
  },
]
