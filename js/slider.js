const slider = document.getElementById('slider')

const slides = document.querySelectorAll('#slider .slide')
console.log(slides)
console.log(slides.length-1)
let i = 0

function next () {
    show(i + 1)
}

function prev () {
    show(i - 1)
}

function show (value) {
    slides[i].classList.remove('active')
    i = value    
    if(i> slides.length-1){ i= 0 }
    if(i == -1) { i= slides.length-1 }
    slides[i].classList.add('active')
    gsap.from(".active", {duration: 1, y: -10, ease:"elastic"});

}
