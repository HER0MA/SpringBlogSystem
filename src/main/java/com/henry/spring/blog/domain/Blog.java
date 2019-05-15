package com.henry.spring.blog.domain;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import com.github.rjeschke.txtmark.Processor;

@Entity
public class Blog implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Title can not be empty")
    @Size(min=2, max=50)
    @Column(nullable = false, length = 50)
    private String title;

    @NotEmpty(message = "Summary can not be empty")
    @Size(min=2, max=300)
    @Column(nullable = false)
    private String summary;

    @Lob
    @Basic(fetch=FetchType.LAZY)
    @NotEmpty(message = "Content can not be empty")
    @Size(min=2)
    @Column(nullable = false)
    private String content;

    @Lob
    @Basic(fetch=FetchType.LAZY)
    @NotEmpty(message = "Content can not be empty")
    @Size(min=2)
    @Column(nullable = false)
    private String htmlContent;

    @OneToOne(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @Column(nullable = false)
    @org.hibernate.annotations.CreationTimestamp
    private Timestamp createTime;

    @Column(name="readSize")
    private Integer readSize = 0;

    @Column(name="commentSize")
    private Integer commentSize = 0;

    @Column(name="voteSize")
    private Integer voteSize = 0;

    @Column(name="tags", length = 100)
    private String tags;

    protected Blog() {
        // TODO Auto-generated constructor stub
    }
    public Blog(String title, String summary,String content) {
        this.title = title;
        this.summary = summary;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
        this.htmlContent = Processor.process(content); // Markdown to HTML
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public String getHtmlContent() {
        return htmlContent;
    }
    public Integer getReadSize() {
        return readSize;
    }
    public void setReadSize(Integer readSize) {
        this.readSize = readSize;
    }
    public Integer getCommentSize() {
        return commentSize;
    }
    public void setCommentSize(Integer commentSize) {
        this.commentSize = commentSize;
    }
    public Integer getVoteSize() {
        return voteSize;
    }
    public void setVoteSize(Integer voteSize) {
        this.voteSize = voteSize;
    }
    public String getTags() {
        return tags;
    }
    public void setTags(String tags) {
        this.tags = tags;
    }
}
