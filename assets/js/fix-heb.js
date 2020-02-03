//document.getElementById("#slider").style.property += "display: flex;flex-direction: row-reverse;";

   $(window).on('load', function() {
    var style = $('#slider').attr('style');
    style += "display: flex;flex-direction: row-reverse;";
    $('#slider').attr('style', style);
			setTimeout(function(){nav.last();},150);
   });
   
   function goRight(){
	   nav.next();
   }