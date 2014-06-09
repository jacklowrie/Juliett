package servlet;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
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

    	//ServletOutputStream out = resp.getOutputStream();
        
        Enumeration paramNames = req.getParameterNames();
        
        String time_start = "";
        String time_end = "";
        int option_radio = 1;
        ArrayList<Integer> manClass = new ArrayList<Integer>();
        ArrayList<Integer> optClass = new ArrayList<Integer>();

        
        while(paramNames.hasMoreElements()) {
            String paramName = (String)paramNames.nextElement();
            
            System.out.println(paramName);
            
            String[] paramValues = req.getParameterValues(paramName);
            
            if (paramName.equals("time_start")) {
            	time_start = paramValues[0];
            }
            else if (paramName.equals("time_end")) {
                System.out.println(paramName + ":***" + paramValues[0]);

            	time_end = paramValues[0];
            }
            else if (paramName.equals("optionsRadios")) {
            	option_radio = Integer.valueOf(paramValues[0]);
            }
            else if (paramName.startsWith("man_")) {
            	manClass.add(Integer.valueOf(paramValues[0]));
            }
            else if (paramName.startsWith("opt_")) {
            	optClass.add(Integer.valueOf(paramValues[0]));
            }
        }
        

        manClass.removeAll(optClass);
        
        int[] man = {};
        if (manClass.size() > 4) {
        	man = new int[4];
        }
        else { 
        	man = new int[manClass.size()];
        }
        
        for (int i = 0; i < manClass.size() && i < 4; i++) {
        	man[i] = manClass.get(i);
        }
        
        int[] opt = {};
        if (optClass.size() > 4) {
        	opt = new int[4];
        }
        else { 
        	opt = new int[optClass.size()];
        }
        
        for (int i = 0; i < optClass.size() && i < 4; i++) {
        	opt[i] = optClass.get(i);
        }
        
        int time_start_int = changeTime(time_start);
        int time_end_int = changeTime(time_end);
        
        /*
         * option_radio : 1. North of Kellogg   2. South of Kellogg 3. I don't mind walking!
         */
        System.out.println("option_radio: " + option_radio);
        for (int i = 0; i < man.length; i++) {
        	System.out.println("man" + i + ": " + man[i]);
        }
        for (int i = 0; i < opt.length; i++) {
        	System.out.println("opt" + i + ": " + opt[i]);
        }
        
        System.out.println("time_start_int: " + time_start_int);
        System.out.println("time_end_int: " + time_end_int);
        
        /* *************************************** 
         * Team_Juliett_processor is not stable yet
         */
        
        Team_Juliett_processor process = null;
		try {
			process = new Team_Juliett_processor(option_radio, man, opt, time_start_int, time_end_int);
		} catch (ParseException e) {
			e.printStackTrace();
		}
        int[] message = process.getSchedule();
        
        /* ******************************
         * Team_Juliett_processor part
         */
        
        
        /* hardcoded wit this sentence */ 
//		int[] message = {58464, 58459};
		
        String result = "";
    	
    	for (int m : message) {
    		result = result.concat( String.valueOf( m ) + ",");
    	}
    	result = result.substring(0, result.length() - 1);
    	
      
    	req.setAttribute("message", result); // This will be available as ${message}
    	System.out.println(result);
    	//req.getRequestDispatcher("schedules.jsp").forward(req, resp);
    	resp.sendRedirect("schedules.html?message=" + result);

    	
    	
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