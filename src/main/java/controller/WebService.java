package controller;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.StandardSocketOptions;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;

import sun.misc.BASE64Decoder;

import org.omg.Messaging.SyncScopeHelper;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import dao.DBimplementation;
 
@RestController
public class WebService {
	
	
	@RequestMapping(value="/formSubmit/service",consumes = "application/x-www-form-urlencoded", method=RequestMethod.POST)
	public String saveCopiedContent(@RequestParam(value="name") String uName, @RequestParam(value="content") String content) {
			if(uName.equals("") || uName.length()<=2) {
				return "";
			}
			System.out.println("inside rest controller");
			System.out.println(content);
				
			DBimplementation db = new DBimplementation();
			String url="http://37504fe8.ngrok.io/CopyBoardBeta/"+uName;
			db.saveData(content, url);	
			return "";
	}

	@RequestMapping(value="/ImageSubmit/save", consumes="application/x-www-form-urlencoded", method= RequestMethod.POST)
	public String saveImageFile(@RequestParam(value="filepath") String filepath) throws IOException{
		System.out.println(filepath);
		if(filepath.equals(""))
			return null;
		
		String base64Image = filepath.split(",")[1];
		@SuppressWarnings("restriction")
		BASE64Decoder decoder = new BASE64Decoder();
		@SuppressWarnings("restriction")
		byte[] data = decoder.decodeBuffer(base64Image);
		String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH.mm.ss").format(new Date());
		
		try (OutputStream stream = new FileOutputStream("/Users/rohit/eclipse-workspace/CopyBoardBeta/images/"+timeStamp+".png")) {
			System.out.println("inside output stream");
		    stream.write(data);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("exception occurred");
			}

		return "uploaded";
	}
	
	@RequestMapping(value="/ImageSubmit/share", consumes="application/x-www-form-urlencoded", method= RequestMethod.POST)
	public ModelAndView shareImageFile(@RequestParam(value="filepath") String filepath, @RequestParam(value="name") String name) throws IOException{

		if(filepath.equals(""))
			return null;
		
		
		System.out.println("inside /ImageSubmit/share");
		DBimplementation db = new DBimplementation();
		String url="http://37504fe8.ngrok.io/CopyBoardBeta/"+name;
		db.saveData(filepath, url);	
		String base64Image = filepath.split(",")[1];

		@SuppressWarnings({ "restriction" })
		BASE64Decoder decoder = new BASE64Decoder();
		@SuppressWarnings("restriction")
		byte[] data = decoder.decodeBuffer(base64Image);
		String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH.mm.ss").format(new Date());
		
		try (OutputStream stream = new FileOutputStream("/Users/rohit/eclipse-workspace/CopyBoardBeta/images/"+timeStamp+".png")) {
			System.out.println("inside output stream");
		    stream.write(data);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("exception occurred");
			}

		return new ModelAndView("redirect:" + url); 
	}
	
}
