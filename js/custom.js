$(document).ready(function () {
  $("body").on("mouseover", "img", function () {
    $(this).css("-webkit-filter", "none");
    //$(this).css("margin-left", "-50px");
    //$(this).css("float", "left");

    /*if($)
    	$(this).addClass("img-prop");*/
    console.log($(this).next());
  });

  $("body").on("mouseout", "img", function () {
    $(this).css("-webkit-filter", "grayscale(100%)");
    //$(this).css("margin-left", "0px");
    //$(this).css("float", "left");
    /*$(this).removeClass("img-prop");*/
    console.log($(this).next());
  });

   setTimeout(function() {$('#slide1').fadeOut(500)}, 1000);
   setTimeout(function() {$('#slide2').fadeOut(500)}, 2500)
   setTimeout(function() {$('#slide3').fadeOut(500)}, 4000);
   setTimeout(function() {$('#slide4').fadeOut(500)}, 5500);
});