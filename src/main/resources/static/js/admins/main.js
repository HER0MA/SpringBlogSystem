"use strict";

// After loading DON
$(function() {

    // Menu event
    $(".blog-menu .list-group-item").click(function() {

        var url = $(this).attr("url");

        // set other button inactive and current button active
        $(".blog-menu .list-group-item").removeClass("active");
        $(this).addClass("active");  

        // load page from other model to right side area
         $.ajax({ 
             url: url, 
             success: function(data){
                 $("#rightContainer").html(data);
         },
         error : function() {
             alert("error");
             }
         });
    });


    // select first menu by default
     $(".blog-menu .list-group-item:first").trigger("click");
});