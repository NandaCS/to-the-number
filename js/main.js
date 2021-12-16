(async () => {
  //
  window.addEventListener('mousemove', (e) => {
    const reveal = document.querySelector('.blue-reveal')
    reveal.style.left = e.clientX - reveal.offsetWidth / 2 + 'px'
    reveal.style.top = e.clientY - reveal.offsetHeight / 2 + 'px'
  })

  const data = await window.loadData('data/letters.csv')
  const dict = {}
  data.forEach(item => { dict[item.Timestamp] = item })

  data.forEach(async (item) => {
    const html = await window.htmlFromTemplate('templates/star.html', item)

    const sf = document.querySelector('#star-field')
    sf.innerHTML += html
  })

  function updateStar (star) {
    star.style.position = 'absolute'
    // random x position, from just right of the main info to the width of the page
    const mi = document.querySelector('#maininfo')
    const mainWidth = mi.offsetWidth + mi.offsetLeft
    const w = (window.innerWidth - star.offsetWidth) - mainWidth
    const x = (Math.random() * w) + mainWidth
    // random y position, from top of page (0) to the bottom - full star height
    const y = Math.random() * (window.innerHeight - star.offsetHeight)
    star.style.left = x + 'px'
    star.style.top = y + 'px'

    star.addEventListener('click', async () => {
      const num = star.querySelector('.star-number').textContent
      const item = dict[num]
      const html = await window.htmlFromTemplate('templates/letter.html', item)
      const le = document.querySelector('#letter-field')
      le.innerHTML = html
      const minfo = document.querySelector('#maininfo')
      const letter = document.querySelector('#letter')
      minfo.style.display = 'none'
      letter.style.display = 'block'
      const ct = document.querySelector('#contactinfo')
      const lct = document.querySelector('#letter')
      ct.style.display = 'none'
      lct.style.display = 'block'
      const jo = document.querySelector('#join')
      const ljo = document.querySelector('#letter')
      jo.style.display = 'none'
      ljo.style.display = 'block'
      const lm = document.querySelector('#learnmore')
      const llm = document.querySelector('#letter')
      lm.style.display = 'none'
      llm.style.display = 'block'
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

  // search bar?
  const dl = document.createElement('datalist')
  dl.id = 'number'
  data.forEach((item) => {
    const o = document.createElement('option')
    o.value = item.name
    dl.appendChild(o)
  })

  // link transitions start
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
