'use strict'
let img
var gFontIncrs = 0

function renderMeme() {
  const meme = getMeme()
  const img = getImg(meme.selectedImgId)
  drawImg(img.url)
  
  meme.lines.forEach(line => {
    drawText(line)

  })
  if(meme.lines[gMeme.selectedLineIdx].clicked===true)
  drawRect()
}

function drawImg(url) {
  img = new Image()
  img.src = url

  const fontSize = Math.floor(gCanvas.width / 10);
  const yOffset = gCanvas.height / 25;

  
  gCtx.drawImage(img, 0, 0,gCanvas.width,gCanvas.height);
  
}

function drawRect() {
  const line= getSelectedLine()
  gCtx.strokeRect(line.pos.x-150, line.pos.y+10, 300, -50)
}

function drawText(line) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = line.strokeColor
  gCtx.fillStyle = line.color
  gCtx.font = `${line.size}px ${line.font}`
  gCtx.textAlign = line.align
  
  gCtx.fillText(line.txt, line.pos.x, line.pos.y)
  gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
}

function onDownloadMeme() {
  downloadMeme()
}

function onIncrease() {
  increase()
  renderMeme()
}

function onDecrease() {
  decrease()
  renderMeme()
}
function onSwitchLine() {
  switchLine()
  renderMeme()
  drawRect()
}

function onSetText(txt) {
  setText(txt)
  renderMeme()
}

function onSetFillColor(color) {
  setFillColor(color)
  renderMeme()
}

function onSetStrokeColor(color) {
  setStrokeColor(color)
  renderMeme()
}

function onAddLine() {
  const newLine = addLine()
  gMeme.lines.push(newLine)
  renderMeme()

}
function onDeleteLine() {
  deleteLine()
  renderMeme()
}
function onUpAlignment(){
  upAlignment()
  renderMeme()
}

function onDownAlignment(){
  downAlignment()
  renderMeme()
}

function onAlignmentToRight(){
  alignmentToRight()
  renderMeme()
}
function onAlignmentToLeft(){
  alignmentToLeft()
  renderMeme()
}
function onAlignmentToCenter(){
  alignmentToCenter()
  renderMeme()
}

function resizeCanvas(ev) {
  if(window.innerWidth<780){
  gCanvas.width =300
  gCanvas.height =300}
  else{ gCanvas.width=500
    gCanvas.height =500}

  renderMeme()
}
window.onresize=resizeCanvas;
