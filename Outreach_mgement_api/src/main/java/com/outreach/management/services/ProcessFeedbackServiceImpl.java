package com.outreach.management.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.outreach.management.collections.NotParticipatedFeedbackCollection;
import com.outreach.management.collections.ParticpatedFeedbackCollection;
import com.outreach.management.collections.UnregisteredFeedbackCollection;
import com.outreach.management.dto.NotParticipatedFeedbackDTO;
import com.outreach.management.dto.ParticipatedFeedbackDTO;
import com.outreach.management.dto.UnregisteredFeedbackDTO;
import com.outreach.management.repositories.NotParticipatedFeedbackRepository;
import com.outreach.management.repositories.ParticpatedFeedbackRepository;
import com.outreach.management.repositories.UnregisteredFeedbackRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ProcessFeedbackServiceImpl implements ProcessFeedbackService{

	@Autowired
	private ParticpatedFeedbackRepository particpatedFeedbackRepository;

	@Autowired
	private NotParticipatedFeedbackRepository notParticipatedFeedbackRepository;

	@Autowired
	private UnregisteredFeedbackRepository unregisteredFeedbackRepository;

	public ParticpatedFeedbackCollection processParticpatedFeedback(ParticipatedFeedbackDTO participatedFeedbackDTO) {
		ParticpatedFeedbackCollection particpatedFeedbackCollection = new ParticpatedFeedbackCollection(
				participatedFeedbackDTO.getEventId(), participatedFeedbackDTO.getEmail(),
				participatedFeedbackDTO.getRating(), participatedFeedbackDTO.getImprovements(),
				participatedFeedbackDTO.getLikes());
		return particpatedFeedbackRepository.save(particpatedFeedbackCollection);

	}

	public NotParticipatedFeedbackCollection processNotParticpatedFeedback(
			NotParticipatedFeedbackDTO notParticipatedFeedbackDTO) {
		NotParticipatedFeedbackCollection notParticipatedFeedbackCollection = new NotParticipatedFeedbackCollection(
				notParticipatedFeedbackDTO.getEventId(), notParticipatedFeedbackDTO.getEmail(),
				notParticipatedFeedbackDTO.getNotParticpatedReason());
		return notParticipatedFeedbackRepository.save(notParticipatedFeedbackCollection);

	}

	public UnregisteredFeedbackCollection processUnregisteredFeedback(UnregisteredFeedbackDTO unregisteredFeedbackDTO) {
		UnregisteredFeedbackCollection unregisteredFeedbackCollection = new UnregisteredFeedbackCollection(
				unregisteredFeedbackDTO.getEventId(), unregisteredFeedbackDTO.getEmail(),
				unregisteredFeedbackDTO.getUnregisteredReason());
		return unregisteredFeedbackRepository.save(unregisteredFeedbackCollection);

	}

}
