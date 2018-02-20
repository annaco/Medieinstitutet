$(document).ready(function() {

  var images =[];
  var i = 0;
 
  var jumbotronPicture =["jumbo1.jpg", "jumbo2.jpg", "jumbo3.jpg"];
  var jumbotronText = [
      ["Ansökan öppen", "Nu kan du ansöka till höstens utbildningar"],
      ["YH-UTBILDNINGAR", "Läs mer om våra yh-utbildningar"],
      [ "ÖPPET HUS ", "Välkommen till Öppet hus på Medieinstitutet i mars"]
  ]

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

  $('.second').click(function() {
    i = 1;
    showPictureAndText(i);
  });

  function showPictureAndText(i) {
    
     console.log(i);
     images = ("<img src=images/" + jumbotronPicture[i] + ">"+ "<br>"); 
     jumbotronText = (jumbotronText[i][1] + "<br>");
          
     document.getElementById('slideshowImages').innerHTML = images;
     document.getElementById('slideshowText').innerHTML = jumbotronText;
  }



   //Gör så att innehållet under ansökan endast visas föär desktop
   var pageWidth = $(window).width();
   if (pageWidth > 1019) {
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