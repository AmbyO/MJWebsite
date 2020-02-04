var menuButton = document.querySelector(".menuButton");
var body = document.body;
var pageTop = document.querySelector("#bio");
var closeMenu = document.querySelector(".closeNav");
var content = document.querySelector("#biography-content");
var close = document.querySelector("#close");
var url = document.URL;
var image = document.querySelectorAll(".bioSlide");
   	
function openNav(){
	
		var nav = document.querySelector(".nav");
		nav.classList.remove("closeanim");
		nav.classList.add("openanim");
	
	}
	

function closeNav(){
	
		var nav = document.querySelector(".nav");
		nav.classList.remove("openanim");
		nav.classList.add("closeanim");
	
	}
	
menuButton.onclick = function(){openNav()}
closeMenu.onclick = function(){closeNav()}

function showVid(){
	
	videoContainer = document.createElement("DIV");
	
	videoContainer.classList.add("videoBio");
	
	body.appendChild(videoContainer);
	
	videoContainer.innerHTML = '<div id="close" onclick = "removeVid()">X</div><iframe src="https://www.youtube.com/embed/RMvIjsGr_Kw" frameborder="0" allowfullscreen></iframe>';
		
	
	}
	
function removeVid(){
	
		
		body.removeChild(videoContainer);
	
	}

