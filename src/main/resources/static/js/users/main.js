"use strict";

// After loading DOM
$(function() {

    var _pageSize; // for search

    // get user list based on username, index, page size
    function getUersByName(pageIndex, pageSize) {
         $.ajax({ 
             url: "/users", 
             contentType : 'application/json',
             data:{
                 "async":true, 
                 "pageIndex":pageIndex,
                 "pageSize":pageSize,
                 "name":$("#searchName").val()
             },
             success: function(data){
                 $("#mainContainer").html(data);
             },
             error : function() {
                 toastr.error("error!");
             }
         });
    }

    // paging
    $.tbpage("#mainContainer", function (pageIndex, pageSize) {
        getUersByName(pageIndex, pageSize);
        _pageSize = pageSize;
    });

    // search
    $("#searchNameBtn").click(function() {
        getUersByName(0, _pageSize);
    });

    // get page of adding new users
    $("#addUser").click(function() {
        $.ajax({ 
             url: "/users/add", 
             success: function(data){
                 $("#userFormContainer").html(data);
             },
             error : function(data) {
                 toastr.error("error!");
             }
         });
    });

    // get page of editing new users
    $("#rightContainer").on("click",".blog-edit-user", function () { 
        $.ajax({ 
             url: "/users/edit/" + $(this).attr("userId"), 
             success: function(data){
                 $("#userFormContainer").html(data);
             },
             error : function() {
                 toastr.error("error!");
             }
         });
    });

    // empty list after subimt
    $("#submitEdit").click(function() {
        $.ajax({ 
             url: "/users", 
             type: 'POST',
             data:$('#userForm').serialize(),
             success: function(data){
                 $('#userForm')[0].reset();  

                 if (data.success) {
                     // refresh main page
                     getUersByName(0, _pageSize);
                 } else {
                     toastr.error(data.message);
                 }

             },
             error : function() {
                 toastr.error("error!");
             }
         });
    });

    // delete user
    $("#rightContainer").on("click",".blog-delete-user", function () { 

        $.ajax({ 
             url: "/users/" + $(this).attr("userId") , 
             type: 'DELETE', 
             success: function(data){
                 if (data.success) {
                     // refresh main page
                     getUersByName(0, _pageSize);
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