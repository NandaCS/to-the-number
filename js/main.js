(async () => {
// --
  const data = await window.loadData('data/letters.csv')

  data.forEach(async (item) => {
    const html = await window.htmlFromTemplate('templates/star.html', item)

    const sf = document.querySelector('#star-field')
    sf.innerHTML += html

    const sc = sf.querySelector('.star-container:last-child')
    sc.style.position = 'absolute'
    sc.style.left = Math.random() * window.innerWidth + 'px'
    sc.style.top = Math.random() * window.innerHeight + 'px'
    sc.addEventListener('click', () => {
      window.alert('hello')
    })
  })

  const dl = document.createElement('datalist')
  dl.id = 'number'
  data.forEach((item) => {
    const o = document.createElement('option')
    o.value = item.name
    dl.appendChild(o)
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
