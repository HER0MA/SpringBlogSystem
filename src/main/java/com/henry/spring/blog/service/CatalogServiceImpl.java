package com.henry.spring.blog.service;

import java.util.List;

import com.henry.spring.blog.domain.Catalog;
import com.henry.spring.blog.domain.User;
import com.henry.spring.blog.repository.CatalogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CatalogServiceImpl implements CatalogService {
    @Autowired
    private CatalogRepository catalogRepository;

    @Override
    public Catalog saveCatalog(Catalog catalog) {
        // duplicate check
        List<Catalog> list = catalogRepository.findByUserAndName(catalog.getUser(), catalog.getName());
        if(list !=null && list.size() > 0) {
            throw new IllegalArgumentException("Already in this catalog");
        }
        return catalogRepository.save(catalog);
    }

    @Override
    public void removeCatalog(Long id) {
        catalogRepository.delete(id);
    }

    @Override
    public Catalog getCatalogById(Long id) {
        return catalogRepository.findOne(id);
    }

    @Override
    public List<Catalog> listCatalogs(User user) {
        return catalogRepository.findByUser(user);
    }

}
