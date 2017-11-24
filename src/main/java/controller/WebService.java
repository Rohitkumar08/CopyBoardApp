package controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dao.DBimplementation;

@RestController
public class WebService {
	
	
	@RequestMapping(value="/formSubmit/service",consumes = "application/x-www-form-urlencoded", method=RequestMethod.POST)
	public Boolean saveCopiedContent(@RequestParam(value="name") String uName, @RequestParam(value="content") String content) {
			if(uName.equals("") || uName.length()<=2) {
				return false;
			}
			System.out.println("inside rest controller");
			System.out.println(content);
				
			DBimplementation db = new DBimplementation();
			String url="http://35303209.ngrok.io/CopyBoardBeta/"+uName;
			db.saveData(content, url);	
			return true;
	}
	
	
}
