package com.outreach.management.dto;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class EventSummaryDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1774463984135020277L;

	@Id
	private String eventID;
	private String month;
	private String baseLocation;
	private String beneficiaryName;
	private String venueAddress;
	private String councilName;
	private String project;
	private String category;
	private String eventName;
	private String eventDescription;
	private String eventDate;
	private String totalNoVolunteers;
	private String totalVolunteersHours;
	private String totalTravelHours;
	private String overallVolunteeringHours;
	private String livesImpacted;
	private String activityType;
	private String status;
	private String pOCID;
	private String pOCName;
	private String pOCContactNumber;

}
