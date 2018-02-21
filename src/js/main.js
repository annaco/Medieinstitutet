$(document).ready(function() {

  $('.first').css({"background":"#e64925","width":"10px","height":"10px","border-radius":"50%","border":"3px solid #fff"});

  var images =[];
  var imagesText = []
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
     imagesText = ("<div class='jumbotron_textLarge'>" + jumbotronText[i][0] + "</div>"+ "<div class='jumbotron_textSmall'>" + jumbotronText[i][1] + "</div>");
          
     document.getElementById('slideshowImages').innerHTML = images;
     document.getElementById('slideshowText').innerHTML = imagesText;
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