// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   		alert("小姐姐再考虑一下呗");
	   	}else if(Dianji==2){
		   	alert("我妈会游泳");
	   	}else if(Dianji==3){
		   	alert("分手就割腕");
	  	}else if(Dianji==4){
		   	alert("家务我全干");
	  	}else if(Dianji==5){
			alert("爱吃你剩饭");
	   	}else if(Dianji==6){
		   	alert("不藏私房钱");
	  	}else if(Dianji==7){
		   	alert("房子写你名");
	  	}else if(Dianji==8){
			alert("保大不保小");
	  	}else if(Dianji==9){
			alert("工资全上交");
			Dianji=0;
		}
	}
	hao.onclick=function(){
		location.href="demo.html"
	}
}