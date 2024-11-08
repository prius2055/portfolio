const projects = [
  {
    id: 7,
    name: 'TechCare - Comprehensive Healthcare dashboard',
    description:
      'Meditechplus Techcare is a comprehensive healthcare dashboard designed to streamline the management of medical records, appointments, and diagnostic histories for both users and hospitals. With an intuitive interface, TechCare enhances patient care by providing seamless access to medical histories and scheduling tools, enabling efficient, secure, and organized healthcare management.',
    technology: ['React & Redux', 'Postgresl & AmazonS3', 'Git, Netlify'],
    image: 'img/healthcare dashboard.PNG',
    liveVersion: 'img/Icon-2.png',
    source: 'img/github.png',
    liveDemo: 'https://meditechplus.netlify.app/',
    sourceCode: 'https://github.com/prius2055/medPlus-dashboard',
  },

  {
    id: 6,
    name: 'Website for a consultancy firm',
    description:
      'Explore RAEMCOD GLOBAL GROUP website. A company exceling in real estate, media production, ICT, and strategic investment. Navigate seamlessly through their subsidiary companies and explore the array of services.',
    technology: ['JavaScript', 'Gitflow', 'CSS', 'HTML'],
    image: 'img/leaderboard-3.PNG',
    liveVersion: 'img/Icon-2.png',
    source: 'img/github.png',
    liveDemo: 'https://www.raemcodgroup.com/',
    sourceCode: 'https://github.com/prius2055/raemcod-group',
  },

  {
    id: 2,
    name: 'spaceX',
    description:
      'An innovative and captivating Mission to Space application leveraging the rich capabilities of the space API. This cutting-edge app empowers users to embark on an extraordinary journey to outer space by facilitating seamless reservations and bookings for an experience that transcends our earthly bounds. With the mission to space app, the cosmos is now within reach.',
    technology: ['React', 'Redux', 'API', 'CSS', 'Axios'],
    image: 'img/spaceX.PNG',
    liveVersion: 'img/Icon-2.png',
    source: 'img/github.png',
    liveDemo: 'https://spacex-mv.netlify.app/',
    sourceCode: 'https://github.com/abeltsew/spacex',
  },
  {
    id: 3,
    name: 'Gistam - Your Ultimate Micro-Blogging Experience!',
    description:
      'Dive into Gistam, the vibrant micro-blogging platform where your voice matters. Whether you are sharing thoughts, engaging in lively discussions, or showcasing your latest photos, Gistam has you covered. Created with React, Redux, Rails for backend, postgreSql, with images hosted using Amazon s3, and hosted using netlify and render, Gistam enables you to create and share posts effortlessly, comment on posts and interact with other users, Like posts to show your support, easily delete your posts and comments whenever you choose, upload images to enhance your posts. Experience the power of community and seamless interaction on Gistam. Join us today and start sharing your story!',
    technology: [
      'React & Redux',
      'Rails',
      'Postgresl & AmazonS3',
      'Git, Render & Netlify',
    ],
    image: 'img/gistam.PNG',
    liveVersion: 'img/Icon-2.png',
    source: 'img/github.png',
    liveDemo: 'https://gistam.netlify.app/',
    sourceCode: 'https://github.com/prius2055/gistam',
  },

  {
    id: 1,
    name: 'propInspect (Prop-Tech)',
    description:
      ' Seamlessly book property inspections with this user-friendly prop-tech app, built with modern technologies; Rails, React, Redux, Tailwind,axios, API and Postgresql for database management. Pick a suitable date, select your preferred time, and schedule hassle-free property viewings. Your journey to finding the perfect home starts here, making property exploration effortless!',
    technology: ['React-Redux', 'Ruby-on-Rails', 'Postgresql', 'TailwindCSS'],
    image: 'img/propInspect.PNG',
    liveVersion: 'img/Icon-2.png',
    source: 'img/github.png',
    liveDemo: 'https://inspectthisproperty.onrender.com/',
    sourceCode: 'https://github.com/prius2055/property-check-frontend',
  },

  {
    id: 4,
    name: 'Currency exchanger',
    description:
      'Behold our cutting-edge Currency Exchange Application, a feature-rich platform designed to empower users with the ability to effortlessly access and compare exchange rates of a wide array of global currencies against a chosen base currency. This comprehensive app provides users with real-time, up-to-date information, ensuring they are well-informed about the dynamic world of currency exchange. Whether for international travelers, financial professionals, or anyone keen on monitoring currency fluctuations, this app offers a user-friendly and indispensable tool to stay in control of their financial decisions. ',
    technology: ['React', 'Redux', 'API', 'github'],
    image: 'img/currency-exchange.PNG',
    liveVersion: 'img/Icon-2.png',
    source: 'img/github.png',
    liveDemo: 'https://currency-exchange-app.onrender.com/',
    sourceCode: 'https://github.com/prius2055/Currency-Exchange-app',
  },

  {
    id: 5,
    name: 'PAFIR Awards',
    description:
      'Introducing Pinnacle Awards for Finance, ICT, and Real estate (PAFIR) Awards, an organisation to recognise innovation and people who have demonstrated exceptional leadership in the Finance, ICT, and Real estate in Nigeria. Users can nominate candidates of their choice which is stored in a database that can be printed. The backend for this application is built with expressjs',
    technology: ['CSS', 'JavaScript', 'ExpressJs', 'Backend', 'Database'],
    image: 'img/pafir.JPG',
    liveVersion: 'img/Icon-2.png',
    source: 'img/github.png',
    liveDemo: 'https://www.pafirawards.ng/',
    sourceCode: 'https://github.com/prius2055/pafir-awards',
  },
];

