$(document).ready(function(){  
	$('body').scrollspy({target: ".menu-principal", offset: 50}); 
	$("#menu-principal a").on('click', function(event) { 
		if (this.hash !== "") { 
			event.preventDefault();  
			var hash = this.hash; 
			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function(){ 
				window.location.hash = hash;
			});
		}
	});
	$(".navbar-toggle").on('click', function(event) {
		var icono = $(this).find("span").hasClass('fa fa-bars');
		if(icono){
			$(this).find("span").attr("class","fa fa-close");
		}else{
			$(this).find("span").attr("class","fa fa-bars");
		}
	});
});
let background = document.querySelectorAll('.background');  
for(i=0;i<background.length;i++){
	background[i].parentNode.style.background = "rgba(0,0,0,.8)";
	background[i].parentNode.style.color = "#fff";
} 
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30, 
	loop: true,
	loopFillGroupWithBlank: true,  
	autoplay: {
    	delay: 5000,
  	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});