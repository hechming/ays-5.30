var code;
function createCode(){
    //首先默认code为空字符串
    code = '';
    //设置长度，这里看需求，我这里设置了5
    var codeLength = 5;
    var codeV = document.getElementById('code');
    //设置随机字符
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    //循环codeLength 我设置的5就是循环5次
    for(var i = 0; i < codeLength; i++){
        //设置随机数范围,这设置为0 ~ 62
        var index = Math.floor(Math.random()*62);
        //字符串拼接 将每次随机的字符 进行拼接
        code += random[index]; 
    }
    //将拼接好的字符串赋值给展示的Value
    codeV.value = code;
}
window.onload = function(){
	createCode();
	var re0 = /^1\d{10}$/;
	var re1 = /^.{6,20}$/;
	let oRe = document.getElementsByClassName("requested")[0];
	let txt1 = document.getElementById("txt-re");
	let psw1 = document.getElementById("psw-re");
	let psw2 = document.getElementById("psw-re1");
	let txt2 = document.getElementById("txt-yan");
	let oErr = document.getElementsByClassName("tip-error")[0];
	let oCont = oErr.lastChild;
	oRe.onclick = function(){
		if(!re0.test(txt1.value)){
			oErr.style.display = "block";
			oCont.innerHTML = "账号名请输入手机号";
		}else if(!re1.test(psw1.value)){
			oErr.style.display = "block";
			oCont.innerHTML = "请输入6-20密码";
		}else if(psw1.value != psw2.value){
			oErr.style.display = "block";
			oCont.innerHTML = "两次输入的密码不一致";
		}else if(txt2.value != code){
			oErr.style.display = "block";
			oCont.innerHTML = "验证码错误";
		}else{
			alert("您已注册成功");
		}
	}
}
