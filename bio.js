
var readButton = document.querySelector(".read");
	var backButton = document.querySelector("#bio-back-button");
	var openButton = document.querySelector(".watch");
	var backtotop = document.querySelector("#bktotop");
	
	$(readButton).click(function(){
		
		
			$("body").animate({
				
					scrollTop: $(content).offset().top
				
				},"slow");
	});

	
	$(backButton).click(function(){
	
		
		$("body").animate({
			
				scrollTop: $(pageTop).offset().top
			
			},"slow"); 
			
	});
	
	$(backtotop).click(function(){
	
		$("body").animate({
			
				scrollTop: $(content).offset().top
			
			},"slow"); 
			
	});
			
	openButton.onclick = function(){showVid();}


var count = 0;
var nom = 4;


var jacksonF =  setInterval(function(){
		

		count++;
		
		
		
		image[0].src = "images/Jackson5/image" + count + ".jpg";
		image[1].src = "images/solo/image" + count + ".jpg";
		image[2].src = "images/career/image" + count + ".jpg";
		image[3].src = "images/death/image" + count + ".jpg";
		
		animateSlide();
		
		if (count == nom){
			
				count = 0
			
			}				
			



			
		
	
	}, 3000);
			
		
		
function animateSlide(){
		
		var variable = 100;

		var animate = setInterval(function(){
			
			variable--;
				
			image[0].style.left = variable + "%";
			image[1].style.right = variable + "%";
			image[2].style.left = variable + "%";
			image[3].style.right = variable + "%";
				
			if (variable == 0){
					
					clearInterval(animate);
					
			}
				
			
	}, 1);		
		
}
