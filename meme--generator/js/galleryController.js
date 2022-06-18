'use strict'

function renderGallery() {
  const imgs = getImgs()
  const strHTMLs = imgs.map(
    img => `<img onclick="onImgSelect(${img.id})" src="${img.url}" alt="" />`
  )
  document.querySelector('.gallery-imgs').innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {
  setImg(imgId)
  document.querySelector('.gallery').style.display = 'none'
  document.querySelector('.editor-container').style.display = 'flex'
  renderMeme()
}


