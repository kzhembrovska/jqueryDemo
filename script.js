/* Scripts for jquery demo*/

$(document).ready(function(){

	$("img").hide();
	$(".specialImage").fadeIn("slow"); /* fade in put*/
	
	let buttonCycle = 0;
	let imgCycle = 1;
	let imgTracker = true;
	
	$(".specialImage").click(function(){
		if (imgCycle < 4) {
			$(this).attr("src" , "pics/"+imgCycle+".png");
			imgCycle++;
		}else{
			$(this).attr("src" , "pics/"+imgCycle+".png");
			imgCycle = 1;
			
		};
		// if(imgTracker){
// 			$(this).attr("src" , "pics/"+imgCycle+".png");
// 			ingCycle++;
// 		}
	// 	$(this).ccs("background-color" , "purple"); 
// 		$(this).attr("src", "pics/4.jpg");	
// 		});
// 	
// 	$(".specialImage").hover(function(){
// 		$(this).attr("src", "pics/4.jpg");
	});

	
	$(".imgAdder").click(function(){
		$(".end").append("<img src='pics/3.jpg' class='specialImage'>");
		});
		
})