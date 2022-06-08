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
  databases: ["MySQL/MariaDB"],
  progLanguages: ["HTML5", "CSS3", "JavaScript"],
  operatingsystems: ["Linux (Debian, Ubuntu, CentOS/RedHat)", "Microsoft Windows 10"]

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
    content: "",
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
    title: "Tic Tac Toe",
    deployment: "https://ttt.crawfordwebdev.com/",
    githubRepo: "ttt-weekend",
    description: "",
    technologies: ["html", "css", "javascript"],
    image: `../assets/images/ttt-weekend.png`,
  },
]

function contactPageHTML() {
  let html = ""
  for (let item in socialMedia) {
    html += `<a href="${socialMedia[item].url}">${socialMedia[item].img}</a>
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
          <a href="${socialMedia.github.url}/${project.githubRepo}" class="btn btn-primary">GitHub</a>
          <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
        </div>
      </div>
    </div>
  `
).join('')

pages.work.content = projectMarkup



export {
  workPieces,
  pages
}
