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