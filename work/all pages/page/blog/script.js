	/*(SHARE BUTTON)*/
const $button = document.querySelector('.section .long-box .share_button');
if ('share' in navigator) {
	$button.addEventListener('click', share)
	function share() {
		navigator.share({
			title: 'Share the Blog Link',
			//text: 'Message',
			url: '/storage/emulated/0/0. Kelas IT/work/all pages/page/blog/blog.html',
		});
	}
}


	/*(BUTTON LIKES)*/
const like_button = document.querySelectorAll(".section .article_medium-box .article_medium .content_box .content .text_box .box .text .information .icn ul #like_button"),
	  icon_heart = document.querySelectorAll(".section .article_medium-box .article_medium .content_box .content .text_box .box .text .information .icn ul li .like_button .heart"),
	  icon_like = document.querySelectorAll(".section .article_medium-box .article_medium .content_box .content .text_box .box .text .information .icn ul li .like_button .heart path");
like_button.forEach((n,i)=>{
	icon_heart.forEach((a,b)=>{
		icon_like.forEach((c,d)=>{
			n.addEventListener("click",function(){
				function myCode() {
					a.classList.toggle("active");
					c.classList.toggle("active");
				}
				
				if (i==0) {
					if (b==0&&d==0) {
						myCode();
					}
				} else if (i==1) {
					if (b==1&&d==1) {
						myCode();
					}
				} else if (i==2) {
					if (b==2&&d==2) {
						myCode();
					}
				}
			});
		});
	});
});


	/*(PAGINATION BUTTON LOAD MORE)*/
const animationLoadMore = document.querySelector(".section .article_box .article .snippet");
const loadmore = document.querySelector(".section .article_box .article .pagination_box .pagination .text_box .box .link_background .button-premium");
let currentItems = 1;
loadmore.addEventListener("click", (e) => {
	const elementList = [...document.querySelectorAll(".section .article_box .article .content_box")];
	for (let i = currentItems; i < currentItems + 1; i++) {
		if (elementList[i]) {
			animationLoadMore.style.display="block";
			loadmore.classList.add("active");
			setTimeout(()=>{
				elementList[i].style.display="block";
				animationLoadMore.style.display="none";
				loadmore.classList.remove("active");
			},6000);
		}
	}
	currentItems += 1;
	
		// Load more button will be hidden after list fully loaded
	if (currentItems >= elementList.length) {
		event.target.style.display = "none";
	}
})