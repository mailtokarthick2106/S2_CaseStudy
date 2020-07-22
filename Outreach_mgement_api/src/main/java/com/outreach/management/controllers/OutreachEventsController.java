package com.outreach.management.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.outreach.management.collections.EventFeedBackDetailsCollections;
import com.outreach.management.collections.EventReportCollections;
import com.outreach.management.services.OutreachEventService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/outreach")
@AllArgsConstructor
public class OutreachEventsController {
	
	@Autowired
	private OutreachEventService outreachEventService;
	

	@GetMapping("/events")
	public ResponseEntity<List<EventReportCollections>> getAllOutreachEventDetails() {
		List<EventReportCollections> eventReportCollections = outreachEventService.getAllOutreachEventDetails();
		return CollectionUtils.isEmpty(eventReportCollections)
				? new ResponseEntity<>(HttpStatus.NO_CONTENT)
				: new ResponseEntity<>(eventReportCollections, HttpStatus.OK);
	}

	@GetMapping("/events/{eventId}")
	public ResponseEntity<EventReportCollections> getAllOutreachEventDetails(@PathVariable("eventId") String eventId) {
		EventReportCollections eventReportCollection = outreachEventService.getAllOutreachEventDetailsByEventID(eventId);
		return ObjectUtils.isEmpty(eventReportCollection)
				? new ResponseEntity<>(HttpStatus.NO_CONTENT)
				: new ResponseEntity<>(eventReportCollection, HttpStatus.OK);
	}
	@GetMapping("/feedbackdetails/{eventId}")
	public ResponseEntity<List<EventFeedBackDetailsCollections>> getEventFeedBackDetailsCollection(@PathVariable("eventId") String eventId) {
		List<EventFeedBackDetailsCollections> eventFeedBackDetailsCollection = outreachEventService.getEventFeedBackDetailsCollection(eventId);
		return CollectionUtils.isEmpty(eventFeedBackDetailsCollection)
				? new ResponseEntity<>(HttpStatus.NO_CONTENT)
				: new ResponseEntity<>(eventFeedBackDetailsCollection, HttpStatus.OK);
	}

}
