'use strict'
var gCanvas
var gCtx

function init() {
    gCanvas = document.querySelector("#meme");
    gCtx = gCanvas.getContext("2d");
    gCanvas.width =500 ;
    gCanvas.height =500 ;
    renderGallery()
    addMouseListeners()
    addTouchListeners()
}


function gallery(){
    document.querySelector('.background-img').style.display='none'
    document.querySelector('.gallery').style.display = 'block'
    document.querySelector('.editor-container').style.display = 'none'
}

function about(){
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor-container').style.display = 'none'
    document.querySelector('.background-img').style.display='block'
    document.querySelector('.heading').style.display='block'
}
