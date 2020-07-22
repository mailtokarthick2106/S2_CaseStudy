package com.outreach.management.collections;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Document(collection = "UnregisteredFeedback")
public class UnregisteredFeedbackCollection {

	@JsonProperty("eventId")
	private String eventId;
	
	public UnregisteredFeedbackCollection(String eventId, String email, String unregisteredReason) {
		super();
		this.eventId = eventId;
		this.email = email;
		this.unregisteredReason = unregisteredReason;
	}

	@JsonProperty("email")
	private String email;
	
	@JsonProperty("unregisteredReason")
	private String unregisteredReason;
}
