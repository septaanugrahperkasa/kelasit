		/*(TOUCH SLIDER POPULER)*/
const slider_touch_slider_populer = document.querySelector('.section .touch_slider-box .touch_slider .slider-container .touch_slider-populer .main'),
slides_touch_slider_populer = Array.from(document.querySelectorAll('.section .touch_slider-box .touch_slider .slider-container .touch_slider-populer .main .slide'))
	// set up our state
let isDragging_touch_slider_populer = false,
startPos_touch_slider_populer = 0,
currentTranslate_touch_slider_populer = 0,
prevTranslate_touch_slider_populer = 0,
animationID_touch_slider_populer,
currentIndex_touch_slider_populer = 0
	// add our event listeners
slides_touch_slider_populer.forEach((slide, index) => {
	const slideImage = slide.querySelector('.box')
		// disable default image drag
	slideImage.addEventListener('dragstart', (e) => e.preventDefault())
		// touch events
	slide.addEventListener('touchstart', touchStart_touch_slider_populer(index))
	slide.addEventListener('touchend', touchEnd_touch_slider_populer)
	slide.addEventListener('touchmove', touchMove_touch_slider_populer)
		// mouse events
	slide.addEventListener('mousedown', touchStart_touch_slider_populer(index))
	slide.addEventListener('mouseup', touchEnd_touch_slider_populer)
	slide.addEventListener('mousemove', touchMove_touch_slider_populer)
	slide.addEventListener('mouseleave', touchEnd_touch_slider_populer)
})
	// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex_touch_slider_populer)
	// prevent menu popup on long press
