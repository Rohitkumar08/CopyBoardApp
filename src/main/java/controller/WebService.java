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
			String url="http://9682a128.ngrok.io/CopyBoardBeta/"+uName;
			db.saveData(content, url);	
			return true;
	}

	
	@RequestMapping(value="/ImageSubmit/save", consumes="application/x-www-form-urlencoded", method= RequestMethod.POST)
	public String saveImageFile(@RequestParam(value="filepath") String filepath) throws IOException{
		System.out.println(filepath);
		if(filepath.equals(""))
			return null;
		
		String base64Image = filepath.split(",")[1];
		System.out.println("inside rest controller Image "+base64Image);
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
	
	
}
