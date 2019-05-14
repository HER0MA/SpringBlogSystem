package com.henry.spring.blog.domain;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Size;

/**
 * User entity
 */
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name can not be empty")
    @Size(min=2, max=20)
    @Column(nullable = false, length = 20)
    private String name;

    @NotEmpty(message = "Email can not be empty")
    @Size(max=50)
    @Email(message= "Email syntax error" )
    private String email;

    @NotEmpty(message = "Username can not be empty")
    @Size(min=3, max=20)
    @Column(nullable = false, length = 20, unique = true)
    private String username;

    @NotEmpty(message = "Password can not be empty")
    @Size(max=100)
    @Column(length = 100)
    private String password;

    @Column(length = 200)
    private String avatar;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    protected User() {
    }

    public User(Long id, String name, String username, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return String.format("User[id=%d,name='%s',username='%s',email='%s']", id, name, username, email);
    }

}
