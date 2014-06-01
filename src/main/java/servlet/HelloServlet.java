package servlet;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import team_juliett_processor.Team_Juliett_processor;

@WebServlet(
        name = "MyServlet",
        urlPatterns = {"/hello"}
    )
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        
//    	int m;
//    	for (int i = 0; i < Integer.MAX_VALUE; i++) 
//			for (int j = 0; j < 10; j++)
//				for (int h = 0; h < 10; h++)
//					m = i / 2;
    	
    	
//    	resp.setContentType("text/html");
//
//    	ServletOutputStream out = resp.getOutputStream();
//        String title = "Reading All Form Parameters";
//        String docType =
//        "<!doctype html public \"-//w3c//dtd html 4.0 " +
//        "transitional//en\">\n";
//        out.println(docType +
//          "<html>\n" +
//          "<head><title>" + title + "</title></head>\n" +
//          "<body bgcolor=\"#f0f0f0\">\n" +
//          "<h1 align=\"center\">" + title + "</h1>\n" +
//          "<table width=\"100%\" border=\"1\" align=\"center\">\n" +
//          "<tr bgcolor=\"#949494\">\n" +
//          "<th>Param Name</th><th>Param Value(s)</th>\n"+
//          "</tr>\n");
//        
//        Enumeration paramNames = req.getParameterNames();
//        while(paramNames.hasMoreElements()) {
//            String paramName = (String)paramNames.nextElement();
//            out.print("<tr><td>" + paramName + "</td>\n<td>");
//            String[] paramValues = req.getParameterValues(paramName);
//            if (paramValues.length == 1) {
//                String paramValue = paramValues[0];
//                if (paramValue.length() == 0)
//                  out.println("<i>No Value</i>");
//                else
//                  out.println(paramValue);
//              } else {
//                  // Read multiple valued data
//                  out.println("<ul>");
//                  for(int i=0; i < paramValues.length; i++) {
//                     out.println("<li>" + paramValues[i]);
//                  }
//                  out.println("</ul>");
//              }
//           }
//           out.println("</tr>\n</table>\n</body></html>");
//        
//        
    	

//    	Enumeration paramNames = req.getParameterNames();
//    	
//        out.write("hello he".getBytes());
//        while (paramNames.hasMoreElements()) {
//        	out.println((String)paramNames.nextElement());
//        }
    	
//        out.flush();
//        out.close();
    	

    	File file = new File("src/main/java/servlet/course_example.json");
    	FileInputStream fis = new FileInputStream(file);
    	BufferedReader br = new BufferedReader(new InputStreamReader(fis));
    	
    	Team_Juliett_processor p = new Team_Juliett_processor();
    	
    	 String message = p.test();
    	 //String message = System.getProperty("user.dir") ;
    	 //String message = br.readLine() ;
         req.setAttribute("message", message); // This will be available as ${message}
         System.out.println(message);
         req.getRequestDispatcher("course_shedule.html").forward(req, resp);
         
    	
    }
    
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
    	doGet(req, resp);
    }
    
}