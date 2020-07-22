package com.outreach.management.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.outreach.management.collections.EventFeedBackDetailsCollections;

import java.util.List;


@Repository
public interface EventFeedbackDetailsRepository extends MongoRepository<EventFeedBackDetailsCollections, String> {
	List<EventFeedBackDetailsCollections> findByEventId(String eventId);

}
