const interval = setInterval(() => {
  const header = document.querySelector('._1QUKR')

  if (header) {
    clearInterval(interval)

    const container = document.createElement('div')
    const increaseButton = document.createElement('button')
    const speedValue = document.createElement('p')
    const decreaseButton = document.createElement('button')
    
    increaseButton.innerHTML = '>'
    speedValue.innerHTML = '1'
    decreaseButton.innerHTML = '<'

    container.classList.add('speed-container')
    increaseButton.classList.add('speed-button')
    increaseButton.classList.add('button-right')
    speedValue.classList.add('speed-value')
    decreaseButton.classList.add('speed-button')
    decreaseButton.classList.add('button-left')

    increaseButton.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio')
      audios.forEach((audio) => {
        if (parseFloat(audio.playbackRate) < 3) {
          audio.playbackRate += 0.5
          speedValue.innerHTML = audio.playbackRate
        }
      })
    })

    decreaseButton.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio')
      audios.forEach((audio) => {
        if (parseFloat(audio.playbackRate) > 0.5) {
          audio.playbackRate -= 0.5
          speedValue.innerHTML = audio.playbackRate
        }
      })
    })

    container.append(decreaseButton)
    container.append(speedValue)
    container.append(increaseButton)
    header.appendChild(container)
    
  }
},100)
