package controller;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.util.UriComponents;

import dao.DBimplementation;  


@Controller
public class SaveDataController {

	@RequestMapping("/save")
	public ModelAndView saveData(HttpServletRequest request,HttpServletResponse res) throws MalformedURLException {
		
		System.out.println("inside save controller");
		String message = request.getParameter("message");
		String url=request.getParameter("custUrl");
		
		if(url.contains(".") || url.contains("/") || url.contains(" ")) {
			String backUrl = getURLBase(request)+"/CopyBoardBeta/";
			return new ModelAndView("redirect:" + backUrl);  
		}
		 
		
		url=getURLBase(request)+"/CopyBoardBeta/"+url;
		
		
		System.out.println(url);
		DBimplementation db = new DBimplementation();
		db.saveData(message, url);	
		
		
		String msg =db.getData(url);
	//	System.out.println(msg);
		
		 return new ModelAndView("redirect:" + url);  
	}
	public String getURLBase(HttpServletRequest request) throws MalformedURLException {

	    URL requestURL = new URL(request.getRequestURL().toString());
	    String port = requestURL.getPort() == -1 ? "" : ":" + requestURL.getPort();
	    return requestURL.getProtocol() + "://" + requestURL.getHost() + port;

	}
	
}
