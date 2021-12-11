(async () => {
  //
  window.addEventListener('mousemove', (e) => {
    const reveal = document.querySelector('.blue-reveal')
    reveal.style.left = e.clientX - reveal.offsetWidth / 2 + 'px'
    reveal.style.top = e.clientY - reveal.offsetHeight / 2 + 'px'
  })

  const data = await window.loadData('data/letters.csv')

  data.forEach(async (item) => {
    const html = await window.htmlFromTemplate('templates/star.html', item)

    const sf = document.querySelector('#star-field')
    sf.innerHTML += html
  })

  function updateStar (star) {
    star.style.position = 'absolute'
    star.style.left = Math.random() * window.innerWidth - star.offsetWidth + 'px'
    star.style.top = Math.random() * window.innerHeight - star.offsetHeight + 'px'
    star.addEventListener('click', () => {
      window.alert('hello')
    // HOW TO MAKE THIS CLICK EVENT OPEN THE LETTER//
    })
    star.addEventListener('mouseover', () => {
      star.style.opacity = 1
    })
    star.addEventListener('mouseout', () => {
      star.style.opacity = 0
    })
  }

  const checker = setInterval(() => {
    const stars = document.querySelectorAll('.star-container')
    if (stars.length === data.length) {
      clearInterval(checker)
      stars.forEach(updateStar)
    }
  }, 100)

  // LETTERS PART //
  const letter = await window.loadData('data/letters.csv')

  letter.forEach(async (item) => {
    const html = await window.htmlFromTemplate('templates/letter.html', item)

    const le = document.querySelector('#letter-field')
    le.innerHTML += html
  })

  const dl = document.createElement('datalist')
  dl.id = 'number'
  data.forEach((item) => {
    const o = document.createElement('option')
    o.value = item.name
    dl.appendChild(o)
  })

  // link transitions start

  const test = document.querySelector('#testlink')
  test.addEventListener('click', () => {
    const minfo = document.querySelector('#maininfo')
    const letter = document.querySelector('#letter')
    minfo.style.display = 'none'
    letter.style.display = 'block'
  })

  const lm = document.querySelector('#learnmorelink')
  lm.addEventListener('click', () => {
    const minfo = document.querySelector('#maininfo')
    const lmore = document.querySelector('#learnmore')
    minfo.style.display = 'none'
    lmore.style.display = 'block'
  })

  const lm2 = document.querySelector('#learnmorelink')
  lm2.addEventListener('click', () => {
    const ctinfo = document.querySelector('#contactinfo')
    const lmore = document.querySelector('#learnmore')
    ctinfo.style.display = 'none'
    lmore.style.display = 'block'
  })

  const lm3 = document.querySelector('#learnmorelink')
  lm3.addEventListener('click', () => {
    const join = document.querySelector('#join')
    const lmore = document.querySelector('#learnmore')
    join.style.display = 'none'
    lmore.style.display = 'block'
  })

  const ct = document.querySelector('#contactlink')
  ct.addEventListener('click', () => {
    const minfo = document.querySelector('#maininfo')
    const ctinfo = document.querySelector('#contactinfo')
    minfo.style.display = 'none'
    ctinfo.style.display = 'block'
  })

  const ct2 = document.querySelector('#contactlink')
  ct2.addEventListener('click', () => {
    const lmore = document.querySelector('#learnmore')
    const ctinfo = document.querySelector('#contactinfo')
    lmore.style.display = 'none'
    ctinfo.style.display = 'block'
  })

  const ct3 = document.querySelector('#contactlink')
  ct3.addEventListener('click', () => {
    const join = document.querySelector('#join')
    const ctinfo = document.querySelector('#contactinfo')
    join.style.display = 'none'
    ctinfo.style.display = 'block'
  })

  const jo = document.querySelector('#joinlink')
  jo.addEventListener('click', () => {
    const minfo = document.querySelector('#maininfo')
    const join = document.querySelector('#join')
    minfo.style.display = 'none'
    join.style.display = 'block'
  })

  const jo2 = document.querySelector('#joinlink')
  jo2.addEventListener('click', () => {
    const lmore = document.querySelector('#learnmore')
    const join = document.querySelector('#join')
    lmore.style.display = 'none'
    join.style.display = 'block'
  })

  const jo3 = document.querySelector('#joinlink')
  jo3.addEventListener('click', () => {
    const ctinfo = document.querySelector('#contactinfo')
    const join = document.querySelector('#join')
    ctinfo.style.display = 'none'
    join.style.display = 'block'
  })

// ..
})()
