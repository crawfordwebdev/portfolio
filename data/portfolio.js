const socialMedia = [
  {
    name: "GitHub",
    homepage: "https://github.com/",
    profile: "crawfordwebdev",
    url: "https://github.com/crawfordwebdev",
    img: `<i class="fa-brands fa-github"></i>`
  },
  {
    name: "LinkedIn",
    homepage: "https://www.linkedin.com/in/",
    profile: "crawfordmichaeldev",
    url: "https://www.linkedin.com/in/crawfordmichaeldev/",
    img: `<i class="fa-brands fa-linkedin-in"></i>`
  },
  {
    name: "Twitter",
    homepage: "https://twitter.com/",
    profile: "crawfordwebdev",
    url: "https://twitter.com/crawfordwebdev",
    img: `<i class="fa-brands fa-twitter"></i>`
  },
]

const resume = {
  databases: ["MySQL/MariaDB"],
  progLanguages: ["HTML5","CSS3","JavaScript"],
  operatingsystems: ["Linux (Debian, Ubuntu, CentOS/RedHat)", "Microsoft Windows 10"]

}

const workPieces = [
  {
    name: "Tic Tac Toe",
    url: "https://ttt.crawfordwebdev.com/",
    githubRepo: "ttt-weekend",
    description: "",
    technologies: ["html", "css", "javascript"],
    screenshot: "",
  },
]

const pages = [
  {
    navText: "About",
    title: "About",
    id: "about-section",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam minus qui unde sapiente ea commodi voluptatum a, delectus, rerum quis labore illum sunt dolorum accusamus architecto, dignissimos esse porro.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sit nostrum porro odio, pariatur delectus ex quaerat nam explicabo magni illum praesentium quis quam voluptatum voluptatem earum ab. Perferendis, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi minima, nisi esse impedit fuga doloremque aperiam repellat deserunt nulla soluta qui ut recusandae sunt debitis obcaecati quia. Doloribus, perspiciatis.`,
  },
  {
    navText: "Resume",
    title: "Resume",
    id: "resume-section",
    content: "",
  },
  {
    navText: "Contact",
    title: "Contact Points",
    id: "contact-section",
    content: `<div id="contact-points">${contactPageHTML()}</div>`,
  },
  {
    navText: "Work",
    title: "Work",
    id: "work-section",
    content: "",
  },
]


function contactPageHTML() {
  let html = ""
  socialMedia.forEach(function (el) {
    html += `<a href="${el.url}">${el.img}</a>
    `
  })
  return html
}


export {
  workPieces,
  pages
}