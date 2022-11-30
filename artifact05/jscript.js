var myImages =["https://i.pinimg.com/564x/91/59/ae/9159ae773b163ba843a11c79de28a854.jpg", "https://i.pinimg.com/564x/bc/13/6e/bc136e341eae443c1f50f1ccc61f580b.jpg","https://i.pinimg.com/564x/b4/a9/ad/b4a9ad4d85058e3052da6da670393f66.jpg","https://i.pinimg.com/564x/51/b1/16/51b1166ad87ff56089e82768edb4e9e1.jpg","https://i.pinimg.com/564x/4c/b6/1f/4cb61f710f515ad3a75dadb446a89682.jpg"];


var captionImages =["The Skateboarding Crab","And Juno the Jellyfish","Went to eat seaweed for lunch","Then they met up with a whale","and went back home for a party"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
