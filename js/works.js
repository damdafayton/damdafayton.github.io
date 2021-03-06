// Portfolio data
const portfolioList = [
  {
    name: 'Doctor Appointment',
    description:
      'This app is an implementation of the <a class="text-success" target="blank" href="https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign">design of Murat Korkmaz from Behance</a> for a doctor booking app.\
      The back-end is built with Rails according to RESTful API principles.\
      The front-end is built with React according to mobile first, responsive design principles.\
      App is hosted on free Heroku containers so it might take up to 20-30 seconds to load initially.',
    screenshotUrl: './works/ss-doctors.png',
    tech: ['Ruby', 'Rails', 'React', 'Redux', 'Bootstrap', 'SASS', 'Postgresql', 'RSpec', 'RSwag'],
    linkToLive: 'https://doctors-appointment-project.herokuapp.com/',
    linkToSource: 'https://github.com/damdafayton/doctors-appointment-backend',
  },
  {
    name: 'Show My Neighbors',
    description:
      'A SPA built with React, Redux, showing neighboring countries of the visitor.\
 Original design by <a class="text-success" target="_blank" href="https://dribbble.com/shots/2113468-Behance-Version">Nelson Sakwa</a> on Dribbble',
    screenshotUrl: './works/capstone_location_ss-wide.gif',
    tech: ['HTML', 'CSS', 'JS', 'Bootstrap', 'SCSS', 'React', 'Redux'],
    linkToLive: 'https://who-is-my-neighbor.netlify.app/',
    linkToSource: 'https://github.com/damdafayton/who-is-my-neighbor',
  },
  {
    name: 'Budget App',
    description:
      'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.\
 Original design by <a class="text-success" target="_blank" href="https://www.behance.net/gallery/19759151/Snapscan-iOs-design-and-branding?tracking_source=">Gregoire Vella</a> on Behance',
    screenshotUrl: './works/ss_budget_app_rails.gif',
    tech: ['Ruby', 'Rails', 'Bootstrap', 'Sass', 'Postgresql', 'RSpec'],
    linkToLive: 'https://damdafayton-budget.herokuapp.com/',
    linkToSource: 'https://github.com/damdafayton/budget-app-rails',
  },
  {
    name: 'De-fi Token Farm',
    description:
      'Yield farming dapp built by Brownie, Python and React where you can stake and un-stake various tokens.',
    screenshotUrl: './works/ss-defi-token-farm.png',
    tech: [
      'JS',
      'TypeScript',
      'Bootstrap',
      'React',
      'Solidity',
      'Python',
      'Brownie',
    ],
    linkToLive: 'https://defi-token-farm.netlify.app/',
    linkToSource: 'https://github.com/damdafayton/defi-token-farm',
  },
  {
    name: 'Restaurant',
    description: 'Restaurant promotion site.\
 Original design by <a class="text-success" target="_blank" href="https://www.behance.net/gallery/29845175/CC-Global-Summit-2015">Cindy Shin</a> on Behance',
    screenshotUrl: './works/ss-restaurant.jpg',
    tech: ['HTML', 'CSS', 'JS', 'Bootstrap.css', 'SCSS.css'],
    linkToLive: 'https://damdafayton.github.io/restaurant/',
    linkToSource: 'https://github.com/damdafayton/restaurant',
  },
  {
    name: 'Blog App',
    description:
      'This Blog app is a classic example of a blog website. And the creation of a full functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    screenshotUrl: './works/ss-rails-blog.png',
    tech: ['Ruby', 'Rails', 'Bootstrap', 'Sass', 'Postgresql', 'RSpec'],
    linkToLive: 'https://damdafayton-blog.herokuapp.com/',
    linkToSource: 'https://github.com/damdafayton/rails-blog',
  },
  {
    name: 'Dating',
    description:
      'Dummy dating website\n email: dummy@dummy.com\n password: damdafayton',
    screenshotUrl: './works/screenshot-dating.jpg',
    tech: ['HTML', 'CSS', 'JS', 'MongoDB', 'Bootstrap.css', 'Node.js'],
    linkToLive: 'http://dating-clone.herokuapp.com/',
    // linkToSource: 'http://www.github.com/uber',
  },
  {
    name: 'Yelp-Camp',
    description:
      'Dummy camping website\n username: dummy\n password: damdafayton',
    screenshotUrl: './works/ss-camping.jpg',
    tech: ['HTML', 'CSS', 'JS', 'MongoDB', 'Bootstrap.css', 'Node.js'],
    linkToLive: 'http://fake-camping.herokuapp.com/',
    linkToSource: 'https://github.com/damdafayton/dummy-camping',
  },
  {
    name: 'News Poster',
    description:
      'Dummy news portal\n username: herokuguest\n password: herokuguest..',
    screenshotUrl: './works/ss-bestnews.jpg',
    tech: [
      'HTML',
      'CSS',
      'JS',
      'Python',
      'PostgreSQL',
      'Docker',
      'Django.py',
      'React.js',
    ],
    linkToLive: 'https://bestnewsposter.herokuapp.com/',
    linkToSource: 'https://github.com/damdafayton/bestnewsposter',
  },
  {
    name: 'Portfolio Page',
    description: 'This very page',
    screenshotUrl: './works/ss-portfolio.jpg',
    tech: ['HTML', 'CSS', 'JS', 'SCSS.css'],
    linkToLive: 'https://damdafayton.github.io/portfolio/',
    linkToSource: 'https://github.com/damdafayton/portfolio',
  },
];

