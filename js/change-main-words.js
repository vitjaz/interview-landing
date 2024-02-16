const words = ['ПУТИ', 'РАБОТУ', 'НАСТАВНИКА', 'СОБЕСЕДОВАНИЕ', 'ЭКСПЕРТОВ', 'ВОЗМОЖНОСТИ', 'НОВЫЙ ОПЫТ', 'СВЯЗИ', 'КАДРЫ', 'СОВЕТ'];

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