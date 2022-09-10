// Fig. 10.12: RandomPicture2.js

// Random image selection using arrays

window.onload = choosePic;

var myPix = new Array("Pictures/1.png" , "Pictures/2.png", "Pictures/3.png", "Pictures/4.png", "Pictures/5.png", "Pictures/6.png", "Pictures/7.png");

function choosePic() {
     var index = Math.floor(Math.random() * myPix.length);
     document.getElementById("image").src = myPix[index];
}	