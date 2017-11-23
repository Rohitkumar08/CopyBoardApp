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
	public void saveCopiedContent(@RequestParam(value="name") String uName, @RequestParam(value="content") String content) {
		
			System.out.println("inside rest controller");
			System.out.println(content);
////			System.out.println(URLDecoder.decode(content));
//			 content =replacer(content).toString(); 
//			
		DBimplementation db = new DBimplementation();
		String url="http://1a1d6bfd.ngrok.io/CopyBoardBeta/"+uName;
		db.saveData(content, url);	
		
	}
	  public static String replacer(String outBuffer) {
	      String data = outBuffer.toString();
	      try {
	         data = data.replaceAll("%(?![0-9a-fA-F]{2})", "%25");
	         data = data.replaceAll("\\+", "%2B");
//	         data = URLDecoder.decode(data, "utf-8");
	      } catch (Exception e) {
	         e.printStackTrace();
	      }
	      return data;
	   }
	
	
	
	
}
