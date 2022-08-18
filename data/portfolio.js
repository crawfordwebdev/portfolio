const socialMedia = {
  github: {
    name: "GitHub",
    homepage: "https://github.com/",
    profile: "crawfordwebdev",
    url: "https://github.com/crawfordwebdev",
    img: `<i class="fa-brands fa-github"></i>`
  },
  linkedin: {
    name: "LinkedIn",
    homepage: "https://www.linkedin.com/in/",
    profile: "crawfordmichaeldev",
    url: "https://www.linkedin.com/in/crawfordmichaeldev/",
    img: `<i class="fa-brands fa-linkedin-in"></i>`
  },
  twitter: {
    name: "Twitter",
    homepage: "https://twitter.com/",
    profile: "crawfordwebdev",
    url: "https://twitter.com/crawfordwebdev",
    img: `<i class="fa-brands fa-twitter"></i>`
  },
}

const resume = {
  title: "Software Engineer",
  technicalExpertise: {
    databases: ["MySQL/MariaDB", "MongoDB", "PostgreSQL"],
    progLanguages: ["HTML5", "CSS3", "JavaScript", "PHP", "Python", "C++", "C#"],
    frontend: ["React", "Bootstrap", "MUI", "JWT"],
    backend: ["Node.js", "Express.js", "Django", "JWT", "mongoose", "nginx", "Apache"],
    otherTechnologies: ["Docker", "Proxmox", "Raspberry Pi"],
    operatingsystems: ["Linux (Debian, Ubuntu, CentOS/RedHat)", "Microsoft Windows 10"],
  },
  professionalExperience: [
    {
      title: "IT Consulting",
      company: "",
      years: "2005 - current"
    },
    {
      title: "Photographer",
      company: "",
      years: "2008 - current"
    },
    {
      title: "IT Director",
      company: "onesourcedocs",
      years: "2018"
    }
  ],
  education: [
    {
      school: "Brigham Young University",
      degree: "Studied Computer Science / IT",
      years: "2018-2019"
    },
    {
      school: "Brigham Young University Idaho",
      degree: "Associates of Science",
      years: "2012-2013"
    },
  ]
}

const pages = {
  about: {
    navText: "About",
    title: "About",
    id: "about-section",
    content: `Full-stack web developer and photographer that enjoys using modern languages and frameworks to help companies of all sizes create fast and secure websites. Focus on fast and efficient back-end code with intuitive user interfaces (UI) to assist in the overall user experience(UX). <span id="portfolio-creator-name">-Michael Crawford</span>`,
  },
  resume: {
    navText: "Resume",
    title: "Resume",
    id: "resume-section",
    content: ``,
  },
  contact: {
    navText: "Contact",
    title: "Contact Points",
    id: "contact-section",
    content: `<div id="contact-points">${contactPageHTML()}</div>`,
  },
  work: {
    navText: "Work",
    title: "Work",
    id: "work-section",
    content: "",
  },
}

const workPieces = [
  {
    title: "Where's My Dinner?",
      deployment: "https://wheresmydinner.herokuapp.com/",
      githubRepo: "wheres_my_dinner",
      description: "",
      technologies: ["html", "css", "javascript", "django", "heroku", "aws"],
      image: "../assets/images/wheresmydinner-300.webp",
    },
  {
  title: "Honeydews",
    deployment: "https://honeydews.netlify.app/",
    githubRepo: "honeydew-list-front-end",
    description: "",
    technologies: ["html", "css", "node.js", "express.js", 
      "mongoose", "mongodb", "heroku", "netlify", "react", "mui"],
    image: "../assets/images/honeydews300.png",
  },
  {
  title: "Stranger Drinks",
    deployment: "https://stranger-drinks.netlify.app/",
    githubRepo: "stranger-drinks-front-end",
    description: "",
    technologies: ["html", "css", "node.js", "express.js", 
      "mongoose", "mongodb", "heroku"],
    image: "../assets/images/StrangerDrinks300.png",
  },
  {
    title: "Dookie Data",
    deployment: "https://dookie-data.herokuapp.com/",
    githubRepo: "baby-tracker",
    description: "",
    technologies: ["html", "css", "node.js", "express.js", 
      "mongoose", "mongodb", "dayjs", "heroku"],
    image: "../assets/images/baby-tracker.png",
  },
  {
    title: "Tic Tac Toe",
    deployment: "https://ttt.crawfordwebdev.com/",
    githubRepo: "ttt-weekend",
    description: "",
    technologies: ["html", "css", "javascript"],
    image: "../assets/images/ttt-weekend.png",
  },
]

