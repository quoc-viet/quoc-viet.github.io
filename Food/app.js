// header 

window.onscroll = function() { scrollFunction() };
var header = document.getElementById("header")
var nav = document.querySelector('.header-navbar ul')

function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
        // header.style.height = "70px"
        nav.style.transform = "scale(0.8)"
    } else {
        // header.style.height = "100px"
        nav.style.transform = "scale(1)"

    }
}

var menuBtn = document.querySelectorAll('.btn-menu')
var dishList = document.querySelectorAll('.dish-items')

menuBtn.forEach((btn, i) => {
    const dishItem = dishList[i]
    btn.onclick = function() {
        document.querySelector('.btn-menu.active').classList.remove('active')
        document.querySelector('.dish-items.active').classList.remove('active')
        this.classList.add('active')
        dishItem.classList.add('active')
    }
})