const slide = document.querySelectorAll(".slide");
let slideNo = 0;

function slideShow(slideNumber) {
    slideNo = slideNumber;
    if (slideNumber < 0) {
        slideNo = slide.length - 1;
    } else if (slideNumber >= slide.length) {
        slideNo = 0;
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[slideNo].style.display = "block";
}

function nextSlide() {
    slideNo++;
    slideShow(slideNo);
}

function previousSlide() {
    slideNo--;
    slideShow(slideNo);
}

slideShow(slideNo);



$(document).ready(function(){
    $(".project").click(function(){
        console.log($(this.children[1]));
        $(this.children[1]).show();
    })
    $(".close-popup").click(function(){
        $(this.children[1]).hide();
    })
})
