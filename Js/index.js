
let latestCards = document.querySelectorAll('.latest .card');
let latestMainImg = document.querySelectorAll('.latest #mainImg');
let latestHoverImg = document.querySelectorAll('.latest #hoverImg');

for (let i = 0; i < latestCards.length; i++) {
    let mainSrc = latestMainImg[i].getAttribute('src');
    let hoverSrc = latestHoverImg[i].getAttribute('src');
    latestCards[i].addEventListener('mouseenter', function (e) {
        latestMainImg[i].setAttribute('src', hoverSrc)
    })
    latestCards[i].addEventListener('mouseleave', function (e) {
        latestMainImg[i].setAttribute('src', mainSrc)
    })
}


// to fix header
let header = document.getElementById('header');
let btnUp = document.getElementById('btnUp');

window.onscroll = function () {
    if (window.scrollY > 200) {
        header.classList.add('header-fix')
        btnUp.classList.add('show-btn');
    }
    else {
        header.classList.remove('header-fix')
        btnUp.classList.remove('show-btn');
    }
}
btnUp.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        bahaviour: "smooth"
    })
})

