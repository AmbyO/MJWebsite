


	var a = document.querySelectorAll(".album");
	
	
	for( i=0; i < a.length ; i++ ){
				
		a[i].addEventListener("click", function(e){
				
				var target = e.target.offsetParent.lastElementChild;

				div = document.createElement("DIV");
				
				document.body.appendChild(div);
				
				setStyle();
				
				div.innerHTML = target.alt;
			
			});
		
		} 


function setStyle(){
	
	
				div.style.position = "fixed";
				div.style.height = 500 + "px";
				div.style.width = 500 + "px";
				div.style.top = 0 + "px";
				div.style.left = 0 + "px";
				div.style.zIndex = 300;
				div.style.background = "#ffffff";
	
	
	}
