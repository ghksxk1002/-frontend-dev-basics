package com.douzone.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("ApiTestController")
@RequestMapping("/test")
public class ApiController {
	
	@RequestMapping("/text")
	public String text() {
		return "text";
	}
}
