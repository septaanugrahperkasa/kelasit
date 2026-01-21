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


	/*(COOKIE)*/
/*
let cookieWrapper = document.querySelector(".section .cookie_box .cookie .wrapper");
let cookieBtn = document.querySelector(".section .cookie_box .cookie .wrapper .buttons .first_button");
function cookieFunction() {
	setTimeout(()=>{
		cookieWrapper.style.animation="cookie_show-box 0.8s ease forwards";
	},5000);
	
	cookieBtn.onclick = function(){
		cookieWrapper.style.animation="cookie_hide-box 0.8s ease forwards";
	}
}
cookieFunction();
*/

	/*(PARTNERS)*/
const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const interval = 3000;
let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
slide.append(firstClone);
slide.prepend(lastClone);
const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
	slideId = setInterval(() => {
		moveToNextSlide();
	}, interval);
};

const getSlides = () => document.querySelectorAll('.slide');
slide.addEventListener('transitionend', () => {
	slides = getSlides();
	if (slides[index].id === firstClone.id) {
		slide.style.transition = 'none';
		index = 1;
		slide.style.transform = `translateX(${-slideWidth * index}px)`;
	}
	if (slides[index].id === lastClone.id) {
		slide.style.transition = 'none';
		index = slides.length - 2;
		slide.style.transform = `translateX(${-slideWidth * index}px)`;
	}
});
const moveToNextSlide = () => {
	slides = getSlides();
	if (index >= slides.length - 1) return;
	index++;
	slide.style.transition = '.7s ease-out';
	slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
const moveToPreviousSlide = () => {
	if (index <= 0) return;
	index--;
	slide.style.transition = '.7s ease-out';
	slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
slideContainer.addEventListener('mouseleave', startSlide);
startSlide();


	/*(TESTIMONIALS)*/
var slideIndex,swiper_slide,dots;
function initGallery(){
	slideIndex = 0;
	swiper_slide=document.getElementsByClassName("imageHolder");
	swiper_slide[slideIndex].style.opacity=1;
	
		//disable nextPrevBtn if slide count is one
	if(swiper_slide.length<2){
		var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
		nextPrevBtns.style.display="none";
		for (i = 0; i < nextPrevBtn.length; i++) {
			nextPrevBtn[i].style.display="none";
		}
	}
	
		//add dots
	dots=[];
	var dotsContainer=document.getElementById("dotsContainer"),i;
	for (i = 0; i < swiper_slide.length; i++) {
		var dot=document.createElement("span");
		dot.classList.add("dots");
		dotsContainer.append(dot);
		dot.setAttribute("onclick","moveSlide("+i+")");
		dots.push(dot);
	}
	dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
	moveSlide(slideIndex+n);
}
function moveSlide(n){
	var i;
	var current,next;
	var moveSlideAnimClass={
		forCurrent:"",
		forNext:""
	};
	var slideTextAnimClass;
	if(n>slideIndex) {
		if(n >= swiper_slide.length){n=0;}
		moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
		moveSlideAnimClass.forNext="moveLeftNextSlide";
	
	}	else if(n<slideIndex) {
	if(n<0){n=swiper_slide.length-1;}
		moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
		moveSlideAnimClass.forNext="moveRightPrevSlide";
		slideTextAnimClass="slideTextFromBottom";
	}
	
	if(n!=slideIndex){
		next = swiper_slide[n];
		current=swiper_slide[slideIndex];
		for (i = 0; i < swiper_slide.length; i++) {
			swiper_slide[i].className = "imageHolder";
			swiper_slide[i].style.opacity=0;
			dots[i].classList.remove("active");
		}
		current.classList.add(moveSlideAnimClass.forCurrent);
		next.classList.add(moveSlideAnimClass.forNext);
		dots[n].classList.add("active");
		slideIndex=n;
	}
}


			/*(DIRECT QUESTIONS)*/
const accordionItemHeaders = document.querySelectorAll(".section .direct_questions-box .direct_questions .accordion .accordion-item .accordion-item-header");
const accordionItemAllBodys = document.querySelectorAll(".section .direct_questions-box .direct_questions .accordion .accordion-item .accordion-item-body");
const accordionItemAllIcons = document.querySelectorAll(".section .direct_questions-box .direct_questions .accordion .accordion-item .accordion-item-header #icn i");

for (let a = 0; a<accordionItemHeaders.length; a++) {
	accordionItemHeaders[a].addEventListener("click",function(){
		if (parseInt(accordionItemAllBodys[a].style.maxHeight) != accordionItemAllBodys[a].scrollHeight) {
			accordionItemAllBodys[a].style.maxHeight = accordionItemAllBodys[a].scrollHeight + "px";
			accordionItemAllIcons[a].classList.add("active");
		} else {
			accordionItemAllBodys[a].style.maxHeight = "0px";
			accordionItemAllIcons[a].classList.remove("active");
		}
		for (let b = 0; b<accordionItemAllBodys.length; b++) {
			if (a !== b) {
				accordionItemAllBodys[b].style.maxHeight = "0px";
				accordionItemAllIcons[b].classList.remove("active");
			}
		}
	});
}