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
	$("#busybutton").click( function (){
		var mystruct = [
			["#m08", 0x1, 0x01],
			["#m09", 0x1, 0x02],
			["#m10", 0x1, 0x04],
			["#m11", 0x1, 0x08],
			["#m12", 0x1, 0x10],
			["#m13", 0x1, 0x20],
			["#m14", 0x1, 0x40],
			["#m15", 0x1, 0x80],
		
			["#t08", 0x2, 0x01],
			["#t09", 0x2, 0x02],
			["#t10", 0x2, 0x04],
			["#t11", 0x2, 0x08],
			["#t12", 0x2, 0x10],
			["#t13", 0x2, 0x20],
			["#t14", 0x2, 0x40],
			["#t15", 0x2, 0x80],
		
			["#w08", 0x4, 0x01],
			["#w09", 0x4, 0x02],
			["#w10", 0x4, 0x04],
			["#w11", 0x4, 0x08],
			["#w12", 0x4, 0x10],
			["#w13", 0x4, 0x20],
			["#w14", 0x4, 0x40],
			["#w15", 0x4, 0x80],
		
			["#r08", 0x8, 0x01],
			["#r09", 0x8, 0x02],
			["#r10", 0x8, 0x04],
			["#r11", 0x8, 0x08],
			["#r12", 0x8, 0x10],
			["#r13", 0x8, 0x20],
			["#r14", 0x8, 0x40],
			["#r15", 0x8, 0x80],
		
			["#f08", 0x10, 0x01],
			["#f09", 0x10, 0x02],
			["#f10", 0x10, 0x04],
			["#f11", 0x10, 0x08],
			["#f12", 0x10, 0x10],
			["#f13", 0x10, 0x20],
			["#f14", 0x10, 0x40],
			["#f15", 0x10, 0x80]
		];
		var times =  parseInt ($("#times").val(), 16) ;
		var days =  parseInt ($("#days").val(), 16) ;
		
		$("#myresult").html( 'times ' + times + ' days ' + days );
			for(var i=0; i < mystruct.length; i++)
				updateSchedule(mystruct[i][0], mystruct[i][1], mystruct[i][2], days, times);
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