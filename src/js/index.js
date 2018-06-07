$(function(){
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
	$(window).scroll("10",function(){
		if($(this).scrollTop()>= 10){
			$(".btop").show().click(function(){
				$("body,html").stop().animate({scrollTop : 0},400);
			});
		}else{
			$(".btop").hide();
		}
	})
})
$(function(){
	let oMsg = document.getElementsByClassName("msg")[0];
	let oMsg1 = document.getElementsByClassName("msg1")[0];
	let olis = oMsg1.getElementsByTagName("li");
	let oBtn1 = document.getElementById('btn1');
	let oBtn2 = document.getElementById("btn2");
	let index = 0;
	let timer = null;
	slider();
	for(var i = 0,len = olis.length;i< len ;i++){
		olis[i].index = i;
		olis[i].onmouseenter = function(){
			clearInterval(timer);
		}
		olis[i].onmouseleave = function(){
			slider();
		}
	}
	oBtn1.onclick = function(){
		clearInterval(timer);
		for(var i = 0 ,len = olis.length;i<len;i++){
			olis[i].style.display='block';
		}
		index ++;
		olis[(olis.length-1+index)%olis.length].style.display="none";
		if(index==olis.length){
			index = 0;
		}
		slider();
	}
	oBtn2.onclick = function(){
		clearInterval(timer);
		for(var i = 0 ,len = olis.length;i<len;i++){
			olis[i].style.display='block';
		}
		index --;
		olis[(olis.length - 1 + index) % olis.length].style.display="none";
		if(index < 0){
			index = olis.length - 1;
		}
		slider();
	}
	function slider(){
		clearInterval(timer);
		timer = setInterval(function(){
			for(var i = 0 ,len = olis.length;i<len;i++){
				olis[i].style.display='block';
			}
			index ++;
			olis[(olis.length - 1 + index)%olis.length].style.display="none";
			if(index==olis.length){
				index = 0;
			}
		},1000)
	}
})
$(function(){
	$(".pro_sort").children("li").eq(0).mouseenter(function(){
		$(".about_01").show();
		$(".bg_01+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_01").css("background","url(img/index_ico1.png) -4px -133px no-repeat");
	})
	$(".pro_sort").children("li").eq(0).mouseleave(function(){
		$(".about_01").hide();
		$(".bg_01+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_01").css("background","url(img/index_ico1.png) -4px -102px no-repeat");
	})
	$(".pro_sort").children("li").eq(1).mouseenter(function(){
		$(".about_02").show();
		$(".bg_02+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_02").css("background","url(img/index_ico1.png) -54px -129px no-repeat");
	})
	$(".pro_sort").children("li").eq(1).mouseleave(function(){
		$(".about_02").hide();
		$(".bg_02+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_02").css("background","url(img/index_ico1.png) -54px -92px no-repeat");
	})
	$(".pro_sort").children("li").eq(2).mouseenter(function(){
		$(".about_03").show();
		$(".bg_03+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_03").css("background","url(img/index_ico1.png) -100px -131px no-repeat");
	})
	$(".pro_sort").children("li").eq(2).mouseleave(function(){
		$(".about_03").hide();
		$(".bg_03+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_03").css("background","url(img/index_ico1.png) -100px -94px no-repeat");
	})
	$(".pro_sort").children("li").eq(3).mouseenter(function(){
		$(".about_04").show();
		$(".bg_04+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_04").css("background","url(img/index_ico1.png) -156px -133px no-repeat");
	})
	$(".pro_sort").children("li").eq(3).mouseleave(function(){
		$(".about_04").hide();
		$(".bg_04+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_04").css("background","url(img/index_ico1.png) -156px -102px no-repeat");
	})
	$(".pro_sort").children("li").eq(4).mouseenter(function(){
		$(".about_05").show();
		$(".bg_05+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_05").css("background","url(img/index_ico1.png) -203px -126px no-repeat");
	})
	$(".pro_sort").children("li").eq(4).mouseleave(function(){
		$(".about_05").hide();
		$(".bg_05+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_05").css("background","url(img/index_ico1.png) -203px -89px no-repeat");
	})
	$(".pro_sort").children("li").eq(5).mouseenter(function(){
		$(".about_06").show();
		$(".bg_06+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_06").css("background","url(img/index_ico1.png) -241px -128px no-repeat");
	})
	$(".pro_sort").children("li").eq(5).mouseleave(function(){
		$(".about_06").hide();
		$(".bg_06+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_06").css("background","url(img/index_ico1.png) -241px -89px no-repeat");
	})
	$(".pro_sort").children("li").eq(6).mouseenter(function(){
		$(".about_07").show();
		$(".bg_07+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_07").css("background","url(img/index_ico1.png) -287px -131px no-repeat");
	})
	$(".pro_sort").children("li").eq(6).mouseleave(function(){
		$(".about_07").hide();
		$(".bg_07+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_07").css("background","url(img/index_ico1.png) -287px -91px no-repeat");
	})
	$(".pro_sort").children("li").eq(7).mouseenter(function(){
		$(".about_08").show();
		$(".bg_08+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_08").css("background","url(img/index_ico1.png) -338px -138px no-repeat");
	})
	$(".pro_sort").children("li").eq(7).mouseleave(function(){
		$(".about_08").hide();
		$(".bg_08+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_08").css("background","url(img/index_ico1.png) -338px -96px no-repeat");
	})
	$(".pro_sort").children("li").eq(8).mouseenter(function(){
		$(".about_09").show();
		$(".bg_09+a").css({"color":"#fe898f","text-decoration":"none"});
		$(".bg_09").css("background","url(img/index_ico1.png) -382px -131px no-repeat");
	})
	$(".pro_sort").children("li").eq(8).mouseleave(function(){
		$(".about_09").hide();
		$(".bg_09+a").css({"color":"#000","text-decoration":"none"});
		$(".bg_09").css("background","url(img/index_ico1.png) -382px -92px no-repeat");
	})
})	
$(function(){
	let arr = ["201708210154332343","201712120104551863","201805110939533935"];
	let oBan = document.getElementsByClassName("banner")[0];
	let lis = oBan.getElementsByTagName("li");
	let Index = 1;
	let timer1 = null;
	
	function Bigslider(){
		timer1 = setInterval(function(){
			for(var i = 0 ,len = arr.length;i<len;i++){
				lis[i].style.background="#999";
			}
			lis[Index%arr.length].style.background="red";
			oBan.style.background="url(img/"+ arr[Index++%arr.length] + ".jpg) center no-repeat";
		},2000)
	}
	Bigslider();
	for(let i = 0 ,len = arr.length;i<len;i++){
		lis[i].onmouseenter = function(){
			console.log(i);
			clearInterval(timer1);
			this.style.background="red";
			oBan.style.background = "url(img/"+ arr[i] + ".jpg) center no-repeat";
		};
		lis[i].onmouseleave = function(){
			this.style.background = "#999";
			Bigslider();
		}
	}
})
$(function(){
	var $uli = $(".main_02>li");
	var $oli = $(".main_03>li");
	$oli.addClass("hide");
	$oli[0].className = "show";
	$uli.addClass("normal");
	$uli[0].className = "hover";
	
	$uli.mouseenter(function() {
		var index = $(this).index();
		$uli.removeClass().addClass("normal");
		$uli.eq(index).removeClass().addClass("hover");
		$oli.removeClass().addClass("hide");
		$oli.eq(index).removeClass().addClass("show");
	});

	$(".layer_right").find(".layer_rt_1").find("img").hover(function(){
		$(this).animate({"margin-left":"8px"},300);
	},function(){
		$(this).animate({"margin-left":"16px"},300);
	})
})
window.onload = function(){
	let $ul = $(".layer_left_slide>ul");
	console.log($(".layer_left_slide>ul"))
	let Lis = $ul.find("li");
	let $oA = $ul.find("li").children("a");
	
	let $rtbtn = $(".rtbtn");
	let inde = 0;
	$oA.hover(function(){
		$(this).find("img").animate({"padding-right":10},300);
	},function(){
		$(this).find("img").animate({"padding-right":0},300);
	})
	
	$rtbtn.click(function(){
		for(let i = 0 ,len = Lis.length;i<len;i++){
			 console.log(i)
			Lis[i].style.display = "none";
		}
		inde ++;
		Lis[inde % lis.length].style.display = "block";
		if(inde == lis.length){
			inde = 0;
		}				
	})
	$(".main_F1").find(".ltbtn").click(function(){
		for(let i = 0 ,len = Lis.length;i<len;i++){
			Lis[i].style.display = "none";
		}
		inde --;
		Lis[(inde + lis.length-1) % lis.length].style.display = "block";
		
		if(inde < 0){
			inde = Lis.length - 1;
		}
	})
}

