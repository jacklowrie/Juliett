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
			["#m08.0", 0x1, 0x0001],
			["#m08.0", 0x1, 0x0002],
			["#m09.0", 0x1, 0x0004],
			["#m09.5", 0x1, 0x0008],
			["#m10.0", 0x1, 0x0010],
			["#m10.5", 0x1, 0x0020],
			["#m11.0", 0x1, 0x0040],
			["#m11.5", 0x1, 0x0080],
			["#m12.0", 0x1, 0x0100],
			["#m12.5", 0x1, 0x0200],
			["#m13.0", 0x1, 0x0400],
			["#m13.5", 0x1, 0x0800],
			["#m14.0", 0x1, 0x1000],
			["#m14.5", 0x1, 0x2000],
			["#m15.0", 0x1, 0x4000],
			["#m15.5", 0x1, 0x8000],
			["#m16.0", 0x1, 0x10000],
			["#m16.5", 0x1, 0x20000],
			["#m17.0", 0x1, 0x40000],
			["#m17.5", 0x1, 0x80000],
			["#m18.0", 0x1, 0x100000],
			["#m18.5", 0x1, 0x200000],
			["#m19.0", 0x1, 0x400000],
			["#m19.5", 0x1, 0x800000],
			["#m20.0", 0x1, 0x1000000],
			["#m20.5", 0x1, 0x2000000],
			["#m21.0", 0x1, 0x4000000],
			["#m21.5", 0x1, 0x8000000],

			["#t08.0", 0x2, 0x0001],
			["#t08.0", 0x2, 0x0002],
			["#t09.0", 0x2, 0x0004],
			["#t09.5", 0x2, 0x0008],
			["#t10.0", 0x2, 0x0010],
			["#t10.5", 0x2, 0x0020],
			["#t11.0", 0x2, 0x0040],
			["#t11.5", 0x2, 0x0080],
			["#t12.0", 0x2, 0x0100],
			["#t12.5", 0x2, 0x0200],
			["#t13.0", 0x2, 0x0400],
			["#t13.5", 0x2, 0x0800],
			["#t14.0", 0x2, 0x1000],
			["#t14.5", 0x2, 0x2000],
			["#t15.0", 0x2, 0x4000],
			["#t15.5", 0x2, 0x8000],
			["#t16.0", 0x2, 0x10000],
			["#t16.5", 0x2, 0x20000],
			["#t17.0", 0x2, 0x40000],
			["#t17.5", 0x2, 0x80000],
			["#t18.0", 0x2, 0x100000],
			["#t18.5", 0x2, 0x200000],
			["#t19.0", 0x2, 0x400000],
			["#t19.5", 0x2, 0x800000],
			["#t20.0", 0x2, 0x1000000],
			["#t20.5", 0x2, 0x2000000],
			["#t21.0", 0x2, 0x4000000],
			["#t21.5", 0x2, 0x8000000],

			["#w08.0", 0x4, 0x0001],
			["#w08.0", 0x4, 0x0002],
			["#w09.0", 0x4, 0x0004],
			["#w09.5", 0x4, 0x0008],
			["#w10.0", 0x4, 0x0010],
			["#w10.5", 0x4, 0x0020],
			["#w11.0", 0x4, 0x0040],
			["#w11.5", 0x4, 0x0080],
			["#w12.0", 0x4, 0x0100],
			["#w12.5", 0x4, 0x0200],
			["#w13.0", 0x4, 0x0400],
			["#w13.5", 0x4, 0x0800],
			["#w14.0", 0x4, 0x1000],
			["#w14.5", 0x4, 0x2000],
			["#w15.0", 0x4, 0x4000],
			["#w15.5", 0x4, 0x8000],
			["#w16.0", 0x4, 0x10000],
			["#w16.5", 0x4, 0x20000],
			["#w17.0", 0x4, 0x40000],
			["#w17.5", 0x4, 0x80000],
			["#w18.0", 0x4, 0x100000],
			["#w18.5", 0x4, 0x200000],
			["#w19.0", 0x4, 0x400000],
			["#w19.5", 0x4, 0x800000],
			["#w20.0", 0x4, 0x1000000],
			["#w20.5", 0x4, 0x2000000],
			["#w21.0", 0x4, 0x4000000],
			["#w21.5", 0x4, 0x8000000],

			["#r08.0", 0x8, 0x0001],
			["#r08.0", 0x8, 0x0002],
			["#r09.0", 0x8, 0x0004],
			["#r09.5", 0x8, 0x0008],
			["#r10.0", 0x8, 0x0010],
			["#r10.5", 0x8, 0x0020],
			["#r11.0", 0x8, 0x0040],
			["#r11.5", 0x8, 0x0080],
			["#r12.0", 0x8, 0x0100],
			["#r12.5", 0x8, 0x0200],
			["#r13.0", 0x8, 0x0400],
			["#r13.5", 0x8, 0x0800],
			["#r14.0", 0x8, 0x1000],
			["#r14.5", 0x8, 0x2000],
			["#r15.0", 0x8, 0x4000],
			["#r15.5", 0x8, 0x8000],
			["#r16.0", 0x8, 0x10000],
			["#r16.5", 0x8, 0x20000],
			["#r17.0", 0x8, 0x40000],
			["#r17.5", 0x8, 0x80000],
			["#r18.0", 0x8, 0x100000],
			["#r18.5", 0x8, 0x200000],
			["#r19.0", 0x8, 0x400000],
			["#r19.5", 0x8, 0x800000],
			["#r20.0", 0x8, 0x1000000],
			["#r20.5", 0x8, 0x2000000],
			["#r21.0", 0x8, 0x4000000],
			["#r21.5", 0x8, 0x8000000],

			["#f08.0", 0x10, 0x0001],
			["#f08.0", 0x10, 0x0002],
			["#f09.0", 0x10, 0x0004],
			["#f09.5", 0x10, 0x0008],
			["#f10.0", 0x10, 0x0010],
			["#f10.5", 0x10, 0x0020],
			["#f11.0", 0x10, 0x0040],
			["#f11.5", 0x10, 0x0080],
			["#f12.0", 0x10, 0x0100],
			["#f12.5", 0x10, 0x0200],
			["#f13.0", 0x10, 0x0400],
			["#f13.5", 0x10, 0x0800],
			["#f14.0", 0x10, 0x1000],
			["#f14.5", 0x10, 0x2000],
			["#f15.0", 0x10, 0x4000],
			["#f15.5", 0x10, 0x8000],
			["#f16.0", 0x10, 0x10000],
			["#f16.5", 0x10, 0x20000],
			["#f17.0", 0x10, 0x40000],
			["#f17.5", 0x10, 0x80000],
			["#f18.0", 0x10, 0x100000],
			["#f18.5", 0x10, 0x200000],
			["#f19.0", 0x10, 0x400000],
			["#f19.5", 0x10, 0x800000],
			["#f20.0", 0x10, 0x1000000],
			["#f20.5", 0x10, 0x2000000],
			["#f21.0", 0x10, 0x4000000],
			["#f21.5", 0x10, 0x8000000],

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