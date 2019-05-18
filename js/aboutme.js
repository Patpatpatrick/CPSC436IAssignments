var currIndex = 0;

window.onload = function () {

    showSlides(currIndex);

    var prev = document.getElementById("plusSlidesMinus1");
    var next = document.getElementById("plusSlidesPlus1");
    var dots = document.getElementsByClassName("dot");

    prev.onclick = function(){
        plusSlides(-1,dots.length);
    };
    next.onclick = function(){
        plusSlides(1,dots.length);
    };

    // The reason why I use a for loop is to avoid magic number smell code!!
    for(var i = 0; i < dots.length; i++){
        //Wrong!
        // dots[i].onclick = function(){
        //     currentSlide(i);
        // };
        var func =function(index){
            dots[index].onclick = function(){
                currentSlide(index);
            };
        }
        func(i); 
    }
}

function plusSlides(increment,total) {
    currIndex += increment;
    currIndex %= total;
    currIndex = currIndex < 0 ? total + currIndex : currIndex;
    showSlides();
}

function currentSlide(i) {
    console.log("i is" + i);
    currIndex = i;
    console.log(currIndex);
    showSlides();
}

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var i;
    console.log(currIndex);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(currIndex);
    slides[currIndex].style.display = "block";  
    dots[currIndex].className += " active";
}