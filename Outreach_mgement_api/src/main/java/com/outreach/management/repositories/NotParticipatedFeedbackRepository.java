package com.outreach.management.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.outreach.management.collections.NotParticipatedFeedbackCollection;

@Repository
public interface NotParticipatedFeedbackRepository extends MongoRepository<NotParticipatedFeedbackCollection, String>{

}
