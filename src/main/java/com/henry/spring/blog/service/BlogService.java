package com.henry.spring.blog.service;

import com.henry.spring.blog.domain.Blog;
import com.henry.spring.blog.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BlogService {

    Blog saveBlog(Blog blog);

    void removeBlog(Long id);

    Blog getBlogById(Long id);

    Page<Blog> listBlogsByTitleVote(User user, String title, Pageable pageable);

    Page<Blog> listBlogsByTitleVoteAndSort(User user, String title, Pageable pageable);

    void readingIncrease(Long id);

    Blog createComment(Long blogId, String commentContent);

    void removeComment(Long blogId, Long commentId);

    Blog createVote(Long blogId);

    void removeVote(Long blogId, Long voteId);
}

