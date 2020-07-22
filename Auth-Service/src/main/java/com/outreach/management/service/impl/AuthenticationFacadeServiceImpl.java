package com.outreach.management.service.impl;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.outreach.management.service.AuthenticationFacadeService;

@Component
public class AuthenticationFacadeServiceImpl implements AuthenticationFacadeService {

    @Override
    public Authentication getAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }
}
