window.onscroll = function(){
	var kc = document.documentElement.scrollTop;
	var dau2 = document.getElementById("dau2");
	var name = document.getElementById("name");
	console.log(kc);
	if (kc>55) {
		dau2.style.padding = "10px 20px";
		name.style.fontSize = "20px";
	}else{
		dau2.style.padding  ="50px 20px";
		name.style.fontSize= "30px";
	}
	console.log(kc);
};