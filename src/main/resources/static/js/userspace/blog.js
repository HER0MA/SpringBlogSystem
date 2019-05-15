"use strict";
//# sourceURL=blog.js

// After loading DOM
$(function() {
    $.catalog("#catalog", ".post-content");

    // Delete blog first
    $(".blog-content-container").on("click",".blog-delete-blog", function () {
        // Get CSRF Token
        var csrfToken = $("meta[name='_csrf']").attr("content");
        var csrfHeader = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: blogUrl,
            type: 'DELETE',
            beforeSend: function(request) {
                request.setRequestHeader(csrfHeader, csrfToken); // Add CSRF Token
            },
            success: function(data){
                if (data.success) {
                    // Redirect
                    window.location = data.body;
                } else {
                    toastr.error(data.message);
                }
            },
            error : function() {
                toastr.error("error!");
            }
        });
    });
});