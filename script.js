
var $ = e => document.querySelector(e)
var $$ = es => document.querySelectorAll(es)

var nav = $('.nav')
var navBtn = $('.nav-mobile__button')
var navMenu = $('.nav-menu')
var toTop = $('.toTop')
navBtn?.addEventListener('click', () => {
  if(navMenu.classList.contains('open-nav')){
    clearInterval()
    navMenu.classList.remove('open-nav')
    navMenu.classList.add('close-nav') 
    navBtn.classList.remove('menuBtnAnim')
    setTimeout(() => {
      navMenu.classList.remove('close-nav')
    }, 700);
  }else{
    clearInterval()
    navMenu.classList.add('open-nav')
    navMenu.classList.remove('close-nav') 
    navBtn.classList.add('menuBtnAnim')
  }
})
navMenu?.addEventListener('click', () => {
  if(window.innerWidth < 991){
    clearInterval()
    navMenu.classList.remove('open-nav')
    navMenu.classList.add('close-nav') 
    navBtn.classList.remove('menuBtnAnim')
    setTimeout(() => {
      navMenu.classList.remove('close-nav')
    }, 700);
  }
})
var oldInd = 0
window.addEventListener('scroll', e => {
  if(window.scrollY > 700){
    toTop.style.display = 'flex'
    nav.classList.remove('hide-navbar')
    nav.classList.add('show-navbar')
    document.body.style.marginTop = `${nav.clientHeight}px`
  }else if(window.scrollY > 600 && window.scrollY < 700 && window.scrollY < oldInd){
    nav.classList.remove('show-navbar')
    nav.classList.add('hide-navbar')
  }else if(window.scrollY < 300){
    toTop.style.display = 'none'
    document.body.style.marginTop = 0
    nav.classList.remove('show-navbar')
    nav.classList.remove('hide-navbar')
  }
  $$('.tt').forEach(t => {
    if(t.offsetTop < (window.scrollY + (window.innerWidth < 600 ? innerHeight / 3 : innerHeight))){
      t.style.transform = "translateY(0)"
      t.style.opacity = 1
    }
  })
  oldInd = window.scrollY
})

var time = 20715
var counter = $('.counter')

var timer = (time) => {
  var h = Math.floor(time / 60 / 60) 
  var m = Math.floor(time / 60) - (h * 60) 
  var s = time - ((h * 60 * 60) + (m * 60))
  return `${h < 10 ? "0" : ''}${h}:${m < 10 ? "0" : ''}${m}:${s < 10 ? "0" : ''}${s}`
}

var endTime = 12296
var shopEndTimes = $$('.shopEndTime')
setInterval(() => {
  time--
  endTime--
  shopEndTimes.forEach(e => {
    e.textContent = timer(endTime)
  });
  counter.textContent = timer(time)
}, 1000)

window.addEventListener('load', e => {
  setTimeout(()=>{
    $('.loader div span').classList.add('l0')
    setTimeout(() => {
      $('.loader').classList.add('hide-loader')
      setTimeout(() => {
        $('.loader').style.display = 'none'
      }, 500)
    }, 500)
  }, 2000)
})
