console.log("This is my portforlio web page")


//popup loading message
var hours =9
	if (hours<12){
		alert("Good Morning!")
	}
	else{
		alert("Good Afternoon!")
	}
//****************************************************************

//Smooth Scrolling
document.addEventListener('DOMContentLoaded',Function(){
																		//Add event listner to navigation links
	const navLinks = document.querySelectorAll('nav ul li a');
	navLinks.forEach(function(Link)){
		link.addEventListener('click',function(event)){
			event.preventDefault(); 									//prevent Default anchor behavior
			const targetId = this.getAttribute('href').substring(1); 	//Get the target element id
			const targetElement = document.getElementById(targetId); 	//Get the target element
			if(targetElement){
			targetElement.scrollInfoView({behavior: 'smooth'}); 	//Scroll to the target element smoothly
			}
		};
	};
});
//*****************************************************************

//View all Button
$(document).ready(function(){
	$("button").click((function){
		$("p").toggle();
	};
});
//*****************************************************************

//Automatic scrolling slide bar
var wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('mouseover', function () {
  this.style.animationPlayState = 'paused';
});

wrapper.addEventListener('mouseout', function () {
  this.style.animationPlayState = 'running';
});
//****************************************************************

//Validation Form
function validateForm(){
	let x = document.forms["myForm"]["fname"].value;
	if(x == ""){
		alert("Name must be filled out");
		return false;
	}
}
//****************************************************************

//Hover Image
function ChangeImage(x, image) {
    if (x == 1) {
        image.src = 'images/h2.jpeg';
    }
    if (x == 2) {
        image.src = 'images/h3.jpeg';
    }
}

//****************************************************************