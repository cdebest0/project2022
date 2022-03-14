package com.dev.demo.member;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class MemberDao {
	Logger logger = Logger.getLogger(MemberDao.class);
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<Map<String, Object>> memberList(Map<String, Object> pMap) {
		logger.info("memberList DAO 호출 성공");
		List<Map<String, Object>> memberList = null;
		memberList = sqlSessionTemplate.selectList("memberList", pMap);
		logger.info("boardList : "+memberList);
		return memberList;
	}
}
