package com.outreach.management;

import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.LinkedHashMap;

import org.apache.commons.codec.binary.Base64;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AuthApplicationClientTest {
    public static final String AUTH_SERVER_URI = "http://localhost:8080/oauth/token";
    private static final Logger log = LoggerFactory.getLogger(AuthApplicationClientTest.class);
    /*
     * Prepare HTTP Headers.
     */
    private static HttpHeaders getHeaders(){
    	HttpHeaders headers = new HttpHeaders();
    	headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    	return headers;
    }
   /*
    * Add HTTP Authorization header, using Basic-Authentication to send client-credentials.
    */
   private static HttpHeaders getHeadersWithClientCredentials(){
   	String plainClientCredentials="my-trusted-client:secret";
   	String base64ClientCredentials = new String(Base64.encodeBase64(plainClientCredentials.getBytes()));
   	
   	HttpHeaders headers = getHeaders();
   	headers.add("Authorization", "Basic " + base64ClientCredentials);
   	return headers;
   }    
	@Test
	public void contextLoads() {
	     RestTemplate restTemplate = new RestTemplate(); 
	        boolean isSuccessed=false;
	        HttpEntity<String> request = new HttpEntity<String>(getHeadersWithClientCredentials());
	        ResponseEntity<Object> response = restTemplate.exchange(AUTH_SERVER_URI, HttpMethod.POST, request, Object.class);
	        LinkedHashMap<String, Object> map = (LinkedHashMap<String, Object>)response.getBody();
	        if(map!=null){
	        	log.info("access_token ="+map.get("access_token")+", token_type="+map.get("token_type")+", "
	        			+ "refresh_token="+map.get("refresh_token")+", expires_in="+map.get("expires_in")+", scope="+map.get("scope"));;
	        }else{
	        	log.info("No user exist----------");
	            
	        }
	        Assert.assertEquals(isSuccessed, true);
	}

}

