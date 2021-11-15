package com.douzone.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("GuestBookTestController")
@RequestMapping("/test/gb")
public class GuestBookController {
	
	// add 에제
	@RequestMapping("/ex1")
	public String ex1() {
		return "gb/ex1";
	}
	// List 예제
	@RequestMapping("/ex2")
	public String ex2() {
		return "gb/ex2";
	}

	// 삭제 예제
	
	@RequestMapping("/ex3")
	public String ex3() {
		return "gb/ex3";
	}
}
