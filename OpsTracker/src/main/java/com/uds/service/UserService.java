package com.uds.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.uds.domain.User;
import com.uds.repository.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public String userLogin(String name, String pwd) {
		String status = "failed";
		List<User> users = userRepository.findAll();
		for (User usr : users) {
			if (usr.getUserName().equalsIgnoreCase(name)) {
				if (usr.getPassword().equals(pwd)) {
					status = "success";
				}
			}
		}
		return status;
	}
}