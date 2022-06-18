'use strict'

var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'add text',
      size: 40,
      align: 'center',
      color: 'white',
      strokeColor: 'black',
      font: 'Impact',
      pos: { x: 250, y: 50 },
      clicked: true

    },
    {
      txt: 'add text',
      size: 40,
      align: 'center',
      color: 'white',
      strokeColor: 'black',
      font: 'Impact',
      pos: { x: 250, y: 450 },
      clicked: false
    },
  ],
}

function getMeme() {
  return gMeme
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId
}

function downloadMeme() {
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = document.getElementById('meme').toDataURL()
  link.click();
}

function getSelectedLine() {
  return gMeme.lines[gMeme.selectedLineIdx]
}

function setText(txt) {
  const line = getSelectedLine()
  line.txt = txt
}

function increase() {
  const line = getSelectedLine()
  line.size += 5
}

function decrease() {
  const line = getSelectedLine()
  line.size -= 5
}

function setFillColor(color) {
  const line = getSelectedLine()
  line.color = color
}

function setStrokeColor(color) {
  const line = getSelectedLine()
  line.strokeColor = color
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  }
  else gMeme.selectedLineIdx++
}

function addLine() {
  return {
    txt: 'add text',
    size: 40,
    align: 'center',
    color: 'white',
    strokeColor: 'black',
    font: 'Impact',
    pos: { x: 250, y: 250 },
    clicked: false
  }
}

function deleteLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function upAlignment() {
  const line = getSelectedLine()
  line.pos.y += 10

}

function downAlignment() {
  const line = getSelectedLine()
  line.pos.y -= 10
}

function alignmentToRight() {
  const line = getSelectedLine()
  line.align = 'start'
}

function alignmentToLeft() {
  const line = getSelectedLine()
  line.align = 'end'
}

function alignmentToCenter() {
  const line = getSelectedLine()
  line.align = 'center'
}

function addMouseListeners() {
  gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gCanvas.addEventListener('touchend', onUp)
}

function isLineClicked(clickedPos) {
  const distanceY=40

  const meme=getMeme()

  for (let i = 0; i < meme.lines.length; i++) {
    if(distanceY >=Math.sqrt(( meme.lines[i].pos.y-clickedPos.y)**2))
    {gMeme.selectedLineIdx=i
     gMeme.lines[i].clicked=true
    return true}
  }
  return false
}

function onUp(ev) {
  gMeme.lines[gMeme.selectedLineIdx].clicked=false
  const pos = getEvPos(ev)
  isLineClicked(pos)
  renderMeme()
}

function getEvPos(ev) {

  //Gets the offset pos , the default pos
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY
  }
  // Check if its a touch ev
  if (gTouchEvs.includes(ev.type)) {
    //soo we will not trigger the mouse ev
    ev.preventDefault()
    //Gets the first touch point
    ev = ev.changedTouches[0]
    //Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }
  }
  return pos
}