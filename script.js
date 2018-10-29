var SLIDEINDEX = 100

showSlides(SLIDEINDEX)

function showSlides(index) {
    // a variável recebe a array formada pelo elementos DOM selecionados pela classe
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll('.dot-navigation');

    if (index >= slides.length) SLIDEINDEX = 0;
    if (index < 0) SLIDEINDEX = slides.length -1;

    for ( var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active-dot');
        dots[i].style.backgroundColor = '#d6d6d6';
    }

    slides[SLIDEINDEX].style.display = 'block';
    dots[SLIDEINDEX].style.backgroundColor = 'black';
    dots[SLIDEINDEX].classList.remove('active-dot');
}

// showSlides + setInterval = os slides mudam sem click
setInterval(function( ){
    showSlides(++SLIDEINDEX)
}, 10000)


// addEvenListenter - ao clicar nas setas os slides trocam
document.querySelector('#arrow-prev').addEventListener
("click", function(){
        showSlides(--SLIDEINDEX);
})

document.querySelector('#arrow-next').addEventListener
("click", function(){
    showSlides(++SLIDEINDEX);
})

// Ao clicar nos pontos os slides também trocam
document.querySelectorAll(".dot-navigation").forEach(function
    (element){
        element.addEventListener("click", function(){
            var dots = Array.prototype.slice.call(this.parentElement.children),
                dotIndex = dots.indexOf(element);
                showSlides(SLIDEINDEX = dotIndex)
            
        })
    })

