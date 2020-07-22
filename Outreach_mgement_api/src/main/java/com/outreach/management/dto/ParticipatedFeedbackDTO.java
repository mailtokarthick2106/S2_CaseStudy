package com.outreach.management.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ParticipatedFeedbackDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1282274672333397263L;

	private String eventId;

	private String email;

	private Integer rating;

	private String improvements;

	private String likes;
}
