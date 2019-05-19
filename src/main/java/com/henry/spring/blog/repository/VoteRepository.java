package com.henry.spring.blog.repository;

import com.henry.spring.blog.domain.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepository extends JpaRepository<Vote, Long> {
}
