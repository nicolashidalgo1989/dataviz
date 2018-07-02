$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
let background = document.querySelectorAll('.background');  
for(i=0;i<background.length;i++){
	background[i].parentNode.style.background = "rgba(0,0,0,.7)";
	background[i].parentNode.style.color = "#fff";
};
$('.slider').slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    variableWidth: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3, 
            }
        },
        {
            breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        } 
    ]
});
function validateForm() {
    const Nombre = document.getElementById('name').value;
    const Email = document.getElementById('mail').value;
    const Mensaje = document.getElementById('msg').value;
    if ( Nombre === null || Nombre.length == 0 || /^\s+$/.test(Nombre)) {
        alert(`Ingrese su nombre`);
        return false;
    } 
    if ( !(/\S+@\S+\.\S+/.test(Email)) ) {
        alert(`Ingrese su email`);
        return false;
    } 
    if ( Mensaje === null ) {
        alert(`Ingrese un mensaje`);
        return false;
    } 
}
$(window).scroll( function(){
    $('.scroll-up').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);
        } 
    }); 
});