/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Stefan Grulovic (20150280) - CS306 Final Project
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  $("body").hide().fadeIn(1000);
  //ajax in order to get the data for the points
  $.ajax({
    type: "get",
    url: "js/points.txt",
    beforeSend: function() {},
    timeout: 10000,
    error: function(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "xml",
    success: function(data) {
      $(data).find("points").children().each(function() {
        var xmlDoc = $(this);
        $("body").append(
          //line
          '<div class="svg"></div>' 
          //point
          + '<a href="#" class="point" id="' + xmlDoc.find("id").text() 
          + '" style="left:' + xmlDoc.find("left").text() + ';top:' + xmlDoc.find("top").text() + ';">&#9830;</a>' //the point 
          //pop-up
          + '<div class="pop-up">' 
          + '<h3>' + xmlDoc.find("title").text() + '</h3>' 
          + '<p>' + xmlDoc.find("desc").text() + '</p>' 
          + '</div>'
          //text after clicking the point
          + '<div class="text" id="' + xmlDoc.find("id").text() + '_text">' 
          + '<h4>' + xmlDoc.find("title").text() + '</h4>' 
          + '<p>' + xmlDoc.find("text").text() + '</p>' 
          + '</div>');
      });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //grabbing the height and width of the browser window
      var width = $(document).width();
      var height = $(document).height();

      //adjusting the title
      $("#title").css("width", width);
      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //displaying the pop-up after hovering over the point
      $('.point').hover(function(e) {
        //assign a title box which pops over when hovering over the point in order to guide the user and tell that the link is clickable
        $(this).attr("title", "Go to " + $(this).next().children('h3').text() + " text");
        //get the point color->and put the same one for the header of the pop-up
        $(this).next().children('h3').css("background-color", $(this).css("color"));
        $(this).next().slideDown(300).show(); //on hover of point show the pop-up
      }, function() {
        $(".pop-up").hide(); //hide the pop-up
        $("svg").html("").hide(); //hide the line from the point to pop-up
      });

      //based on mouse position around the point, place the popup connected with a line 
      $('.point').mousemove(function(e) {
        //move the position of the pop-up where the mouse is and move it by x=10px and y=20px -> for readibility
        $(this).next().css('top', e.pageY - 200).css('left', e.pageX + 30);
        //position of the point
        var left = $(this).position().left;
        var top = $(this).position().top;
        //draw a line that goes from the x,y position of the point to the x,y position of the pop-up
        $(".svg").html('<svg height="' + height + '" width="' + width + '"><line x1="' + (left + 8) + '" y1="' + (top + 11) + '" x2="' + (e.pageX + 30) + '" y2="' + (e.pageY - 200) + '"/></svg>');
        //assign the color of the line to be the same as the color of the point and the pop-up heading
        $("line").css("stroke", $(this).css("color"));
      });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //on clicking the point
      $('.point').click(function() {
        //set the title of the web page to the title of the chosen point
        document.title = $(this).next().children("h3").text();
        var current_point = $(this).attr("id"); //grab the id string of the point in order to get the correct picture
        
        //fade effect to change the background image
        $('body').fadeTo('slow', 0, function() {
          $('body').css("background-image", "url(./images/" + current_point + ".png)"); //to the image for the specific point
          //which is named the same for convenience
        }).fadeTo('slow', 1);
        
        $(".point").hide(); //hide the points
        $("#" + current_point + "_text h4").css("background-color", $(this).css("color")); //assign the color of the point to be same as the color of the text heading
        $("#" + current_point + "_text").delay(1000).slideDown("slow"); //display the text
      });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //on clicking the title go back the the starting position of looking at the world map
      $('#title').click(function() {
        document.title = "World Map"; //change the title back to world map
        
        //fade effect to change the background image
        $('body').fadeTo('slow', 0, function() {
          $(".point").show(); //display back the points
          $('body').css("background-image", "url(./images/map.png)");
        }).fadeTo('slow', 1);
        
        $(".text").slideUp("slow"); //hide the text
      });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } //ajax success end
  }); //ajax end
}); //document ready end