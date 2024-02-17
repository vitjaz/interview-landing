const blockTwo = document.querySelector('.second-block')
const cardsInBlockTwo = document.getElementsByClassName('card-second-block')

// const options = {
//   // root: по умолчанию window, но можно задать любой элемент-контейнер
//   rootMargin: '0px 0px 100px 0px',
//   threshold: 0,
// }

let count = 0
const callback = (entries) => {
  if (!count) {
    if (entries[0].isIntersecting) {
    blockTwo.classList.remove(['second-block-hide'])
    for (const card of cardsInBlockTwo) {
      card.classList.remove(['card-second-block-hide'])
    }
    count++;
  } else {
    blockTwo.classList.add(['second-block-hide'])
    for (const card of cardsInBlockTwo) {
      card.classList.add(['card-second-block-hide'])
    }
  }
  }
}

const observer = new IntersectionObserver(callback, {
  threshold: 0.1,
})
observer.observe(blockTwo)