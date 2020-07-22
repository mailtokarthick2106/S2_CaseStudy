package com.outreach.management.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UnregisteredFeedbackDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1438262088903709116L;

	private String eventId;

	private String email;

	private String unregisteredReason;

}
