
/* ==============================================
Preloader
=============================================== */

$(window).load(function(){
    $("#preloader").delay(1500).fadeOut(2000);
    $("#loader-wrapper").delay(1500).fadeOut(2000);
    
});	

// Sticky Plugin
  $(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
  });
