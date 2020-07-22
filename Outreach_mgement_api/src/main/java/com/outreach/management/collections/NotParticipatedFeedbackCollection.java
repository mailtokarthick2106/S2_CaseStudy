package com.outreach.management.collections;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Document(collection = "NotParticipatedFeedback")
public class NotParticipatedFeedbackCollection {
	@JsonProperty("eventId")
	private String eventId;

	public NotParticipatedFeedbackCollection(String eventId, String email, String notParticpatedReason) {
		super();
		this.eventId = eventId;
		this.email = email;
		this.notParticpatedReason = notParticpatedReason;
	}

	@JsonProperty("email")
	private String email;

	@JsonProperty("notParticpatedReason")
	private String notParticpatedReason;

}
