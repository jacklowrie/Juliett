<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Juliett Home</title>
	<meta name="generator" content="BBEdit 10.5" />
	
	<!-- import our css -->
	<link href="css/juliett.css" rel="stylesheet">
	<link href="css/bootstrap.css" rel="<stylesheet>">
	
	<!-- import jquery and our js-->
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/juliett.js"></script>
</head>

<body>
	<div class="jumbotron">
  		<h1>Jumbotron</h1>
  		<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  		<p><a class="btn btn-primary btn-lg">Learn more</a></p>
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
