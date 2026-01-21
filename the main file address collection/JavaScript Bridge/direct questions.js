	/*(DIRECT QUESTIONS)*/
const accordionItemHeaders = document.querySelectorAll(".section .direct_questions-box .direct_questions .accordion .accordion-item .accordion-item-header");
const accordionItemAllBodys = document.querySelectorAll(".section .direct_questions-box .direct_questions .accordion .accordion-item .accordion-item-body");
const accordionItemAllIcons = document.querySelectorAll(".section .direct_questions-box .direct_questions .accordion .accordion-item .accordion-item-header #icn img");

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
				//accordionItemAllBodys[b].style.maxHeight = "0px";
				//accordionItemAllIcons[b].classList.remove("active");
			}
		}
	});
}