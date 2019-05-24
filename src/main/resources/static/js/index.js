"use strict";
//# sourceURL=index.js

// After loading DOM
$(function() {

    var _pageSize;

    function getBlogsByName(pageIndex, pageSize) {
        $.ajax({
            url: "/blogs",
            contentType : 'application/json',
            data:{
                "async":true,
                "pageIndex":pageIndex,
                "pageSize":pageSize,
                "keyword":$("#indexkeyword").val()
            },
            success: function(data){
                $("#mainContainer").html(data);

                var keyword = $("#indexkeyword").val();

                if (keyword.length > 0) {
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

    // Keywords query
    $("#indexsearch").click(function() {
        getBlogsByName(0, _pageSize);
    });

    // hottest / latest
    $(".nav-item .nav-link").click(function() {

        var url = $(this).attr("url");

        // remove previous class, then add current class
        $(".nav-item .nav-link").removeClass("active");
        $(this).addClass("active");

        // load other components to right side
        $.ajax({
            url: url+'&async=true',
            success: function(data){
                $("#mainContainer").html(data);
            },
            error : function() {
                toastr.error("error!");
            }
        })

        // clear search box
        $("#indexkeyword").val('');
    });


});