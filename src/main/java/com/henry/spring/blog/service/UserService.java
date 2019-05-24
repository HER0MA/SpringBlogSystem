package com.henry.spring.blog.service;

import com.henry.spring.blog.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Collection;
import java.util.List;

public interface UserService {
    User saveOrUpateUser(User user);

    User registerUser(User user);

    void removeUser(Long id);

    User getUserById(Long id);

    Page<User> listUsersByNameLike(String name, Pageable pageable);

    List<User> listUsersByUsernames(Collection<String> usernames);
}
