// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'yassenes', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/yassenes/yassenes.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/yassenes/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Portfolio',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['yassenes/my-project1', 'yassenes/my-project2']
        },
      },
      manual: {
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Yassen', description: '', imageURL: '' },
  social: {
    linkedin: 'yassen-nagy-a94917a7',
    x: 'yassenes',
    discord: '.acespace',
    website: 'https://www.yassenes.com',
    email: 'yassenes@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/yassenes/portfolio/blob/main/yassen-cv.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C#',
    'Microsoft SQL Server',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
  ],
  experiences: [
    {
      company: 'Ruby Online',
      position: 'SENIOR SOFTWARE DEVELOPER',
      from: 'January 2017',
      to: 'Present',
      companyLink: 'https://play-ruby.com',
    },
    {
      company: 'Cronos Online',
      position: 'SENIOR SOFTWARE DEVELOPER',
      from: 'June 2017',
      to: 'July 2023',
      companyLink: 'https://www.facebook.com/cronossilkroad',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Office Certificate',
      body: 'Egyptian Armed Forces',
      year: 'March 2024',
      link: 'https://github.com/yassenes',
    },
    {
      name: 'Data Analyst Specialist Certificate',
      body: 'DEPI',
      year: 'Present',
      link: 'https://github.com/yassenes',
    },
  ],
  educations: [
    {
      institution: 'Luxor University',
      degree: 'Bachelor of Tourism and Hotels',
      from: '2018',
      to: '2022',
    },
  ],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'yassenes', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,

  enablePWA: true,
};

export default CONFIG;
