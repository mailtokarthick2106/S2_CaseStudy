package com.outreach.management.collections;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "FeedBackDetails")
public class EventFeedBackDetailsCollections{

	@JsonProperty("eventId")
	private String eventId;
	
	@JsonProperty("feedbackType")
	private String feedbackType;
	
	@JsonProperty("likes")
	private String likes;

	@JsonProperty("dislikes")
	private String dislikes;

	@JsonProperty("rating")
	private String rating;

	@JsonProperty("notParticipatedReason")
	private String notParticipatedReason;
	
	@JsonProperty("unregisteredReason")
	private String unregisteredReason;
	
	@JsonProperty("employeeId")
	private String employeeId;

	

}
