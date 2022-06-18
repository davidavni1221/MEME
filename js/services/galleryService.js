'use strict'

const gImgs = [
  { id: 1, url: 'images/memes/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'images/memes/2.jpg', keywords: ['funny', 'cat'] },
  { id: 3, url: 'images/memes/3.jpg', keywords: ['funny', 'cat'] },
  { id: 4, url: 'images/memes/4.jpg', keywords: ['funny', 'cat'] },
  { id: 5, url: 'images/memes/5.jpg', keywords: ['funny', 'cat'] },
  { id: 6, url: 'images/memes/6.jpg', keywords: ['funny', 'cat'] },
  { id: 7, url: 'images/memes/7.jpg', keywords: ['funny', 'cat'] },
  { id: 8, url: 'images/memes/8.jpg', keywords: ['funny', 'cat'] },
  { id: 9, url: 'images/memes/9.jpg', keywords: ['funny', 'cat'] },
  { id: 10, url: 'images/memes/10.jpg', keywords: ['funny', 'cat'] },
  { id: 11, url: 'images/memes/11.jpg', keywords: ['funny', 'cat'] },
  { id: 12, url: 'images/memes/12.jpg', keywords: ['funny', 'cat'] },
  { id: 13, url: 'images/memes/13.jpg', keywords: ['funny', 'cat'] },
  { id: 14, url: 'images/memes/14.jpg', keywords: ['funny', 'cat'] },
  { id: 15, url: 'images/memes/15.jpg', keywords: ['funny', 'cat'] },
  { id: 16, url: 'images/memes/16.jpg', keywords: ['funny', 'cat'] },
  { id: 17, url: 'images/memes/17.jpg', keywords: ['funny', 'cat'] },
  { id: 18, url: 'images/memes/18.jpg', keywords: ['funny', 'cat'] },
]

function getImgs() {
  return gImgs
}

function getImg(imgId) {
  return gImgs.find(img => img.id === imgId)
}
