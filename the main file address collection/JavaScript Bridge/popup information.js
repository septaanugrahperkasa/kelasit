	/*(POPUP INFORMATION)*/
let popupInformationBox = document.querySelector(".section .popup_information-box");
let mainBackgroundInformation = document.querySelector(".section .popup_information-box .popup_information .background");
let btnLabel = document.querySelectorAll(".section .popup_information-box .popup_information .container_box .container .alert_box .alert .btns label");
let informationToggle = document.querySelectorAll(".section .long-box .popup_button");
let alert_box = document.querySelector(".section .popup_information-box .popup_information .container_box .container .alert_box .alert");
let object = document.querySelector(".section .popup_information-box .popup_information .form_login-box .form_login");
	/*=(FORM LOGIN)=*/
let sendLoginButton = document.querySelector(".section .popup_information-box .popup_information .form_login-box .form_login .contact-wrapper .right_side form .form-row #send_login-button");
let enterYourData = document.querySelectorAll(".section .popup_information-box .popup_information .form_login-box .form_login .contact-wrapper .right_side form .form-row .input");
	/*=DATABASE STORAGE=*/
function DatabaseStorage(user,email,password,message) {
	let a = [user],
		b = [email],
		c = [password],
		d = [message];
	
	console.log(a + b + c + d);
}
informationToggle.forEach(btn =>{
	btn.addEventListener("click",function(){
		popupInformationBox.classList.add("active");
		alert_box.classList.add("active");
		object.classList.remove("active");
		mainBackgroundInformation.classList.add("active");
		
		btnLabel.forEach((n,i)=>{
			n.addEventListener("click",function(){
				if(i==0) {
					mainBackgroundInformation.classList.remove("active");
					alert_box.classList.remove("active");
					
					setTimeout(()=>{
						popupInformationBox.classList.remove("active");
					});
				}	else if (i==1) {
					alert_box.classList.remove("active");
					object.classList.add("active");
					
					sendLoginButton.addEventListener("click",function(block){
						enterYourData.forEach((n,i)=>{
							
							let user = [],
								email = [],
								password = [],
								message = [];
							
							
							if (n.value == "") {
								//alert("Error!");
								//n.setAttribute("required","");
								//block.preventDefault();
								return n.value;
							}	else if (n.value) {
								if (i === 0) {
									user.push("Username: "+ n.value);
								}	else if (i === 1) {
									email.push("Email: "+ n.value);
								}	else if (i === 2) {
									password.push("Password: "+ n.value);
								}	else if (i === 3) {
									message.push("Message: "+ n.value);
								}
								DatabaseStorage([user],[email],[password],[message]);
							}
						});
					});
				}
			});
		});
	});
});