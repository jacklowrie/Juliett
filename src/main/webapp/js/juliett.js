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
			["#m080", 0x1, 0x0001],
			["#m085", 0x1, 0x0002],
			["#m090", 0x1, 0x0004],
			["#m095", 0x1, 0x0008],
			["#m100", 0x1, 0x0010],
			["#m105", 0x1, 0x0020],
			["#m110", 0x1, 0x0040],
			["#m115", 0x1, 0x0080],
			["#m120", 0x1, 0x0100],
			["#m125", 0x1, 0x0200],
			["#m130", 0x1, 0x0400],
			["#m135", 0x1, 0x0800],
			["#m140", 0x1, 0x1000],
			["#m145", 0x1, 0x2000],
			["#m150", 0x1, 0x4000],
			["#m155", 0x1, 0x8000],
			["#m160", 0x1, 0x10000],
			["#m165", 0x1, 0x20000],
			["#m170", 0x1, 0x40000],
			["#m175", 0x1, 0x80000],
			["#m180", 0x1, 0x100000],
			["#m185", 0x1, 0x200000],
			["#m190", 0x1, 0x400000],
			["#m195", 0x1, 0x800000],
			["#m200", 0x1, 0x1000000],
			["#m205", 0x1, 0x2000000],
			["#m210", 0x1, 0x4000000],
			["#m215", 0x1, 0x8000000],

			["#t080", 0x2, 0x0001],
			["#t085", 0x2, 0x0002],
			["#t090", 0x2, 0x0004],
			["#t095", 0x2, 0x0008],
			["#t100", 0x2, 0x0010],
			["#t105", 0x2, 0x0020],
			["#t110", 0x2, 0x0040],
			["#t115", 0x2, 0x0080],
			["#t120", 0x2, 0x0100],
			["#t125", 0x2, 0x0200],
			["#t130", 0x2, 0x0400],
			["#t135", 0x2, 0x0800],
			["#t140", 0x2, 0x1000],
			["#t145", 0x2, 0x2000],
			["#t150", 0x2, 0x4000],
			["#t155", 0x2, 0x8000],
			["#t160", 0x2, 0x10000],
			["#t165", 0x2, 0x20000],
			["#t170", 0x2, 0x40000],
			["#t175", 0x2, 0x80000],
			["#t180", 0x2, 0x100000],
			["#t185", 0x2, 0x200000],
			["#t190", 0x2, 0x400000],
			["#t195", 0x2, 0x800000],
			["#t200", 0x2, 0x1000000],
			["#t205", 0x2, 0x2000000],
			["#t210", 0x2, 0x4000000],
			["#t215", 0x2, 0x8000000],

			["#w080", 0x4, 0x0001],
			["#w085", 0x4, 0x0002],
			["#w090", 0x4, 0x0004],
			["#w095", 0x4, 0x0008],
			["#w100", 0x4, 0x0010],
			["#w105", 0x4, 0x0020],
			["#w110", 0x4, 0x0040],
			["#w115", 0x4, 0x0080],
			["#w120", 0x4, 0x0100],
			["#w125", 0x4, 0x0200],
			["#w130", 0x4, 0x0400],
			["#w135", 0x4, 0x0800],
			["#w140", 0x4, 0x1000],
			["#w145", 0x4, 0x2000],
			["#w150", 0x4, 0x4000],
			["#w155", 0x4, 0x8000],
			["#w160", 0x4, 0x10000],
			["#w165", 0x4, 0x20000],
			["#w170", 0x4, 0x40000],
			["#w175", 0x4, 0x80000],
			["#w180", 0x4, 0x100000],
			["#w185", 0x4, 0x200000],
			["#w190", 0x4, 0x400000],
			["#w195", 0x4, 0x800000],
			["#w200", 0x4, 0x1000000],
			["#w205", 0x4, 0x2000000],
			["#w210", 0x4, 0x4000000],
			["#w215", 0x4, 0x8000000],

			["#r080", 0x8, 0x0001],
			["#r085", 0x8, 0x0002],
			["#r090", 0x8, 0x0004],
			["#r095", 0x8, 0x0008],
			["#r100", 0x8, 0x0010],
			["#r105", 0x8, 0x0020],
			["#r110", 0x8, 0x0040],
			["#r115", 0x8, 0x0080],
			["#r120", 0x8, 0x0100],
			["#r125", 0x8, 0x0200],
			["#r130", 0x8, 0x0400],
			["#r135", 0x8, 0x0800],
			["#r140", 0x8, 0x1000],
			["#r145", 0x8, 0x2000],
			["#r150", 0x8, 0x4000],
			["#r155", 0x8, 0x8000],
			["#r160", 0x8, 0x10000],
			["#r165", 0x8, 0x20000],
			["#r170", 0x8, 0x40000],
			["#r175", 0x8, 0x80000],
			["#r180", 0x8, 0x100000],
			["#r185", 0x8, 0x200000],
			["#r190", 0x8, 0x400000],
			["#r195", 0x8, 0x800000],
			["#r200", 0x8, 0x1000000],
			["#r205", 0x8, 0x2000000],
			["#r210", 0x8, 0x4000000],
			["#r215", 0x8, 0x8000000],

			["#f080", 0x10, 0x0001],
			["#f085", 0x10, 0x0002],
			["#f090", 0x10, 0x0004],
			["#f095", 0x10, 0x0008],
			["#f100", 0x10, 0x0010],
			["#f105", 0x10, 0x0020],
			["#f110", 0x10, 0x0040],
			["#f115", 0x10, 0x0080],
			["#f120", 0x10, 0x0100],
			["#f125", 0x10, 0x0200],
			["#f130", 0x10, 0x0400],
			["#f135", 0x10, 0x0800],
			["#f140", 0x10, 0x1000],
			["#f145", 0x10, 0x2000],
			["#f150", 0x10, 0x4000],
			["#f155", 0x10, 0x8000],
			["#f160", 0x10, 0x10000],
			["#f165", 0x10, 0x20000],
			["#f170", 0x10, 0x40000],
			["#f175", 0x10, 0x80000],
			["#f180", 0x10, 0x100000],
			["#f185", 0x10, 0x200000],
			["#f190", 0x10, 0x400000],
			["#f195", 0x10, 0x800000],
			["#f200", 0x10, 0x1000000],
			["#f205", 0x10, 0x2000000],
			["#f210", 0x10, 0x4000000],
			["#f215", 0x10, 0x8000000],

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
	
	function daystohex(thiscourse){
		var daysinhex=0x0;
		var daystring = thiscourse.meeting_days; //from json parsed message
		var days = [ ["Mo",0x1], ["Tu",0x2], ["We",0x4], ["Th",0x8], ["Fr",0x10] ]; //corresponding hex vals for each day in string
		
		for (var i=0; i<days.length; i++){ //go through the input string
			daysinhex |= daystring.indexOf(days[i][0]) == -1 ? 0x0 : days[i][1]; //or-in (bitwise) the hex value of each day in daystring to daysinhex
		}
		return daysinhex
	}

//endfile
});