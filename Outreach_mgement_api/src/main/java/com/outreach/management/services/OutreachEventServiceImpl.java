package com.outreach.management.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.outreach.management.collections.EventFeedBackDetailsCollections;
import com.outreach.management.collections.EventReportCollections;
import com.outreach.management.repositories.EventFeedbackDetailsRepository;
import com.outreach.management.repositories.EventSummaryRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class OutreachEventServiceImpl implements OutreachEventService{
	private static final Logger log = LoggerFactory.getLogger(OutreachEventServiceImpl.class);

	@Autowired
	private EventSummaryRepository eventSummaryRepository;

	@Autowired
	private EventFeedbackDetailsRepository eventFeedbackDetailsRepository;

	public List<EventReportCollections> getAllOutreachEventDetails() {
		return eventSummaryRepository.findAll();

	}
	@HystrixCommand(fallbackMethod = "getAllOutreachEventDetailsByEventID_Fallback")
	public EventReportCollections getAllOutreachEventDetailsByEventID(String eventId) {

		return eventSummaryRepository.findByEventId(eventId);

	}
	@HystrixCommand(fallbackMethod = "getEventFeedBackDetailsCollection_Fallback")
	public List<EventFeedBackDetailsCollections> getEventFeedBackDetailsCollection(String eventId) {
		
		log.info(String.format("received eventId %s", eventId));
		
		List<EventFeedBackDetailsCollections> r= eventFeedbackDetailsRepository.findByEventId(eventId);
		
		log.info(String.format("received list of Feedback details %s", r));
		return r;

	}

}
