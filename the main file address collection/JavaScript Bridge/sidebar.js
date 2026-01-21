	/*(SIDEBAR)*/
let showSidebarButton = document.querySelector(".section .sidebar_box .sidebar .header_animation .button #show-menu");
let sidebarContainer = document.querySelector(".section .sidebar_box .sidebar .wrapper nav");
let droppingButton = document.querySelectorAll(".section .sidebar_box .sidebar .wrapper nav .content_box .content .links li label");
let dropAllIcons = document.querySelectorAll(".section .sidebar_box .sidebar .wrapper nav .content_box .content .links li label #icn");
let containerDropping = document.querySelectorAll(".section .sidebar_box .sidebar .wrapper nav .content_box .content .links ul");
let menuToggle = document.querySelector(".section .sidebar_box .sidebar .header_animation .button #showMenuToggle i");


function animationFunc(funcSucc,funcErr) {
	let ubicacionPrincipal  = window.pageYOffset;
	window.onscroll = function() {
		var nav  = document.querySelector('.header_animation');
		
		let Desplazamiento_Actual = window.pageYOffset;
		
		if (funcSucc=="funcSucc") {
			if(ubicacionPrincipal >= Desplazamiento_Actual){
				document.getElementById('header_animation').style.top = '0';
				nav.classList.add("sticky")
			} else {
				document.getElementById('header_animation').style.top = '-20rem';
				nav.classList.remove("sticky");
			}
			ubicacionPrincipal = Desplazamiento_Actual;
		}	else if (funcErr=="funcErr") {
			document.getElementById('header_animation').style.top = '-20rem';
			nav.classList.remove("sticky");
		}
	}
}
animationFunc("funcSucc");
showSidebarButton.addEventListener("click",function() {
	function functionToOne() {
		containerDropping.forEach((a,b)=>{
			dropAllIcons.forEach((c,d)=>{
				if (b==0 || b==1 || d==0 || d==1) {
					a.classList.remove("active");
					c.classList.remove("active");
				}
			});
		});
	}
	
	sidebarContainer.classList.toggle("active");
	if (menuToggle.className=="fas fa-bars") {
		menuToggle.setAttribute("class","fas fa-times");
		animationFunc("funcErr");
	}	else if (menuToggle.className!="fas fa-bars") {
		menuToggle.setAttribute("class","fas fa-bars");
		functionToOne();
		animationFunc("funcSucc");
	}
	
	function secondFunction() {
		droppingButton.forEach(function(n,i){
			containerDropping.forEach((a,b)=>{
				dropAllIcons.forEach((c,d)=>{
					n.addEventListener("click",function(){
						if (i==0 && b==0 && d==0) {
							a.classList.toggle("active");
							c.classList.toggle("active");
						} else if (i==1 && b==1 && d==1) {
							a.classList.toggle("active");
							c.classList.toggle("active");
						}
					});
				});
			});
		});
	}
	secondFunction();
});