const projectCards = document.querySelector('.work-cards');
const modalContainer = document.querySelector('.modal-container');

projects.forEach((project, i) => {
  const div = document.createElement('div');
  div.className = 'work-card';
  div.innerHTML = `
  <img src='${project.image}' alt='project image' class='work-img id='work-img/>
  <div class='work-notes'>
          <h2>${project.name}</h2>
          <p>${project.description}</p>
          <ul class="list list-grey">
            <li>${project.technology[0]}</li>
            <li>${project.technology[1]}</li>
            <li>${project.technology[2]}</li>
            <li>${project.technology[3]}</li>
          </ul>

<button class='btn-orange'>See project</button>
</div>
          `;
  projectCards.appendChild(div);
});

//Handle scroll animation
const workCards = document.querySelectorAll('.work-card');
const workImages = document.querySelectorAll('.work-img');
const workNotes = document.querySelectorAll('.work-notes');

const aboutParagraphs = document.querySelector('.about-paragraphs');

const techSkills = document.querySelectorAll('.tech-skills');

const objectInView = (card, percentageScroll = 100) => {
  const cardTop = card.getBoundingClientRect().top;
  return (
    cardTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const objectOutOfView = (card) => {
  const elementTop = card.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const handleScrollAnimation = () => {
  workImages.forEach((image) => {
    if (objectInView(image, 65)) {
      image.classList.add('scrolled');
    } else if (objectOutOfView(image)) {
      image.classList.remove('scrolled');
    }
  });

  workNotes.forEach((note) => {
    if (objectInView(note, 65)) {
      note.classList.add('scrolled');
    } else if (objectOutOfView(note)) {
      note.classList.remove('scrolled');
    }
  });

  workCards.forEach((work) => {
    if (objectInView(work, 65)) {
      work.classList.add('scrolled');
    } else if (objectOutOfView(work)) {
      work.classList.remove('scrolled');
    }
  });

  if (objectInView(aboutParagraphs, 65)) {
    aboutParagraphs.classList.add('scrolled');
  } else if (objectOutOfView(aboutParagraphs)) {
    aboutParagraphs.classList.remove('scrolled');
  }

  techSkills.forEach((skill) => {
    if (objectInView(skill, 65)) {
      skill.classList.add('scrolled');
    } else if (objectOutOfView(skill)) {
      skill.classList.remove('scrolled');
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

/* The modal */
const projectButtons = document.querySelectorAll('.btn-orange');
const modalOverlay = document.querySelector('.overlay');

projectButtons.forEach((btn, j) => {
  btn.addEventListener('click', (e) => {
    projects.forEach((project, i) => {
      if (j === i) {
        const modal = ` <div class='modal'>
        <div class='modal-heading'>
          <h2>${project.name}</h2>
          <img src='./img/xmark.svg' alt='cancel image' class='modal-close' />
        </div>
        <ul class='modal-list'>
          <li>${project.technology[0]}</li>
          <li>${project.technology[1]}</li>
          <li>${project.technology[2]}</li>
          <li>${project.technology[3]}</li>
        </ul>
        <div class='modal-detail'><img src='${project.image}' alt='modal hero image' />
          <div class='modal-message'>
           <p>
            ${project.description}
           </p>
           <div class='modal-buttons'>
           <a href ='${project.liveDemo}' target = '_blank' class='btn-modal'>
           <span>See Live</span
           ><img src='${project.liveVersion}' alt='share button' />
           </a>
           <a href ='${project.sourceCode}' target = '_blank' class='btn-modal'>
           <span>See Source</span
           ><img src='${project.source}' alt='share button' />
           </a>
          </div>
        
        </div>
        </div>
       </div>`;
        modalContainer.innerHTML = modal;
        document.body.append(modalContainer);
      }
    });

    modalContainer.classList.add('active');
    modalOverlay.classList.add('active');

    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', () => {
      modalContainer.classList.remove('active');
      modalOverlay.classList.remove('active');
    });
  });
});

const header = document.querySelector('.header');
const navBar = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const mobileNavLogo = document.querySelector('.logo');
const mobileNavLink = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.main-container');
const bottomLine = document.querySelector('.bottom_line');

hamburger.addEventListener('click', () => {
  header.classList.toggle('active');
  navBar.classList.toggle('active');
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  mobileNavLogo.classList.toggle('active');
  mainContainer.classList.toggle('active');
  bottomLine.classList.toggle('active');
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener('click', () => {
    header.classList.toggle('active');
    navBar.classList.toggle('active');
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    mobileNavLogo.classList.toggle('active');
    mainContainer.classList.toggle('active');
    bottomLine.classList.toggle('active');
  });
});
