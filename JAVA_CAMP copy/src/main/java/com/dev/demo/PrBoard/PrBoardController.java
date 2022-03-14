package com.dev.demo.PrBoard;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;

@Controller
@RequestMapping("/Board/*")
public class PrBoardController {
	Logger logger = Logger.getLogger(PrBoardController.class);
	
	@Autowired
	private PrBoardLogic prBoardLogic= null;
	
	@GetMapping("PrBoardList")
	public String PrBoardLit(@RequestParam Map<String,Object> pMap, Model model) {
		logger.info("PrBoardList 호출 성공");
		logger.info("사용자가 입력한 정보 ==> "+pMap);
		List<Map<String,Object>> PrBoardList = null;
		PrBoardList = prBoardLogic.PrBoardList(pMap);
		Gson g = new Gson();
		String G_PrBoardList = g.toJson(PrBoardList.toString());
		model.addAttribute("PrBoardList", G_PrBoardList);
		
		return "forward:/PrBoard/PrBoardList.jsp";
	}
	
}
