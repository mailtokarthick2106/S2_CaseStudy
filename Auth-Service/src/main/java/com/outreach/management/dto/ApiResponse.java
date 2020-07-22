package com.outreach.management.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"result"})
public class ApiResponse {
	
	private int status;
	private String message;
	private Object result;
	
	public ApiResponse(HttpStatus status, String message, Object result){
	    this.status = status.value();
	    this.message = message;
	    this.result = result;
    }
	
}
