<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Juliett Home</title>
	<meta name="generator" content="BBEdit 10.5" />
	
	<!-- import our css -->
	<link href="css/juliett.css" rel="stylesheet">
	
	<!-- import jquery and our js-->
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/juliett.js"></script>
</head>

<body>
	<h id = "teamname">Team Juliett</h>
	<div>
		Put in your name:<input id="username">
		<button id="nametest" onclick>send</button>
		 
		 
	</div>
</body>
<%
    // This is a scriptlet.  Notice that the "date"
    // variable we declare here is available in the
    // embedded expression later on.
    System.out.println( "Evaluating date now" );
    java.util.Date date = new java.util.Date();
%>	
Hello!  The time is now 
<%
    // This scriptlet generates HTML output
    out.println( String.valueOf( date ));
	out.println( "<br>Your machine's address is " );
	out.println( request.getRemoteHost());
	
%>
</html>
