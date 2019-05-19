package com.henry.spring.blog.service;

import com.henry.spring.blog.domain.Vote;

public interface VoteService {
    Vote getVoteById(Long id);

    void removeVote(Long id);
}

