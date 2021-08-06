
//defines the slideIndex variable
var slideIndex = 1;
showSlides(slideIndex);

// This line lets the next/previous controls function.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// This line allows the for the thumbnail image controls found on the slideshow.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Allows for the showslides function to be executed when called for.
//document.getElement tag gets all elements from the specified class name
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
 
 //if statement allows users to go back and forth between images on the slideshow. This also declares the length of the slideshow.
 if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 //Declares of dot length 
 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //Declares style display to block
  slides[slideIndex-1].style.display = "block";
  
  //Allows styling of the dot styleIndex.
  dots[slideIndex-1].className += " active";
}