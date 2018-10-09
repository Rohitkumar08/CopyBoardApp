package controller;

import java.net.MalformedURLException;

import java.net.URL;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.impl.Log4JLogger;
import org.springframework.stereotype.Controller;

import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;


import dao.DBimplementation;  


@Controller
public class SaveDataController {

	final static Logger logger = Loggers.getLogger(SaveDataController.class);
	
	@RequestMapping("/save")
	public ModelAndView saveData(HttpServletRequest request,HttpServletResponse res) throws MalformedURLException {
		
		System.out.println("inside save controller");
		String message = request.getParameter("message");
		String url=request.getParameter("custUrl");
		String ip=null;
		String getWay = request.getHeader("VIA");   // Gateway
		ip = request.getHeader("X-FORWARDED-FOR");   // proxy
		if(ip==null)
		{
		    ip = request.getRemoteAddr();
		}
		logger.info("name: "+url+ ","+ " message:  "+message+","+" IP:  "+ ip);
		
		 if(url.contains(".") || url.contains("/") || url.contains(" ")) {
			String backUrl = getURLBase(request)+"/CopyBoardBeta/";
			return new ModelAndView("redirect:" + backUrl);  
		}
		
		url=getURLBase(request)+"/CopyBoardBeta/"+url;
		
		
		
		System.out.println(url);
		DBimplementation db = new DBimplementation();
		
		 int time=180;
		 String checked= request.getParameter("check");
			System.out.println(checked);
		 if((!StringUtils.isEmpty(checked)) && checked.equals("on")) {
			 time=Integer.parseInt(request.getParameter("time"));
			 System.out.println(time);
		}
		 
		 
		 db.saveData(message, url,time);	 
		String msg =db.getData(url);
		System.out.println(msg);
		
		 return new ModelAndView("redirect:" + url);  
	}
	public String getURLBase(HttpServletRequest request) throws MalformedURLException {

	    URL requestURL = new URL(request.getRequestURL().toString());
	    String port = requestURL.getPort() == -1 ? "" : ":" + requestURL.getPort();
	    return requestURL.getProtocol() + "://" + requestURL.getHost() + port;

	}
	
}