// CREATE PORTFOLIO CARDS
const cardContainer = document.querySelector('#my-works > .card-container');
// Create cards based on the amount of projects
portfolioList.forEach(() => {
  cardContainer.innerHTML += `
    <div class= "card">
      <img alt="screenhost of my work" src="#">
      <h3></h3>
      <ul class="tech"></ul>
      <span></span>
      <a class="btn-green" href="#">See Project</a>
    </div>
  `;
});

// FILL PORTFOLIO CARDS
function techListElementCreator(tech) {
  const listItem = document.createElement('li');
  listItem.innerText = tech;
  listItem.className = 'tech-tag';
  return listItem;
}

function ulFiller(ul, portfolioOrder) {
  portfolioList[portfolioOrder].tech.forEach((newTech) => {
    // console.log('add newTech: ', newTech)
    const listElement = techListElementCreator(newTech);
    ul.appendChild(listElement);
  });
}

const myWorks = document.querySelectorAll('#my-works>.card-container>.card');
const popUp = document.querySelector('#popUp');

function portfolioPopUp(e) {
  e.preventDefault();
  let n = 0;
  // Find the order of clicked item among all the works
  myWorks.forEach((work, i) => {
    if (e.target.parentElement === work) {
      n = i;
    }
  });
  // n += 1; // to adjust for object order

  // Create link elements
  const imgLive = document.createElement('img');
  imgLive.src = './icons/see-live.svg';
  const imgSource = document.createElement('img');
  imgSource.src = 'icons/source.svg';

  const aLive = document.createElement('a');
  aLive.classList.add('btn-green', 'me-1');
  aLive.target = '_blank';
  aLive.href = portfolioList[n].linkToLive;
  aLive.innerText = 'See Live';
  aLive.appendChild(imgLive);

  const aSource = document.createElement('a');
  aSource.classList.add('btn-green', 'ms-1');
  aSource.target = '_blank';
  aSource.href = portfolioList[n].linkToSource;
  aSource.innerText = 'See Source';
  aSource.appendChild(imgSource);

  const popUpElements = popUp.querySelectorAll('*');
  popUpElements.forEach((element) => {
    switch (element.id || element.tagName) {
      case 'popUpImage':
        element.src = portfolioList[n].screenshotUrl;
        break;
      case 'popUpDescription':
        element.innerHTML = portfolioList[n].description;
        break;
      case 'popUpTech':
        ulFiller(element, n);
        break;
      case 'SPAN':
        element.innerHTML = ''; // reset whatever element was put in during previous fill
        if (portfolioList[n].linkToLive) {
          element.appendChild(aLive.cloneNode(true));
        }
        if (portfolioList[n].linkToSource) {
          element.appendChild(aSource.cloneNode(true));
        }
        break;
      default:
        break;
    }
  });

  popUp.classList.add('show');
  // body.classList.add('body-blur')
}

myWorks.forEach((work, i) => {
  // i += 1;
  const subElements = work.querySelectorAll('*');
  subElements.forEach((element) => {
    switch (element.tagName) {
      case 'IMG':
        element.src = portfolioList[i].screenshotUrl;
        return 0;
      case 'H3':
        element.innerText = portfolioList[i].name;
        return 0;
      case 'UL':
        ulFiller(element, i);
        return 0;
      case 'A':
        // Click button for portfolio popup
        element.addEventListener('click', portfolioPopUp);
        return 0;
      default:
        return 0;
    }
  });
});

// PORTFOLIO DETAILS POPUP CLOSE LOGIC
const popUpClose = document.querySelector('#popUp .svgClose');
const body = document.querySelector('body');
const uList = popUpClose.parentElement.querySelector('UL');

function closePopup() {
  popUp.classList.remove('show');
  body.classList.remove('body-blur');
  // Clean the list
  uList.innerHTML = '';
}

popUpClose.addEventListener('click', closePopup);
window.addEventListener('click', (e) => {
  // console.log('hello', e.target)
  if (e.target === popUpClose.parentElement.parentElement) {
    closePopup();
  }
});
