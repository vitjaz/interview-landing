const words = ['ПУТИ', 'РАБОТУ МЕЧТЫ', 'НАСТАВНИКА', 'СОБЕСЕДОВАНИЕ', 'ЭКСПЕРТОВ', 'НОВЫЕ ВОЗМОЖНОСТИ', 'НОВЫЙ ОПЫТ', 'СВЯЗИ', 'УВЕРЕННОСТЬ В СЕБЕ'];

const getRandomWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index]
}

const element = document.getElementById('main-dynamic-word')

window.setInterval(() => {
  const randomWord = getRandomWord()
  if (element) {
    element.textContent = randomWord
  }
}, 2000)