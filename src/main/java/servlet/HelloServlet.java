package servlet;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import team_juliett_processor.Team_Juliett_processor;
import team_juliett_processor.User;

@WebServlet(
        name = "MyServlet",
        urlPatterns = {"/hello"}
    )
public class HelloServlet extends HttpServlet {

	
	public int changeTime(String time) {

        if (time == "any time!" || time == "") 
        	return 2500;
        else {
        	if (time.contains("am")) {
        		int pos = time.indexOf("am");
        		int num = Integer.valueOf(time.substring(0, pos));
        		return num * 100;
        	}
        	else if (time.contains("pm")) {
        		int pos = time.indexOf("pm");
        		int num = Integer.valueOf(time.substring(0, pos));
        		return num * 100 + 1200;
        	}
        }
        return 2500;
	}
	
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        

    	resp.setContentType("course_shedule/html");

    	ServletOutputStream out = resp.getOutputStream();
        
        Enumeration paramNames = req.getParameterNames();
        
        String time_start = "";
        String time_end = "";
        int option_radio = 1;
        ArrayList<Integer> manClass = new ArrayList<Integer>();
        
        
        while(paramNames.hasMoreElements()) {
            String paramName = (String)paramNames.nextElement();
            
            String[] paramValues = req.getParameterValues(paramName);
            
            if (paramName == "time_start")
            	time_start = paramValues[0];
            else if (paramName == "time_end")
            	time_end = paramValues[0];
            else if (paramName == "optionsRadios")
            	option_radio = Integer.valueOf(paramValues[0]);
            else if (paramName.startsWith("class")) {
            	manClass.add(Integer.valueOf(paramValues[0]));
            }
        }
        
        
        int[] man = new int[manClass.size()];
        
        for (int i = 0; i < manClass.size(); i++) {
        	man[i] = manClass.get(i);
        }
        
        int time_start_int = changeTime(time_start);
        int time_end_int = changeTime(time_end);
        

        User bob = new User(1, man, null, time_start_int, time_end_int);
        System.out.print(bob);
        
        String[] message = bob.getSchedule();
        
        String result = "[";
    	
    	for (String s : message) {
    		result = result.concat("{" + s + "}");
    	}
    	result.concat("]");
      
    	req.setAttribute("message", result); // This will be available as ${message}
    	System.out.println(result);
    	req.getRequestDispatcher("schedule.html").forward(req, resp);

    	
    	
//    	File file = new File("src/main/java/servlet/course_example.json");
//    	FileInputStream fis = new FileInputStream(file);
//    	BufferedReader br = new BufferedReader(new InputStreamReader(fis));
//    	
//    	User bob = new User(1, new int[]{58458, 58459, 58460, 58461}, null, 1000, 1700);
//    	
//    	String[] message = bob.getSchedule();
//
//    	String result = "[";
//    	
//    	for (String s : message) {
//    		result = result.concat("{" + s + "}");
//    	}
//    	result.concat("]");
//    	
//    	 //String message = System.getProperty("user.dir") ;
//    	 //String message = br.readLine() ;
//         req.setAttribute("message", result); // This will be available as ${message}
//         System.out.println(result);
//         req.getRequestDispatcher("course_shedule.html").forward(req, resp);
//         
    	
    }
    
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
    	doGet(req, resp);
    }
    
}