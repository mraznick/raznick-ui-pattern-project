//ISSUE: can't figure out how to move createList(); to global scale...
//...so I can use the response (AKA the array of images) in my event listener
// - keep in mind, CSS will need to be adjusted to match the data attribute for the active image (and the inactive image?)

//IDEAL OUTCOME: Set the Promise in get request or whatever to assign data-active to only the first image...
//...and the rest are inactive so the site loads with only one image in the carousel...
//...When the button is clicked, it removes the data-active attribute from the current image...
//...and places it on the next image.

//QUESTION: Should I be creating two separate event listeners for each button...
//...so that they add/delete the data active to/from the image in their respective direction?

let url = 'https://ghibliapi.herokuapp.com/films'

fetch(url)
  .then(res => res.json())
  .then(res => {

    for (let i = 0; i < res.length; i++) {
      function createList() {

        let listNode = document.createElement('li')
        listNode.className = "ghibli-film"

        let filmImg = document.createElement('img')
        filmImg.className = "film-cover"
        filmImg.src = `${res[i].image}`

        listNode.appendChild(filmImg)

        document.querySelector('.ghibli-list').appendChild(listNode)
      }
      createList();
      document.querySelector('.film-cover').classList.add("active")
    }
  })



let allImages = document.getElementsByClassName('film-cover')
const buttons = document.querySelectorAll('[data-arrow-button]')
let index = 0

buttons.forEach(button => {

  button.addEventListener('click', () => {

    const offset = button.dataset.arrowButton === "next" ? 1 : -1
    index += offset

    if (index > allImages.length - 1) {
      index = 0;
    }
    if (index < 0) {
      index = allImages.length - 1
    }
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].classList.remove('active')
    }
    allImages[index].classList.add('active')
  })

})



// const buttons = document.querySelectorAll('.button')
// buttons.forEach(button => {

//   button.addEventListener('click', () => {

//     function setActive() {

//       for (let i = 0; i < resImages.length; i++) {
//         if (resImages[i].dataset.active === 'no') {
//           resImages[i].dataset.active === 'yes';

//         }

//       }

//     }

//     setActive();

//   })

// })




//START WDS CAROUSEL BUTTON CODE - NEW BUTTON CODE ON LINE 45

//END WDS CAROUSEL BUTTON CODE