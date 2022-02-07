'use strict';


// Ширина скролла
let div = document.createElement('div')
const body = document.querySelector('body')
const header = document.querySelector('.header')

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();


// Событие при вызове модалки
$('#modal').on('show.bs.modal', function () {
  header.style.paddingRight = `${scrollWidth}px`
});
$('#modal').on('hidden.bs.modal', function () {
  header.style.paddingRight = '0'
});


// Смена картинок на главном экране
if(window.innerWidth > 1200){
  const changeImg = () => {
    const img = document.querySelectorAll('.intro__bg')
    let i = 0
    
    const interval = setInterval(() => {
      img.forEach((item) => {
        item.classList.remove('intro__bg--active')
      })
      img[i].classList.add('intro__bg--active')
      i++
      if(i === 3){
        i = 0
      }
    }, 2000)
  }
  changeImg()
}
