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

    function getCommnet(blogId) {
        $.ajax({
            url: '/comments',
            type: 'GET',
            data:{"blogId":blogId},
            success: function(data){
                $("#mainContainer").html(data);

            },
            error : function() {
                toastr.error("error!");
            }
        });
    }

    $(".blog-content-container").on("click","#submitComment", function () {
        // Get CSRF Token
        var csrfToken = $("meta[name='_csrf']").attr("content");
        var csrfHeader = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/comments',
            type: 'POST',
            data:{"blogId":blogId, "commentContent":$('#commentContent').val()},
            beforeSend: function(request) {
                request.setRequestHeader(csrfHeader, csrfToken); // Add CSRF Token
            },
            success: function(data){
                if (data.success) {
                    // clear comment textarea
                    $('#commentContent').val('');
                    getCommnet(blogId);
                } else {
                    toastr.error(data.message);
                }
            },
            error : function() {
                toastr.error("error!");
            }
        });
    });

    $(".blog-content-container").on("click",".blog-delete-comment", function () {
        // Get CSRF Token
        var csrfToken = $("meta[name='_csrf']").attr("content");
        var csrfHeader = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/comments/'+$(this).attr("commentId")+'?blogId='+blogId,
            type: 'DELETE',
            beforeSend: function(request) {
                request.setRequestHeader(csrfHeader, csrfToken); // Add CSRF Token
            },
            success: function(data){
                if (data.success) {
                    getCommnet(blogId);
                } else {
                    toastr.error(data.message);
                }
            },
            error : function() {
                toastr.error("error!");
            }
        });
    });

    // Initialize
    getCommnet(blogId);
});