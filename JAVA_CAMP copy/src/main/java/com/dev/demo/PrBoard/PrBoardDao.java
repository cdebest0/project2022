package com.dev.demo.PrBoard;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrBoardDao {
	Logger logger = Logger.getLogger(PrBoardDao.class);
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;
	
	public List<Map<String, Object>> PrBoardList(Map<String, Object> pMap) {
		logger.info("PrBoardList DAO 호출 성공");
		List<Map<String, Object>> PrBoardList = null;
		PrBoardList = sqlSessionTemplate.selectList("PrBoardList", pMap);
		logger.info("boardList : "+PrBoardList);
		
		return PrBoardList;
	}

}
