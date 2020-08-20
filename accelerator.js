// TASKS
// [] básico de clean code nesse código
// [] melhorar a organização das pastas no código

const interval = setInterval(() => {
  const header = document.querySelector('._1QUKR')
  if (header) {
    console.log(header)
    clearInterval(interval)

    // TASKS
    // [] criar elemento para conter dois botões (um de diminuir e um de aumentar) e um indicador de velocidade atual

    const button = document.createElement('button')
    button.innerHTML = '+'
    button.classList.add('twoTimesButton')

    button.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio')
      audios.forEach((audio) => {
        audio.playbackRate += 0.5
        button.innerHTML = audio.playbackRate
      })
    })

    header.appendChild(button)
  }
},1000)