function contactPageHTML() {
  let html = ""
  for (let item in socialMedia) {
    html += `<a target="_blank" rel="noopener" href="${socialMedia[item].url}">${socialMedia[item].img}</a>
    `
  }
  return html
}

let projectMarkup = workPieces.map(project =>
  `
    <div class="card text-center" style="width: 18rem;">
      <img src="${project.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div>
          <a target="_blank" rel="noopener" href="${socialMedia.github.url}/${project.githubRepo}" class="btn btn-primary">GitHub</a>
          <a target="_blank" rel="noopener" href="${project.deployment}" class="btn btn-secondary">Deployment</a>
        </div>
      </div>
    </div>
  `
).join('')

pages.work.content = `<div id="work-content">${projectMarkup}</div>`

function resumePageMarkup() {
  let professionalExperience, education, databases, programmingLanguages, frontend, backend, otherTechnologies, operatingSystems= ""

  const resumeSeperator = ` <span class="resume-seperator">|</span> `
  const resumeSubSectionClass = `resume-subsection`
  const resumeSectionClass = `resume-section`
  const resumeYearsClass = `resume-years`

  // ICE Map all of these to objects based on key?

  databases = resume.technicalExpertise.databases.map(item => 
    `${item}
    `
  ).join(resumeSeperator)

  programmingLanguages = resume.technicalExpertise.progLanguages.map(item => 
    `${item}
    `
  ).join(resumeSeperator)

  frontend = resume.technicalExpertise.frontend.map(item => 
    `${item}
    `
  ).join(resumeSeperator)

  backend = resume.technicalExpertise.backend.map(item => 
    `${item}
    `
  ).join(resumeSeperator)

  otherTechnologies = resume.technicalExpertise.otherTechnologies.map(item => 
    `${item}
    `
  ).join(resumeSeperator)

  operatingSystems = resume.technicalExpertise.operatingsystems.map(item => 
    `${item}
    `
  ).join(resumeSeperator)

  professionalExperience = resume.professionalExperience.map(item => 
    `<div class="${resumeSectionClass}">
      <span class="${resumeSubSectionClass}">${item.title}${companyExists(item.company)}</span>
      <div class="${resumeYearsClass}">${item.years}</div>
    </div>
    `
  ).join('')

  education = resume.education.map(item => 
    `<div class="${resumeSectionClass}">
      <span class="${resumeSubSectionClass}">${item.school}${companyExists(item.degree)}</span>
      <div class="${resumeYearsClass}">${item.years}</div>
    </div>
    `
  ).join('')

  return `
  <h1>${resume.title}</h1>
  <h2>Technical Expertise</h2>
  <div>
    <span class="${resumeSubSectionClass}">Databases: </span>${databases}
  </div>
  <div>
    <span class="${resumeSubSectionClass}">Programming: </span>${programmingLanguages}
  </div>
  <div>
    <span class="${resumeSubSectionClass}">Front-end: </span>${frontend}
  </div>
  <div>
    <span class="${resumeSubSectionClass}">Back-end: </span>${backend}
  </div>
  <div>
    <span class="${resumeSubSectionClass}">Other Technologies: </span>${otherTechnologies}
  </div>
  <div>
    <span class="${resumeSubSectionClass}">Operating Systems: </span>${operatingSystems}
  </div>
  <h2>Professional Experience</h2>
  ${professionalExperience}
  <h2>Education</h2>
  ${education}
  `
}

pages.resume.content = resumePageMarkup()

function companyExists(value) {
  let html = ""
  if (value !== "") {
    html += `: ${value}`
  }
  return html
}


const imageList = workPieces.map(project => project.image)

export {
  workPieces,
  pages,
  resume,
  imageList,
}
