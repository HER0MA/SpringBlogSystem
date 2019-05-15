package com.henry.spring.blog.service;

import com.henry.spring.blog.domain.Authority;
import com.henry.spring.blog.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorityServiceImpl implements AuthorityService {

	@Autowired
	private AuthorityRepository authorityRepository;
	
	/* (non-Javadoc)
	 * @see com.henry.spring.blog.service.AuthorityService#getAuthorityById(java.lang.Long)
	 */
	@Override
	public Authority getAuthorityById(Long id) {
		return authorityRepository.findOne(id);
	}

}
