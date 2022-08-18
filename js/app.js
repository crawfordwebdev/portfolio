import * as portfolio from "../data/portfolio.js"

/*-------------------------------- Constants --------------------------------*/
const bgMusic = new Audio(`../assets/music/the-introvert-michael-kobrin-10959.mp3`)


/*---------------------------- Variables (state) ----------------------------*/
let musicPlaying = false
let lightMode = true;


/*------------------------ Cached Element References ------------------------*/
const navbarEl = document.querySelectorAll('.nav-item')
const navbar = document.querySelector('.navbar-nav')
const contentContainer = document.querySelector('#content')
const bgMusicBtn = document.getElementById('bgMusic-btn')
const lightDarkBtn = document.querySelector("#light-dark-input")
const navToggleBtn = document.querySelector('.navbar-toggler')
const favicon = document.querySelector("link[rel*='icon']")
const root = document.documentElement;


/*----------------------------- Event Listeners -----------------------------*/
navbar.addEventListener('click', navigateContent)
navbar.addEventListener('click', navbarClass)
bgMusicBtn.addEventListener('click', musicHandler)
lightDarkBtn.addEventListener('click', lightDarkMode)


/*-------------------------------- Functions --------------------------------*/

// Start on about page
renderContent(portfolio.pages['about'])

function navigateContent(evt) {
  let selection = evt.target

  // Check if it is a navigation item
  if (selection.classList[0] == 'nav-item') {
    let key = evt.target.textContent.toLowerCase()
    let sectionContent = portfolio.pages[key]
    renderContent(sectionContent)
  }
}

function renderContent(pageObj) {
  contentContainer.innerHTML = ""
  contentContainer.innerHTML =
    `<h1>${pageObj.title}</h1>
    <p>${pageObj.content}</p>`
}

function navbarClass(evt) {
  let classToModify = "nav-item-highlight"
  for (let item of navbarEl) {
    if (item.classList.contains(classToModify)) {
      item.classList.remove(classToModify)
    }
  }
  evt.target.classList.add(classToModify);
}

function musicHandler(evt) {
  if (!musicPlaying) {
    bgMusic.volume = .3
    bgMusic.play()
    evt.target.textContent = "Pause Music"
    musicPlaying = true
  } else {
    bgMusic.pause()
    evt.target.textContent = "Resume Music"
    musicPlaying = false;
  }
}

function lightDarkMode(evt) {
  let navbarBG, contentBG, textColorBG, lightDarkTextContent, faviconLink

  if (lightMode) {
    // make dark
    navbarBG = '--dark-navbar-bg'
    contentBG = '--dark-content-bg'
    textColorBG = '--dark-text-color'
    lightDarkTextContent = ` Dark  <i class="fa-solid fa-lightbulb">`
    navToggleBtn.classList.add('navbar-toggler-dark')
    faviconLink = "./assets/dark/favicon.ico"
    lightMode = false;
  } else {
    // make light
    navbarBG = '--light-navbar-bg'
    contentBG = '--light-content-bg'
    textColorBG = '--light-text-color'
    lightDarkTextContent = `Light  <i class="fa-solid fa-lightbulb">`
    navToggleBtn.classList.remove('navbar-toggler-dark')
    faviconLink = "./assets/light/favicon.ico"
    lightMode = true;
  }
  root.style.setProperty('--navbar-bg', `var(${navbarBG})`)
  root.style.setProperty('--content-bg', `var(${contentBG})`)
  root.style.setProperty('--text-color', `var(${textColorBG}`)
  lightDarkBtn.innerHTML = lightDarkTextContent
  favicon.href = faviconLink
}