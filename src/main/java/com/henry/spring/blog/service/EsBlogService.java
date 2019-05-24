package com.henry.spring.blog.service;

import java.util.List;

import com.henry.spring.blog.domain.User;
import com.henry.spring.blog.domain.es.EsBlog;
import com.henry.spring.blog.vo.TagVO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EsBlogService {

    void removeEsBlog(String id);

    EsBlog updateEsBlog(EsBlog esBlog);

    EsBlog getEsBlogByBlogId(Long blogId);

    Page<EsBlog> listNewestEsBlogs(String keyword, Pageable pageable);

    Page<EsBlog> listHotestEsBlogs(String keyword, Pageable pageable);

    Page<EsBlog> listEsBlogs(Pageable pageable);

    List<EsBlog> listTop5NewestEsBlogs();

    List<EsBlog> listTop5HotestEsBlogs();

    List<TagVO> listTop30Tags();

    List<User> listTop12Users();
}

