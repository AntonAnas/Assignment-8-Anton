$(document).ready(function() {
    var sizeXD = " ";
    sizeXD += "Width: " + $(window).width() + "</br> ";
    sizeXD += "Height: " + $(window).height() + "</br> ";
    sizeXD += "Current location: " + location;

    $("#sizeXD").html(sizeXD);
     
 
    $("#reload").click(function() {
        location.reload();
    }); 


    $("#P3Color").click(function(){
        $("#chingchong").css('background-color', 'yellow');
    });

    $( "#showhide" ).click(function() {
        $( "#lizard" ).toggle();
    });

    $('#greeting').click(function() {
      $('#sayHello').html("Hello Everyone!");
    });
     $("#mice").on({
        mouseenter: function() {
            $("#mice").text("Mouse Over");
        },
        mouseleave: function() {
            $("#mice").text("Mouse Out");
        },
        mousedown: function() {
            $("#mice").text("Mouse down");
        },
        mouseup: function() {
            $("#mice").text("Mouse up");
        },
        dblclick: function() {
            $("#mice").text("Double click");
        }
    });
});