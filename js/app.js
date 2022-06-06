import * as portfolio from "../data/portfolio.js"

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const navbarEl = document.querySelectorAll('.nav-item')
const navbar = document.querySelector('#navbar')
const contentSectionEl = document.querySelectorAll('.section-content')
const contentContainer = document.querySelector('#content')

console.log(contentSectionEl)


/*----------------------------- Event Listeners -----------------------------*/
navbar.addEventListener('click', navigateContent)



/*-------------------------------- Functions --------------------------------*/

function navigateContent(evt) {
  let selection = evt.target

  // Check if it is a navigation item
  if (selection.classList[0] == 'nav-item') {
    // textContent and navText should be the same
    console.dir(selection)

    let sectionContent = portfolio.pages.find(el => el.navText === selection.textContent)

    console.log(sectionContent)
    console.log(`Selection ID: ${sectionContent.id}`)
    console.log(contentSectionEl)

    let sectionHTML = document.querySelector(sectionContent.id)

    console.dir(`Section HTML: ${sectionHTML}`)
    renderContent(sectionContent)


    // Need to match object with content we're looking for



  }


}

function renderContent(pageObj) {
  contentContainer.innerHTML = ""
  contentContainer.innerHTML = 
    `<h1>${pageObj.title}</h1>
    <p>${pageObj.content}</p>`

}