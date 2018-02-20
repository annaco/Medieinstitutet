$(document).ready(function() {

   if(deviceDetector.device == 'desktop')
    console.log('desctop');
  else{
    if(deviceDetector.device == 'tablet')
       console.log('tablet');
    else
       console.log('mobile');
   }
 

 
/* $('.apply').hide();
  $('.applyHover').mouseenter (function() {
   $('.apply').show();
  }); 
   $('.applyHover').mouseleave (function() {
   $('.apply').hide();
  });  */

});