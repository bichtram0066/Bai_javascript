window.onscroll=function(){
	var kc = document.documentElement.scrollTop;
	var ktren = document.getElementById("menu");
	if(kc>100){
		ktren.style.top ="0";
	}else{
		ktren.style.top ="-70px";
	}
	console.log(kc);
};