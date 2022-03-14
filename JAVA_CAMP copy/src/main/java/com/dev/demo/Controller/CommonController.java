package com.dev.demo.Controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dev.demo.member.MemberLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/Common/*")
public class CommonController {
	Logger logger = Logger.getLogger(CommonController.class);
	@Autowired
	private MemberLogic memberLogic = null;
	
	@GetMapping("login")
	public String login(@RequestParam Map<String,Object> pMap, Model model, HttpServletResponse res) {
		logger.info("MemberLogin 호출 성공");
		logger.info("사용자가 입력한 정보 ==> "+pMap);
		List<Map<String,Object>> memberList = null;
		memberList = memberLogic.memberList(pMap);
		model.addAttribute("memberList", memberList);
		logger.info("memberList"+memberList);
		Gson g = new Gson();
		String G_login=g.toJson(memberList.toString());
		
		for(int i=0; i<memberList.size(); i++) {
		if(memberList.get(i).get("MEM_ID").equals(pMap.get("MEM_ID"))) {
			logger.info("mem_id : "+pMap.get("MEM_ID"));
			if(memberList.get(i).get("MEM_PW").equals(pMap.get("MEM_PW"))) {
				logger.info("mem_pw : "+pMap.get("MEM_PW"));
				Cookie mem_nick = new Cookie("mem_nick",memberList.get(0).get("MEM_NICK").toString());
				mem_nick.setMaxAge(60);
				mem_nick.setPath("/");
				res.addCookie(mem_nick);
				break;
			}
			else {
				logger.info("비밀번호가 틀렸습니다. 다시입력하세요");
			}
		}
		else {
			logger.info("아이디 틀림");
		}
		}
		
		return G_login;
	}
	
	
}
