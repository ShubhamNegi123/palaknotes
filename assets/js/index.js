$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    
    
    
   /* dropDown();
    function dropDown(){
        $('.catogery').hover(function(){
            $('.dropdown-page').slideDown()
        });
    }*/
});