package controller;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServlet;
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
public class DisplayContentController {

	
	@RequestMapping(path="/{name}", method=RequestMethod.GET)
	public ModelAndView getContent(@PathVariable String name) {
		
		
		UriComponents uriComponents = MvcUriComponentsBuilder
		        .fromMethodName(DisplayContentController.class, "getContent", name).buildAndExpand(42);

		URI uri = uriComponents.encode().toUri();
		String url = uri.toString();
		System.out.println("inside Display controller");
		System.out.println(url);
		DBimplementation db = new DBimplementation();
		String msg =db.getData(url);
		System.out.println(msg);
		Map<String, String> model = new HashMap<String, String>();
		model.put("name", name);
		model.put("message", msg);
	    return new ModelAndView("middle", "model", model);
	}
	
}
