package com.henry.spring.blog.service;

import com.henry.spring.blog.domain.Comment;

public interface CommentService {

    Comment getCommentById(Long id);

    void removeComment(Long id);
}

