package com.outreach.management.services;

import java.util.List;

import com.outreach.management.collections.EventFeedBackDetailsCollections;
import com.outreach.management.collections.EventReportCollections;

public interface OutreachEventService {
	List<EventReportCollections> getAllOutreachEventDetails();
	EventReportCollections getAllOutreachEventDetailsByEventID(String eventId);
	List<EventFeedBackDetailsCollections> getEventFeedBackDetailsCollection(String eventId);
 
}