window.oncontextmenu = function (event) {
	event.preventDefault()
	event.stopPropagation()
	return falsebnxb
}
function getPositionX_touch_slider_populer(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
	// use a HOF so we have index in a closure
function touchStart_touch_slider_populer(index) {
	return function (event) {
		currentIndex_touch_slider_populer = index
		startPos_touch_slider_populer = getPositionX_touch_slider_populer(event)
		isDragging_touch_slider_populer = true
		animationID_touch_slider_populer = requestAnimationFrame(animation_touch_slider_populer)
		slider_touch_slider_populer.classList.add('grabbing')
	}
}
function touchMove_touch_slider_populer(event) {
	if (isDragging_touch_slider_populer) {
		const currentPosition = getPositionX_touch_slider_populer(event)
		currentTranslate_touch_slider_populer = prevTranslate_touch_slider_populer + currentPosition - startPos_touch_slider_populer
	}
}
function touchEnd_touch_slider_populer() {
	cancelAnimationFrame(animationID_touch_slider_populer)
	isDragging_touch_slider_populer = false
	const movedBy = currentTranslate_touch_slider_populer - prevTranslate_touch_slider_populer
	
		// if moved enough negative then snap to next slide if there is one
	if (movedBy < -100 && currentIndex_touch_slider_populer < slides_touch_slider_populer.length - 1) currentIndex_touch_slider_populer += 1
		// if moved enough positive then snap to previous slide if there is one
	if (movedBy > 100 && currentIndex_touch_slider_populer > 0) currentIndex_touch_slider_populer -= 1
	
	setPositionByIndex_touch_slider_populer()
	slider_touch_slider_populer.classList.remove('grabbing')
}
function animation_touch_slider_populer() {
	setSliderPosition_touch_slider_populer()
	if (isDragging_touch_slider_populer) requestAnimationFrame(animation_touch_slider_populer)
}
function setPositionByIndex_touch_slider_populer() {
	currentTranslate_touch_slider_populer = currentIndex_touch_slider_populer * -window.innerWidth
	prevTranslate_touch_slider_populer = currentTranslate_touch_slider_populer
	setSliderPosition_touch_slider_populer()
}
function setSliderPosition_touch_slider_populer() {
	slider_touch_slider_populer.style.transform = `translateX(${currentTranslate_touch_slider_populer}px)`
}
		/*(TOUCH SLIDER RATING)*/
const slider_touch_slider_rating = document.querySelector('.section .touch_slider-box .touch_slider .slider-container .touch_slider-rating .main'),
slides_touch_slider_rating = Array.from(document.querySelectorAll('.section .touch_slider-box .touch_slider .slider-container .touch_slider-rating .main .slide'))
	// set up our state
let isDragging_touch_slider_rating = false,
startPos_touch_slider_rating = 0,
currentTranslate_touch_slider_rating = 0,
prevTranslate_touch_slider_rating = 0,
animationID_touch_slider_rating,
currentIndex_touch_slider_rating = 0
	// add our event listeners
slides_touch_slider_rating.forEach((slide, index) => {
	const slideImage = slide.querySelector('.box')
		// disable default image drag
	slideImage.addEventListener('dragstart', (e) => e.preventDefault())
		// touch events
	slide.addEventListener('touchstart', touchStart_touch_slider_rating(index))
	slide.addEventListener('touchend', touchEnd_touch_slider_rating)
	slide.addEventListener('touchmove', touchMove_touch_slider_rating)
		// mouse events
	slide.addEventListener('mousedown', touchStart_touch_slider_rating(index))
	slide.addEventListener('mouseup', touchEnd_touch_slider_rating)
	slide.addEventListener('mousemove', touchMove_touch_slider_rating)
	slide.addEventListener('mouseleave', touchEnd_touch_slider_rating)
})
	// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex_touch_slider_rating)
	// prevent menu popup on long press
window.oncontextmenu = function (event) {
	event.preventDefault()
	event.stopPropagation()
	return falsebnxb
}
function getPositionX_touch_slider_rating(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
	// use a HOF so we have index in a closure
function touchStart_touch_slider_rating(index) {
	return function (event) {
		currentIndex_touch_slider_rating = index
		startPos_touch_slider_rating = getPositionX_touch_slider_rating(event)
		isDragging_touch_slider_rating = true
		animationID_touch_slider_rating = requestAnimationFrame(animation_touch_slider_rating)
		slider_touch_slider_rating.classList.add('grabbing')
	}
}
function touchMove_touch_slider_rating(event) {
	if (isDragging_touch_slider_rating) {
		const currentPosition = getPositionX_touch_slider_rating(event)
		currentTranslate_touch_slider_rating = prevTranslate_touch_slider_rating + currentPosition - startPos_touch_slider_rating
	}
}
function touchEnd_touch_slider_rating() {
	cancelAnimationFrame(animationID_touch_slider_rating)
	isDragging_touch_slider_rating = false
	const movedBy = currentTranslate_touch_slider_rating - prevTranslate_touch_slider_rating
	
		// if moved enough negative then snap to next slide if there is one
	if (movedBy < -100 && currentIndex_touch_slider_rating < slides_touch_slider_rating.length - 1) currentIndex_touch_slider_rating += 1
		// if moved enough positive then snap to previous slide if there is one
	if (movedBy > 100 && currentIndex_touch_slider_rating > 0) currentIndex_touch_slider_rating -= 1
	
	setPositionByIndex_touch_slider_rating()
	slider_touch_slider_rating.classList.remove('grabbing')
}
function animation_touch_slider_rating() {
	setSliderPosition_touch_slider_rating()
	if (isDragging_touch_slider_rating) requestAnimationFrame(animation_touch_slider_rating)
}
function setPositionByIndex_touch_slider_rating() {
	currentTranslate_touch_slider_rating = currentIndex_touch_slider_rating * -window.innerWidth
	prevTranslate_touch_slider_rating = currentTranslate_touch_slider_rating
	setSliderPosition_touch_slider_rating()
}
function setSliderPosition_touch_slider_rating() {
	slider_touch_slider_rating.style.transform = `translateX(${currentTranslate_touch_slider_rating}px)`
}
		/*(TOUCH SLIDER RATING)*/
const slider_touch_slider_latest = document.querySelector('.section .touch_slider-box .touch_slider .slider-container .touch_slider-latest .main'),
slides_touch_slider_latest = Array.from(document.querySelectorAll('.section .touch_slider-box .touch_slider .slider-container .touch_slider-latest .main .slide'))
	// set up our state
let isDragging_touch_slider_latest = false,
startPos_touch_slider_latest = 0,
currentTranslate_touch_slider_latest = 0,
prevTranslate_touch_slider_latest = 0,
animationID_touch_slider_latest,
currentIndex_touch_slider_latest = 0
	// add our event listeners
slides_touch_slider_latest.forEach((slide, index) => {
	const slideImage = slide.querySelector('.box')
		// disable default image drag
	slideImage.addEventListener('dragstart', (e) => e.preventDefault())
		// touch events
	slide.addEventListener('touchstart', touchStart_touch_slider_latest(index))
	slide.addEventListener('touchend', touchEnd_touch_slider_latest)
	slide.addEventListener('touchmove', touchMove_touch_slider_latest)
		// mouse events
	slide.addEventListener('mousedown', touchStart_touch_slider_latest(index))
	slide.addEventListener('mouseup', touchEnd_touch_slider_latest)
	slide.addEventListener('mousemove', touchMove_touch_slider_latest)
	slide.addEventListener('mouseleave', touchEnd_touch_slider_latest)
})
	// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex_touch_slider_latest)
	// prevent menu popup on long press
window.oncontextmenu = function (event) {
	event.preventDefault()
	event.stopPropagation()
	return falsebnxb
}
function getPositionX_touch_slider_latest(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
	// use a HOF so we have index in a closure
function touchStart_touch_slider_latest(index) {
	return function (event) {
		currentIndex_touch_slider_latest = index
		startPos_touch_slider_latest = getPositionX_touch_slider_latest(event)
		isDragging_touch_slider_latest = true
		animationID_touch_slider_latest = requestAnimationFrame(animation_touch_slider_latest)
		slider_touch_slider_latest.classList.add('grabbing')
	}
}
function touchMove_touch_slider_latest(event) {
	if (isDragging_touch_slider_latest) {
		const currentPosition = getPositionX_touch_slider_latest(event)
		currentTranslate_touch_slider_latest = prevTranslate_touch_slider_latest + currentPosition - startPos_touch_slider_latest
	}
}
function touchEnd_touch_slider_latest() {
	cancelAnimationFrame(animationID_touch_slider_latest)
	isDragging_touch_slider_latest = false
	const movedBy = currentTranslate_touch_slider_latest - prevTranslate_touch_slider_latest
	
		// if moved enough negative then snap to next slide if there is one
	if (movedBy < -100 && currentIndex_touch_slider_latest < slides_touch_slider_latest.length - 1) currentIndex_touch_slider_latest += 1
		// if moved enough positive then snap to previous slide if there is one
	if (movedBy > 100 && currentIndex_touch_slider_latest > 0) currentIndex_touch_slider_latest -= 1
	
	setPositionByIndex_touch_slider_latest()
	slider_touch_slider_latest.classList.remove('grabbing')
}
function animation_touch_slider_latest() {
	setSliderPosition_touch_slider_latest()
	if (isDragging_touch_slider_latest) requestAnimationFrame(animation_touch_slider_latest)
}
function setPositionByIndex_touch_slider_latest() {
	currentTranslate_touch_slider_latest = currentIndex_touch_slider_latest * -window.innerWidth
	prevTranslate_touch_slider_latest = currentTranslate_touch_slider_latest
	setSliderPosition_touch_slider_latest()
}
function setSliderPosition_touch_slider_latest() {
	slider_touch_slider_latest.style.transform = `translateX(${currentTranslate_touch_slider_latest}px)`
}
		/*(TOUCH SLIDER ONE)*/
const slider_one = document.querySelector('.section .touch_slider-box .touch_slider .slider-container .main_box-one .main'),
slides_one = Array.from(document.querySelectorAll('.section .touch_slider-box .touch_slider .slider-container .main_box-one .main .slide'))
	// set up our state
let isDragging_one = false,
startPos_one = 0,
currentTranslate_one = 0,
prevTranslate_one = 0,
animationID_one,
currentIndex_one = 0
	// add our event listeners
slides_one.forEach((slide, index) => {
	const slideImage = slide.querySelector('.box')
		// disable default image drag
	slideImage.addEventListener('dragstart', (e) => e.preventDefault())
		// touch events
	slide.addEventListener('touchstart', touchStart_one(index))
	slide.addEventListener('touchend', touchEnd_one)
	slide.addEventListener('touchmove', touchMove_one)
		// mouse events
	slide.addEventListener('mousedown', touchStart_one(index))
	slide.addEventListener('mouseup', touchEnd_one)
	slide.addEventListener('mousemove', touchMove_one)
	slide.addEventListener('mouseleave', touchEnd_one)
})
	// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex_one)
	// prevent menu popup on long press
window.oncontextmenu = function (event) {
	event.preventDefault()
	event.stopPropagation()
	return falsebnxb
}
function getPositionX_one (event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
	// use a HOF so we have index in a closure
function touchStart_one(index) {
	return function (event) {
		currentIndex_one = index
		startPos_one = getPositionX_one(event)
		isDragging_one = true
		animationID_one = requestAnimationFrame(animation_one)
		slider_one.classList.add('grabbing')
	}
}
function touchMove_one(event) {
	if (isDragging_one) {
		const currentPosition = getPositionX_one(event)
		currentTranslate_one = prevTranslate_one + currentPosition - startPos_one
	}
}
function touchEnd_one() {
	cancelAnimationFrame(animationID_one)
	isDragging_one = false
	const movedBy = currentTranslate_one - prevTranslate_one
	
		// if moved enough negative then snap to next slide if there is one
	if (movedBy < -100 && currentIndex_one < slides_one.length - 1) currentIndex_one += 1
		// if moved enough positive then snap to previous slide if there is one
	if (movedBy > 100 && currentIndex_one > 0) currentIndex_one -= 1
	
	setPositionByIndex_one()
	slider_one.classList.remove('grabbing')
}
function animation_one() {
	setSliderPosition_one()
	if (isDragging_one) requestAnimationFrame(animation_one)
}
function setPositionByIndex_one() {
	currentTranslate_one = currentIndex_one * -window.innerWidth
	prevTranslate_one = currentTranslate_one
	setSliderPosition_one()
}
function setSliderPosition_one() {
	slider_one.style.transform = `translateX(${currentTranslate_one}px)`
}
		/*(TOUCH SLIDER TRIAL ONE)*/
const slider_main_box_trial_one = document.querySelector('.section .touch_slider-box-error .touch_slider .slider-container .main_box_trial-one .main'),
slides_main_box_trial_one = Array.from(document.querySelectorAll('.section .touch_slider-box-error .touch_slider .slider-container .main_box_trial-one .main .slide'))
	// set up our state
let isDragging_main_box_trial_one = false,
startPos_main_box_trial_one = 0,
currentTranslate_main_box_trial_one = 0,
prevTranslate_main_box_trial_one = 0,
animationID_main_box_trial_one,
currentIndex_main_box_trial_one = 0
	// add our event listeners
slides_main_box_trial_one.forEach((slide, index) => {
	const slideImage = slide.querySelector('.box')
		// disable default image drag
	slideImage.addEventListener('dragstart', (e) => e.preventDefault())
		// touch events
	slide.addEventListener('touchstart', touchStart_main_box_trial_one(index))
	slide.addEventListener('touchend', touchEnd_main_box_trial_one)
	slide.addEventListener('touchmove', touchMove_main_box_trial_one)
		// mouse events
	slide.addEventListener('mousedown', touchStart_main_box_trial_one(index))
	slide.addEventListener('mouseup', touchEnd_main_box_trial_one)
	slide.addEventListener('mousemove', touchMove_main_box_trial_one)
	slide.addEventListener('mouseleave', touchEnd_main_box_trial_one)
})
	// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex_main_box_trial_one)
	// prevent menu popup on long press
window.oncontextmenu = function (event) {
	event.preventDefault()
	event.stopPropagation()
	return falsebnxb
}
function getPositionX_main_box_trial_one(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
	// use a HOF so we have index in a closure
function touchStart_main_box_trial_one(index) {
	return function (event) {
		currentIndex_main_box_trial_one = index
		startPos_main_box_trial_one = getPositionX_main_box_trial_one(event)
		isDragging_main_box_trial_one = true
		animationID_main_box_trial_one = requestAnimationFrame(animation_main_box_trial_one)
		slider_main_box_trial_one.classList.add('grabbing')
	}
}
function touchMove_main_box_trial_one(event) {
	if (isDragging_main_box_trial_one) {
		const currentPosition = getPositionX_main_box_trial_one(event)
		currentTranslate_main_box_trial_one = prevTranslate_main_box_trial_one + currentPosition - startPos_main_box_trial_one
	}
}
function touchEnd_main_box_trial_one() {
	cancelAnimationFrame(animationID_main_box_trial_one)
	isDragging_main_box_trial_one = false
	const movedBy = currentTranslate_main_box_trial_one - prevTranslate_main_box_trial_one
	
		// if moved enough negative then snap to next slide if there is one
	if (movedBy < -100 && currentIndex_main_box_trial_one < slides_main_box_trial_one.length - 1) currentIndex_main_box_trial_one += 1
		// if moved enough positive then snap to previous slide if there is one
	if (movedBy > 100 && currentIndex_main_box_trial_one > 0) currentIndex_main_box_trial_one -= 1
	
	setPositionByIndex_main_box_trial_one()
	slider_main_box_trial_one.classList.remove('grabbing')
}
function animation_main_box_trial_one() {
	setSliderPosition_main_box_trial_one()
	if (isDragging_main_box_trial_one) requestAnimationFrame(animation_main_box_trial_one)
}
function setPositionByIndex_main_box_trial_one() {
	currentTranslate_main_box_trial_one = currentIndex_main_box_trial_one * -225
	//* -window.innerWidth
	prevTranslate_main_box_trial_one = currentTranslate_main_box_trial_one
	setSliderPosition_main_box_trial_one()
}
function setSliderPosition_main_box_trial_one() {
	slider_main_box_trial_one.style.transform = `translateX(${currentTranslate_main_box_trial_one}px)`
}
		/*(TOUCH SLIDER TRIAL TWO)*/
const slider_main_box_trial_two = document.querySelector('.section .touch_slider-box-error .touch_slider .slider-container .main_box_trial-two .main'),
slides_main_box_trial_two = Array.from(document.querySelectorAll('.section .touch_slider-box-error .touch_slider .slider-container .main_box_trial-two .main .slide'))
	// set up our state
let isDragging_main_box_trial_two = false,
startPos_main_box_trial_two = 0,
currentTranslate_main_box_trial_two = 0,
prevTranslate_main_box_trial_two = 0,
animationID_main_box_trial_two,
currentIndex_main_box_trial_two = 0
	// add our event listeners
slides_main_box_trial_two.forEach((slide, index) => {
	const slideImage = slide.querySelector('.box')
		// disable default image drag
	slideImage.addEventListener('dragstart', (e) => e.preventDefault())
		// touch events
	slide.addEventListener('touchstart', touchStart_main_box_trial_two(index))
	slide.addEventListener('touchend', touchEnd_main_box_trial_two)
	slide.addEventListener('touchmove', touchMove_main_box_trial_two)
		// mouse events
	slide.addEventListener('mousedown', touchStart_main_box_trial_two(index))
	slide.addEventListener('mouseup', touchEnd_main_box_trial_two)
	slide.addEventListener('mousemove', touchMove_main_box_trial_two)
	slide.addEventListener('mouseleave', touchEnd_main_box_trial_two)
})
	// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex_main_box_trial_two)
	// prevent menu popup on long press
window.oncontextmenu = function (event) {
	event.preventDefault()
	event.stopPropagation()
	return falsebnxb
}
function getPositionX_main_box_trial_two(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
	// use a HOF so we have index in a closure
function touchStart_main_box_trial_two(index) {
	return function (event) {
		currentIndex_main_box_trial_two = index
		startPos_main_box_trial_two = getPositionX_main_box_trial_two(event)
		isDragging_main_box_trial_two = true
		animationID_main_box_trial_two = requestAnimationFrame(animation_main_box_trial_two)
		slider_main_box_trial_two.classList.add('grabbing')
	}
}
function touchMove_main_box_trial_two(event) {
	if (isDragging_main_box_trial_two) {
		const currentPosition = getPositionX_main_box_trial_two(event)
		currentTranslate_main_box_trial_two = prevTranslate_main_box_trial_two + currentPosition - startPos_main_box_trial_two
	}
}
function touchEnd_main_box_trial_two() {
	cancelAnimationFrame(animationID_main_box_trial_two)
	isDragging_main_box_trial_two = false
	const movedBy = currentTranslate_main_box_trial_two - prevTranslate_main_box_trial_two
	
		// if moved enough negative then snap to next slide if there is two
	if (movedBy < -100 && currentIndex_main_box_trial_two < slides_main_box_trial_two.length - 1) currentIndex_main_box_trial_two += 1
		// if moved enough positive then snap to previous slide if there is two
	if (movedBy > 100 && currentIndex_main_box_trial_two > 0) currentIndex_main_box_trial_two -= 1
	
	setPositionByIndex_main_box_trial_two()
	slider_main_box_trial_two.classList.remove('grabbing')
}
function animation_main_box_trial_two() {
	setSliderPosition_main_box_trial_two()
	if (isDragging_main_box_trial_two) requestAnimationFrame(animation_main_box_trial_two)
}
function setPositionByIndex_main_box_trial_two() {
	currentTranslate_main_box_trial_two = currentIndex_main_box_trial_two * -235
	//window.innerWidth
	prevTranslate_main_box_trial_two = currentTranslate_main_box_trial_two
	setSliderPosition_main_box_trial_two()
}
function setSliderPosition_main_box_trial_two() {
	slider_main_box_trial_two.style.transform = `translateX(${currentTranslate_main_box_trial_two}px)`
}