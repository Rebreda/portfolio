$(document).ready(function () {
 $( ".ani" ).each(function() {
//    $( this ).toggleClass( "example" );
//     console.log($(this).attr('href'));
     $(this).on('click', function(){
//     console.log($(this).attr('href'));
         var d = $(this).attr('href');
         $(d).velocity("scroll", {
            duration: 1000
            , easing: "easeInBack"
        });
         
     })
     
  });
});