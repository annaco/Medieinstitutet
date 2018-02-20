$(document).ready(function() {

  var images =[];
  var i = 0;
 
  var jumbotronPicture =["jumbo1.jpg", "jumbo2.jpg", "jumbo3.jpg"];

   showPictureAndText(i);
  
  
    $('.first').click(function() {
     
      i = 0;
      showPictureAndText(i);
        
    });

    $('.second').click(function() {
     
       i = 1;
        showPictureAndText(i);
      
    });
    
    $('.third').click(function() {
     
       i = 2;
        showPictureAndText(i);
     
    });

    function showPictureAndText(i) {
    
      console.log(i);
      images = ("<img src=images/" + jumbotronPicture[i] + ">"+ "<br>"); 
     
     
      document.getElementById('slideshowImages').innerHTML = images;
     }

   var pageWidth = $(window).width();
   if (pageWidth > 1024) {
     $('.apply').hide();
   
     $('.applyHover').mouseover(function() {
       $('.apply').show();
     });
     $('.applyHover').mouseout(function() {
       $('.apply').hide();
     });
   }
   else {
     $('.apply').hide();
   }
     
 
});