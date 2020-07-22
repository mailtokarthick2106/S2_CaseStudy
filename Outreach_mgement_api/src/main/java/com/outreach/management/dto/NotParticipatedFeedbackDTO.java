package com.outreach.management.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NotParticipatedFeedbackDTO  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2512071192667431484L;

	private String eventId;

	private String email;

	private String notParticpatedReason;

}
