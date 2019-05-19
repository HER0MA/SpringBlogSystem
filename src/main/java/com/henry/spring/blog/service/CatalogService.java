package com.henry.spring.blog.service;

import com.henry.spring.blog.domain.Catalog;
import com.henry.spring.blog.domain.User;

import java.util.List;

public interface CatalogService {
    Catalog saveCatalog(Catalog catalog);

    void removeCatalog(Long id);

    Catalog getCatalogById(Long id);

    List<Catalog> listCatalogs(User user);
}
