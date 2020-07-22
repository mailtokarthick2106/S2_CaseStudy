package com.outreach.management.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.outreach.management.collections.UnregisteredFeedbackCollection;

@Repository
public interface UnregisteredFeedbackRepository extends MongoRepository<UnregisteredFeedbackCollection, String>{

}
