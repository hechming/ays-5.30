window.onload=function(){
	$(".rtpart").find(".fch").hover(function(){
		$(this).css("background","#fff");
		$(".list-unstyled").show(1,function(){
			$(".list-unstyled").find("li").hover(function(){
				$(this).find("a").css("color","red");
			},function(){
				$(this).find("a").css("color","gray");
			});			
		});
		$(".fch").find(".myLove").css("color","red");
	},function(){
		$(this).css("background","none");
		$(".list-unstyled").hide();
		$(".fch").find(".myLove").css("color","gray");
	})
	$("window").scroll("10",function(){
		if(scrollTop >= 10){
			$(".btop").animate({"display":"block"},1000);
		}
	})
	let oMsg = document.getElementsByClassName("msg")[0];
	let oMsg1 = document.getElementsByClassName("msg1")[0];
	let olis = oMsg1.getElementsByTagName("li");
	let oBtn1 = document.getElementById('btn1');
	let oBtn2 = document.getElementById("btn2");
	let index = 0;
	for(var i = 0,len = olis.length;i< len ;i++){
		
	}
	oBtn1.onclick = function(){
		
	}
	
}
