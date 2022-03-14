package com.dev.demo.member;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class MemberLogic {
	Logger logger = Logger.getLogger(MemberLogic.class);
	@Autowired
	private MemberDao memberdao = null;
	
	public List<Map<String, Object>> memberList(Map<String, Object> pMap) {
		List<Map<String, Object>> memberList = null;
		memberList=memberdao.memberList(pMap);
		
		return memberList;
	}

}
