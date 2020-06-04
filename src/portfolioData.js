const data = {
  pageTitle: 'Marcos Medeiros - Full-stack Software Developer',
  name: 'Marcos Medeiros',
  github: 'https://github.com/marcos-medeiros',
  linkedin: 'https://www.linkedin.com/in/marcosmedeiros-dev',
  twitter: 'https://twitter.com/mrcsmedeiros',
  email: 'mvsmdrs@protonmail.com',
  introTitle: 'Hey, I\'m Marcos.',
  introDescription: 'Full-stack web developer. Remote. Ruby on Rails. React/Redux. Looking for a job and challenging opportunities.',
  introButton: 'My Projects',
  introPhotoPath: './src/profile.png',
  projects: [
    {
      name: 'AeroTest',
      imgPath: './src/aerotest.png',
      description: 'A booking app for clients looking for aircrafts to buy with the possibility of scheduling Test Flights.Built with React and Rails and deployed with Heroku.',
      liveDemo: 'https://aerotest-app.herokuapp.com',
      repository: 'https://github.com/marcos-medeiros/booking-app',
      tools: [
        'React/Redux',
        'Ruby on Rails',
        'Heroku',
      ],
    },
    {
      name: 'Battleship Game',
      imgPath: './src/battleship.png',
      description: 'The Battleship project is aimed at applying the knowledge of javascript , webpack, and basic HTML/CSS to create a copy of the battleship game.',
      liveDemo: 'https://raw.githack.com/marcos-medeiros/battleship/game-setup/dist/index.html',
      repository: 'https://github.com/marcos-medeiros/battleship',
      tools: [
        'JavaScript',
        'Jest.js',
        'Webpack',
      ],
    },
    {
      name: 'Rails Facebook Clone',
      imgPath: './src/railsfacebook.png',
      description: 'A mimick of facebook built with Ruby on Rails. This project has facebook\'s core features implemented: posts, friends, likes and comments. ',
      liveDemo: 'https://rails-fakebook-project.herokuapp.com',
      repository: 'https://github.com/marcos-medeiros/rails-facebook',
      tools: [
        'Ruby on Rails',
        'RSpec',
        'Bootstrap 4',
        'Heroku',
      ],
    },
    {
      name: 'Weather App',
      imgPath: './src/weatherapp.png',
      description: 'The Weather App is aimed at applying the knowledge of javascript, webpack, API\'s and HTML to create a basic weather app in which you can search for a given city and get its current weather. ',
      liveDemo: 'https://marcos-medeiros.github.io/weather-app/',
      repository: 'https://github.com/marcos-medeiros/weather-app',
      tools: [
        'JavaScript',
        'Webpack',
        'Async Requests',
      ],
    },
    {
      name: 'Bookstore App',
      imgPath: './src/bookstoreapp.png',
      description: 'This project is a simple bookstore app made with React JS, Redux, and deployed with Heroku.',
      liveDemo: 'https://microverse-react-bookstore.herokuapp.com',
      repository: 'https://github.com/marcos-medeiros/bookstore-app',
      tools: [
        'React/Redux.js',
        'Webpack',
        'Heroku',
      ],
    },
    {
      name: 'Calculator App',
      imgPath: './src/calculatorapp.png',
      description: 'A basic calculator built with React Components and deployed with Heroku.',
      liveDemo: 'https://react-calculator-project.herokuapp.com/',
      repository: 'https://github.com/marcos-medeiros/calculator-app',
      tools: [
        'JavaScript',
        'React.js',
        'Heroku',
      ],
    },

  ],
  education: [
    {
      logo: './src/udacity.png',
      institution: 'Udacity',
      description: 'Nanodegrees in Data Science and Programming',
      time: '2018 - 2019',
    },
    {
      logo: './src/uol.png',
      institution: 'University of London',
      description: 'Bachelor of Science in Computer Science',
      time: '04/2020 - present',
    },
    {
      logo: './src/microverse.png',
      institution: 'Microverse',
      description: 'Full-stack web development program',
      time: '09/2019 - 05/2020',
    },
  ],
  publications: [
    {
      title: '3 Basic Principles You MUST Know Before Using Redux',
      image: './src/reduxpublication.png',
      date: 'May 4th, 2020',
      description: "Redux is a library for managing states that follow the principles of the flux architecture. We won't go too deep in technical details, but we'll cover the basic principles that you'll need to understand this framework. Redux is an independent framework, but for the sake of brevity, we'll assume that we are using it with React.",
      link: 'https://hackernoon.com/3-basic-principles-you-must-know-before-using-redux-es6o3y1c',
    },
    {
      title: 'A Beginner\'s guide to Ruby on Rails MVC (Model View Controller) Pattern',
      image: './src/mvcpublication.png',
      date: 'December 14th, 2019',
      description: 'In this article, we’re going to learn a little more about the MVC, the system Architecture at the core of the Rails Framework for Software Development. Hopefully, by the end of it, you’ll know why working with a system architecture can make all the difference when developing an app.',
      link: 'https://hackernoon.com/beginners-guide-to-ruby-on-rails-mvc-model-view-controller-pattern-4z19196a',
    },
    {
      title: 'Flexbox VS Grid: This is Why You Should Be Using Both',
      image: './src/gridflexpublication.png',
      date: 'October 17th, 2019',
      description: 'There was a time that positioning elements with CSS could be a real hassle, depending on what was needed to do.\nThen, Flexbox came to the rescue, facilitating element positioning. But it didn’t take long to browsers adapt and start supporting CSS Grid.\nThis left us with a question: Flexbox or Grid?',
      link: 'https://hackernoon.com/flexbox-vs-grid-this-is-why-you-should-be-using-both-p33a18pm',
    },
  ],
  projectsTab: {
    title: 'My Projects',
    subTitle: 'For the last year I’ve been designing and developing web applications. Below are some of my favourites.',
  },
  publicationsTab: {
    title: 'My Publications',
    subTitle: 'Articles about technologies and tools I use in my work.',
  },
  aboutTab: {
    title: 'About Me',
    subTitle: 'Find out who I am, where I\'m from and what I\'m all about.',
  },
  about: {
    firstName: 'Marcos',
    position: 'remote full-stack web developer',
    paragraphs: [
      'Technology has always been a big part of my life. Still, it was when I turned 21 that I developed a passion for programming in general. Since then, I have been learning programming languages, frameworks and new technologies.',
      "I started with Python, but my more recent and concrete accomplishments were all built with Ruby on Rails and JavaScript. Today I'm a real endorser of Test-Driven Development and its benefits for clean and efficient code.",
      'In the last six months, I have built more than 30 projects (in more than 1300 hours of work) and have learned what it is like to use the git workflow at the industrial level. Working remotely through pair programming has also significantly improved my communication and organization skills and has also prepared me to work with cross-cultural teams.',
      'If you’ve got a position you’d like to discuss with me just contact me by any of the channels below.',
      'I\'m looking forward to hear from you!',
    ],
  },
};

export default data;