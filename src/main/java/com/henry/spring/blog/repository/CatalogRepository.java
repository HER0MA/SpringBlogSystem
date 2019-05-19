package com.henry.spring.blog.repository;

import java.util.List;

import com.henry.spring.blog.domain.Catalog;
import com.henry.spring.blog.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatalogRepository extends JpaRepository<Catalog, Long> {
    List<Catalog> findByUser(User user);

    List<Catalog> findByUserAndName(User user,String name);
}
