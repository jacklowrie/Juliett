$(document).ready( function(){


//student class stores all info about a student using the service except course preferences
	function student(name, residence, starttime, endtime) {
		this.name = name;
		this.residence = residence;
		this.starttime = starttime;
		this.endtime = endtime;
	}

//methods to set properties of class student
	function setName (newName){
		this.name = newName;
	}

	function setResidence (newRes){
		this.residence = newRes;
	}

	function setStart(newStart){
		this.starttime = newStart;
	}

	function setEnd(newEnd){
		this.endtime = newEnd;
	}

//creates the user object when the form is submitted
	var user = new student() // should initialize to "null" values for error catching
	$("#userinfo").submit(function(){
		user.setName(getElementById("username"))
		//set residence var
		//set start/end time vars
	});
	
	
//Schedules.html (calendar functions)	
	$("#busybutton").click( function (){ //when showbusy is clicked, make a struct and mark it as busy according to the inputted times
		var mystruct = [
			["#m08", 0x1, 0x0001],
			["#m09", 0x1, 0x0002],
			["#m10", 0x1, 0x0004],
			["#m11", 0x1, 0x0008],
			["#m12", 0x1, 0x0010],
			["#m13", 0x1, 0x0020],
			["#m14", 0x1, 0x0040],
			["#m15", 0x1, 0x0080],
			["#m16", 0x1, 0x0100],
			["#m17", 0x1, 0x0200],
			["#m18", 0x1, 0x0400],
			["#m19", 0x1, 0x0800],
			["#m20", 0x1, 0x1000],
			["#m21", 0x1, 0x2000],
		
			["#t08", 0x2, 0x0001],
			["#t09", 0x2, 0x0002],
			["#t10", 0x2, 0x0004],
			["#t11", 0x2, 0x0008],
			["#t12", 0x2, 0x0010],
			["#t13", 0x2, 0x0020],
			["#t14", 0x2, 0x0040],
			["#t15", 0x2, 0x0080],
			["#t16", 0x2, 0x0100],
			["#t17", 0x2, 0x0200],
			["#t18", 0x2, 0x0400],
			["#t19", 0x2, 0x0800],
			["#t20", 0x2, 0x1000],
			["#t21", 0x2, 0x2000],

			["#w08", 0x4, 0x0001],
			["#w09", 0x4, 0x0002],
			["#w10", 0x4, 0x0004],
			["#w11", 0x4, 0x0008],
			["#w12", 0x4, 0x0010],
			["#w13", 0x4, 0x0020],
			["#w14", 0x4, 0x0040],
			["#w15", 0x4, 0x0080],
			["#w16", 0x4, 0x0100],
			["#w17", 0x4, 0x0200],
			["#w18", 0x4, 0x0400],
			["#w19", 0x4, 0x0800],
			["#w20", 0x4, 0x1000],
			["#w21", 0x4, 0x2000],
		
			["#r08", 0x8, 0x0001],
			["#r09", 0x8, 0x0002],
			["#r10", 0x8, 0x0004],
			["#r11", 0x8, 0x0008],
			["#r12", 0x8, 0x0010],
			["#r13", 0x8, 0x0020],
			["#r14", 0x8, 0x0040],
			["#r15", 0x8, 0x0080],
			["#r16", 0x8, 0x0100],
			["#r17", 0x8, 0x0200],
			["#r18", 0x8, 0x0400],
			["#r19", 0x8, 0x0800],
			["#r20", 0x8, 0x1000],
			["#r21", 0x8, 0x2000],
		
			["#f08", 0x10, 0x0001],
			["#f09", 0x10, 0x0002],
			["#f10", 0x10, 0x0004],
			["#f11", 0x10, 0x0008],
			["#f12", 0x10, 0x0010],
			["#f13", 0x10, 0x0020],
			["#f14", 0x10, 0x0040],
			["#f15", 0x10, 0x0080],
			["#f16", 0x10, 0x0100],
			["#f17", 0x10, 0x0200],
			["#f18", 0x10, 0x0400],
			["#f19", 0x10, 0x0800],
			["#f20", 0x10, 0x1000],
			["#f21", 0x10, 0x2000]

		];
		var times =  parseInt ($("#times").val(), 16); //get times input
		var days =  parseInt ($("#days").val(), 16); //get days input
		
		$("#myresult").html( 'Day(s): ' + days + '. Time(s): ' + times + '.' ); //display inputs in hex
		
		for(var i=0; i < mystruct.length; i++)											 //go through the structure
			updateSchedule(mystruct[i][0], mystruct[i][1], mystruct[i][2], days, times); //and update each cell to busy or not
	});
	
	function updateSchedule(loc, currentday, currenttime, days, times){			
		if ( ((currentday & days) == currentday) && 
			 ((currenttime & times) == currenttime) )
			$(loc).html("busy");
		else
			$(loc).html("");
	}

//endfile
});