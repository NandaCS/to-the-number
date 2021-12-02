(async () => {
// --
  const data = await window.loadData('data/letters.csv')

  data.forEach(async (item) => {
    const html = await window.htmlFromTemplate('templates/star.html', item)

    const sf = document.querySelector('#star-field')
    sf.innerHTML = html

    const div = document.createElement('div')
    div.innerHTML = html
    div.style.position = 'absolute'
    div.style.backgroundColor = 'blue'
    // div.style.left = 'X'
  })


  const dl = document.createElement('datalist')
  dl.id = 'number'
  data.forEach((item) => {
    const o = document.createElement('option')
    o.value = item.name
    dl.appendChild(o)
  })

// ..
})()
