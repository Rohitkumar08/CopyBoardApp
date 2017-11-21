package controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dao.DBimplementation;

@RestController
public class WebService {
	
	
	@RequestMapping(value="/{uName}/{content}", method=RequestMethod.GET)
	public void saveCopiedContent(@PathVariable String uName, @PathVariable String content) {
		
			System.out.println("inside rest controller");
		DBimplementation db = new DBimplementation();
		String url="http://4932bfdc.ngrok.io/CopyBoardBeta/"+uName;
		db.saveData(content, url);	
		
		
	}
	
	
	
	
}
