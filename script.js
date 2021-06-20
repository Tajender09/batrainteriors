let banner = document.querySelector(".home1");
let click = document.querySelectorAll(".home-img > div");
let navbar = document.querySelector("nav");
let ham = document.querySelector("nav > a");
let one = document.querySelector("nav > a span:first-of-type");
let two = document.querySelector("nav > a span:nth-of-type(2)");
let three = document.querySelector("nav > a span:last-of-type");
let list = document.querySelector(".ham");
let anchors = document.querySelectorAll(".ham > a");
let navigator1 = document.querySelector("#services > i:first-of-type");
let navigator2 = document.querySelector("#services > i:last-of-type");
let service = document.querySelectorAll("#services > div");
let a = 1;
let size = window.matchMedia('(min-width: 481px)');
let wid = 100;
let flag = 0; 
let i = 2;
let j = 1;
click.forEach(function(current,index){
	current.onclick = function(){
		click.forEach(function(current){
			if (current.classList.contains("active")) {
				current.classList.remove("active");
			}
		});
		current.classList.add("active");
		if (index == 0) {
			banner.style.cssText = "background-image: url('home1.jpg');"
		}
		else if (index == 1) {
			banner.style.cssText = "background-image: url('home2.jpg');"
		}
		else{
			banner.style.cssText = "background-image: url('home3.jpg');"
		}
	}
});
setInterval(function(){
	click.forEach(function(current){
		if (current.classList.contains("active")) {
			current.classList.remove("active");
		}
	});
	banner.style.cssText = "background-image: url(home" + i + ".jpg);"
	if (i == 3) {
		i = 0;
	}
	i++;
	click[j].classList.add("active");
	j++;
	if (j == 3) {
		j = 0;
	}
},7000)
window.onscroll = function(){
	if (window.scrollY > 10) {
			navbar.style.cssText = "background-color:#252531;opacity:0.8;"
		if (flag == 0) {
			if (size.matches) {
				list.style.cssText = "height:6.3rem;"
			}
			else{
				list.style.cssText = "height:5.5rem;"
			}
		}
		else{
			if (size.matches) {
				list.style.cssText = "height:22rem;"
			}
			else{
				list.style.cssText = "height:20rem;"
			}
		}
	}
	else{
		navbar.style.cssText = "background-color:none;"
		if (flag == 1) {
			if (size.matches) {
				list.style.cssText = "height:22rem;"
			}
			else{
				list.style.cssText = "height:20rem;"
			}
		}
		else{
			list.style.cssText = "height:0;"
		}
	}
}
ham.onclick = function(){
	if (flag == 0) {
		two.style.cssText = "opacity:0;"
		one.style.cssText = "transform: rotate(40deg);position:absolute;top:.5px;"
		three.style.cssText = "transform: rotate(-40deg);position:absolute;bottom:.5px;"
		if (size.matches) {
			list.style.cssText = "height:22rem;"
		}
		else{
			list.style.cssText = "height:20rem;"
		}
		anchors.forEach(function(current){
			current.style.cssText = "opacity:1;transition:opacity .5s .25s;"
		});
		flag = 1;
	}
	else{
		two.style.cssText = "opacity:1;"
		one.style.cssText = "transform: rotate(0deg);"
		three.style.cssText = "transform: rotate(0deg);"
		if (size.matches) {
			list.style.cssText = "height:6.3rem;"
		}
		else{
			list.style.cssText = "height:5.5rem;"
		}
		if (window.scrollY < 10) {
			list.style.cssText = "height:0;"
		}
		anchors.forEach(function(current){
			current.style.cssText = "opacity:0;transition:opacity .1s;"
		});
		flag = 0;	
	}
}
navigator2.onclick = function(){
	service[a-1].style.cssText = "left:-" + wid + "vw;"
	service[a].style.cssText = "left:-" + wid + "vw;"
	a++;
	wid = wid * a;
}