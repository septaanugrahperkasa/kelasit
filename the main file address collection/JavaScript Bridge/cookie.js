	/*(COOKIE)*/
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