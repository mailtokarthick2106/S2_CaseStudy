package com.outreach.management.collections;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "EventReports")
public class EventReportCollections {

	@JsonProperty("eventId")
	private String eventId;

	@JsonProperty("month")
	private String month;

	@JsonProperty("baseLocation")
	private String baseLocation;

	@JsonProperty("beneficiaryName")
	private String beneficiaryName;

	@JsonProperty("venueAddress")
	private String venueAddress;

	@JsonProperty("councilName")
	private String councilName;

	@JsonProperty("project")
	private String project;

	@JsonProperty("category")
	private String category;

	@JsonProperty("eventName")
	private String eventName;

	@JsonProperty("eventDescription")
	private String eventDescription;

	@JsonProperty("eventDate")
	private Date eventDate;

	@JsonProperty("totalNoVolunteers")
	private String totalNoVolunteers;

	@JsonProperty("totalVolunteersHours")
	private String totalVolunteersHours;

	@JsonProperty("totalTravelHours")
	private String totalTravelHours;

	@JsonProperty("overallVolunteeringHours")
	private String overallVolunteeringHours;

	@JsonProperty("livesImpacted")
	private String livesImpacted;

	@JsonProperty("activityType")
	private String activityType;

	@JsonProperty("status")
	private String status;

	@JsonProperty("pocId")
	private String pocId;

	@JsonProperty("pocName")
	private String pocName;

	@JsonProperty("pocContactNumber")
	private String pocContactNumber;

}
