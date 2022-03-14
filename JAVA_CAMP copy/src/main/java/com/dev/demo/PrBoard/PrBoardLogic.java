package com.dev.demo.PrBoard;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrBoardLogic {

	Logger logger = Logger.getLogger(PrBoardLogic.class);
	
	@Autowired
	private PrBoardDao prBoardDao = null;
	
	public List<Map<String, Object>> PrBoardList(Map<String, Object> pMap) {
		logger.info("PrBoardLogic 호출 성공");
		List<Map<String, Object>> PrBoardList = null;
		PrBoardList = prBoardDao.PrBoardList(pMap);
		
		
		return PrBoardList;
	}

}
