window.onscroll = function () {
  window.scrollY > 0 ? header.classList.add("Sticky") : header.classList.remove("Sticky")
}

setTimeout(function () {
  siteWelcome.classList.add("disappear")
}, 700)


let lis = document.querySelectorAll('header nav ul>li')
for (let i = 0; i < lis.length; i++) {
  lis[i].onmouseenter = function () {
    this.getElementsByTagName('ol')[0].classList.add('active')
  }
  lis[i].onmouseleave = function () {
    this.getElementsByTagName('ol')[0].classList.remove('active')
  }
}


let aTags = document.querySelectorAll('#header >nav  li >a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (e) {
    e.preventDefault();
    let a = e.currentTarget
    let href = String(a.getAttribute('href'))
    let element = document.querySelector(href)
    let top = element.offsetTop
    // document.querySelector('html').scrollTo(0, top - 70)

    let j = 1
    let current = window.scrollY
    let tar = (current - (top - 70)) / 50
    var tarG = top - 70
    // let scroll_id = setInterval(function(){
    //   let move = current - tar*j
    //   window.scrollTo(0,move)
    //   j++
    //   if(j==50){
    //     window.clearInterval(scroll_id)
    //     return
    //   }
    // },20)

    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    const coords = {
      x: 0,
      y: current
    };
    const tween = new TWEEN.Tween(coords).to({
        x: 0,
        y: tarG
      }, 500)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        window.scrollTo(0, coords.y)
      })
      .start(); // Start the tween immediately.
  }
}


let marks = document.querySelectorAll('[mark]')
for (let i = 0; i < marks.length; i++) {
  marks[i].classList.add('down')
}

let sks = document.querySelectorAll('#siteSkill .skills li span')
for (let i = 0; i < sks.length; i++) {
  sks[i].classList.add('sksShow')
}

window.onscroll = function () {
  // let marks = document.querySelectorAll('[mark]')
  let min = 0
  let current = window.scrollY
  for (let i = 0; i < marks.length; i++) {
    if (Math.abs(current - marks[min].offsetTop) > Math.abs(current - marks[i].offsetTop)) {
      min = i
    }
  }
  let as = document.querySelectorAll('header nav li a')
  for (let i = 0; i < as.length; i++) {
    as[i].classList.remove('highLight')
  }
  as[min].classList.add('highLight')
  //   for (let i = 0; i < marks.length ; i++){
  //     marks[i].classList.add('rollUp')
  //   }
  marks[min].classList.remove('down')
  marks[min].classList.add('up')
  if(min == 1){
    for(let i = 0;i<sks.length;i++){
      sks[i].classList.remove('sksShow')
    }
  }
}