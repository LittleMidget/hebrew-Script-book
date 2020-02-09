//document.getElementById("#slider").style.property += "display: flex;flex-direction: row-reverse;";

   $(window).on('load', function() {

	//lazyLoad = false;
	// 		setTimeout(function(){
	// 			//nav.last();
	// 			    var style = $('#slider').attr('style');
   //  style += "display: flex;flex-direction: row-reverse;";
   //  $('#slider').attr('style', style);
				
	// 			},3500);
				
				
	// 				setTimeout(function(){
				

				
	// 			},2000);
				
// 									setTimeout(function(){
// 					var pages = $('.page');
// 					pages.each(function( key, page ) {
// 						 pages.eq(key).data('loaded', false);
// 						 loadPageImages(pages.eq(key));
// 						 pages.eq(key).data('loaded', false);
// });
// nav.last();

				
// 				},3000);
//    });
// setTimeout(function(){
//    var pageParent = $('.pages');
//    pageParent.children().each(function( key, page ) {
//       pageParent.prepend(page);
// });
// //nav.last();


// },4000);
setTimeout(function(){
   var pageParent = $('.pages');
   pageParent.children().each(function( key, page ) {
      pageParent.prepend(page);
});
nav.last();
var oldTo = nav.to;
nav.to = function(number){
oldTo(nav.numPages - number +1 );

};


},1000);
});
   
   function goRight(){
	   nav.next();
   }
   
      function goLeft(){
	   nav.back();
   }