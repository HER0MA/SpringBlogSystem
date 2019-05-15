"use strict";
//# sourceURL=blogedit.js

// After loading DOM
$(function() {

    // Initialize Markdown editor
    $("#md").markdown({
        language: 'zh',
        fullscreen: {
            enable: true
        },
        resize:'vertical',
        localStorage:'md'
    });

    $('.form-control-chosen').chosen();

    $("#uploadImage").click(function() {
        $.ajax({
            url: fileServerUrl,
            type: 'POST',
            cache: false,
            data: new FormData($('#uploadformid')[0]),
            processData: false,
            contentType: false,
            success: function(data){
                var mdcontent=$("#md").val();
                $("#md").val(mdcontent + "\n![]("+data +") \n");

            }
        }).done(function(res) {
            $('#file').val('');
        }).fail(function(res) {});
    })

    // Publish Blog
    $("#submitBlog").click(function() {

        // Get CSRF Token
        var csrfToken = $("meta[name='_csrf']").attr("content");
        var csrfHeader = $("meta[name='_csrf_header']").attr("content");

        $.ajax({
            url: '/u/'+ $(this).attr("userName") + '/blogs/edit',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data:JSON.stringify({"id":$('#blogId').val(),
                "title": $('#title').val(),
                "summary": $('#summary').val() ,
                "content": $('#md').val(),
                "catalog":{"id":$('#catalogSelect').val()},
                "tags":$('.form-control-tag').val()
            }),
            beforeSend: function(request) {
                request.setRequestHeader(csrfHeader, csrfToken); // Add CSRF Token
            },
            success: function(data){
                if (data.success) {
                    // Redirect
                    window.location = data.body;
                } else {
                    toastr.error("error!"+data.message);
                }

            },
            error : function() {
                toastr.error("error!");
            }
        })
    })
});