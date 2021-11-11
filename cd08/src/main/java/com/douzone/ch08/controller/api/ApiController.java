package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.dto.JsonResult;
import com.douzone.ch08.controller.dto.XmlResult;
import com.douzone.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 테이타";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습</h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setNo(1L);
		vo.setName("이주은");
		vo.setMessage("호이");
		
		
		return XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/json", method = RequestMethod.GET)
	public Object json() {
		
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("이주은");
		vo.setMessage("호이");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post01", method = RequestMethod.POST)
	public Object post01(GuestbookVo vo) {
		
		// service -> 레포지토리 호출 -> 디비 인서트 성공한 후.
		// no를 가지고 돌아와야 된다 딜리트를 위해서
		vo.setNo(1L);
		// 가는 도중에 가로체일수도 있기 때문에 없에주는것이 좋다
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method = RequestMethod.POST)
	public Object post02(@RequestBody GuestbookVo vo) {
		
		// service -> 레포지토리 호출 -> 디비 인서트 성공한 후.
		// no를 가지고 돌아와야 된다 딜리트를 위해서
		vo.setNo(1L);
		// 가는 도중에 가로체일수도 있기 때문에 없에주는것이 좋다
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
