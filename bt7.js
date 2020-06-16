window.onscroll= function(){
	var kc = document.documentElement.scrollTop;
	var menu = document.getElementById("menu");
	if (kc>99) {
		menu.classList.add("hieuung");
	} else{
		menu.classList.remove("hieuung");
	}
	console.log(kc);
}
