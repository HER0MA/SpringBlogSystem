"use strict";
//# sourceURL=u.js

// After loading DOM
$(function() {

    var _pageSize;

    function getBlogsByName(pageIndex, pageSize) {
        $.ajax({
            url: "/u/"+  username  +"/blogs",
            contentType : 'application/json',
            data:{
                "async":true,
                "pageIndex":pageIndex,
                "pageSize":pageSize,
                "catalog":null,  //catalogId,
                "keyword":$("#keyword").val()
            },
            success: function(data){
                $("#mainContainer").html(data);

                // if search by group
                if (catalogId) {
                    $(".nav-item .nav-link").removeClass("active");
                }
            },
            error : function() {
                toastr.error("error!");
            }
        });
    }

    $.tbpage("#mainContainer", function (pageIndex, pageSize) {
        getBlogsByName(pageIndex, pageSize);
        _pageSize = pageSize;
    });

    $("#searchBlogs").click(function() {
        getBlogsByName(0, _pageSize);
    });

    $(".nav-item .nav-link").click(function() {

        var url = $(this).attr("url");

        $(".nav-item .nav-link").removeClass("active");
        $(this).addClass("active");

        $.ajax({
            url: url+'&async=true',
            success: function(data){
                $("#mainContainer").html(data);
            },
            error : function() {
                toastr.error("error!");
            }
        })

        $("#keyword").val('');
    });

});