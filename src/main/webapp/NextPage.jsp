
<jsp:useBean id="user" class="user.UserData" scope="session"/>
<jsp:setProperty name="user" property="*"/> 
<%@ page import = "course.CourseData"%>

<%
	CourseData tmp = new CourseData();
%> 

<HTML>
<BODY>
You entered<BR>
Name: <%= user.getUsername() %><BR>
Email: <%= user.getEmail() %><BR>
Age: <%= user.getAge() %><BR>
Course:  <%= tmp.courseList[0].name %><BR>  
</BODY>
</HTML>