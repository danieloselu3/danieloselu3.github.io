// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'danieloselu3', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'danieloselu3/savannah-ecommerce-analytics',
          'danieloselu3/SyriaTel-Telecom-Analysis',
          'danieloselu3/urban_umbrella',
          'danieloselu3/Linear-Regression-Project',
          'danieloselu3/Heart-Rate-Data-Stream',
          'danieloselu3/Twitter-Sentiment-Analysis'
        ] // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Rhino Africa Data Analysis',
          description:
            'The aim of this assignment is for me to evaluate my ability to utilize data and to create insightful and accurate reporting by utilizing data analytics tools.',
          imageUrl:
            '',
          link: 'https://github.com/danieloselu3/Rhino-Africa-Data-Analytics/blob/main/RhinoAfrica_data_Analyst_Assessment.ipynb',
        },
        {
          title: 'Mobile Phone Sentiment Analysis',
          description:
            'To perform a sentiment analysis of mobile phone reviews from Amazon website to determine how these reviews can help buyers make informed purchasing decisions and sellers to make better choices in terms of phones to sell',
          imageUrl:
            '',
          link: 'https://github.com/danieloselu3/Mobile-Phone-Sentiment-Analysis/blob/main/Mobile_Phone_Sentiment_Analysis.ipynb',
        },
      ],
    },
  },
  seo: {
    title: 'Daniel Oselu Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'daniel-oselu',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://danieloselu3.github.io/',
    phone: '',
    email: 'doselu3@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1KHc_GNipMD4trnc-B-O1ecp7TthqUG0u/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'NOSQL',
    'AWS Services',
    'PySpark',
    'Tableau',
    'Pandas',
    'SQL',
    'Git',
    'Docker',
    'SciKit-Learn',
    'Seaborn',
    'Matplotlib',
    'AirFlow',
    'CSS',
    'Erwin',
    'Snowflake',
    'DBT',
    'Jupyter Notebook'
  ],
  experiences: [
    {
      company: 'Surehills Technology LLC',
      position: 'Data Analysis',
      from: 'August 2022',
      to: 'Present',
      companyLink: '',
    }
  ],
  certifications: [
    {
      name: 'Data Science and Analytics',
      body: 'Moringa School',
      year: 'May 2022',
      link: 'https://drive.google.com/file/d/1FvbvT3TsjLJavAeNQvh4uI_oMnTTMyqn/view?usp=sharing',
    },
    {
      name: 'Data Engineering',
      body: 'Explore AI Academy',
      year: 'December 2023',
      link: 'https://drive.google.com/file/d/1We9LYNU4c9gwuK_6t29NgkqtkUNPvX4f/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'University of Nairobi',
      degree: 'Bachelor of Science, Mathematics',
      from: '2014',
      to: '2020',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@doselu3', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

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
      'light',
      'dark',
      'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
