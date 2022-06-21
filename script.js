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
