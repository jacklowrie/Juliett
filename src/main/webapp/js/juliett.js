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
			["#m08", 0x0000001],
			["#m09", 0x0000002],
			["#m10", 0x0000004],
			["#m11", 0x0000008],
			["#m12", 0x0000010],
			["#m13", 0x0000020],
			["#m14", 0x0000040],
			["#m15", 0x0000080],
			
			["#t08", 0x0000100],
			["#t09", 0x0000200],
			["#t10", 0x0000400],
			["#t11", 0x0000800],
			["#t12", 0x0001000],
			["#t13", 0x0002000],
			["#t14", 0x0004000],
			["#t15", 0x0008000],
			
			["#w08", 0x0010000],
			["#w09", 0x0020000],
			["#w10", 0x0040000],
			["#w11", 0x0080000],
			["#w12", 0x0100000],
			["#w13", 0x0200000],
			["#w14", 0x0400000],
			["#w15", 0x0800000],
			
			["#r08", 0x01000000],
			["#r09", 0x02000000],
			["#r10", 0x04000000],
			["#r11", 0x08000000],
			["#r12", 0x10000000],
			["#r13", 0x20000000],
			["#r14", 0x40000000],
			["#r15", 0x80000000],
			
			["#f08", 0x0100000000],
			["#f09", 0x0200000000],
			["#f10", 0x0400000000],
			["#f11", 0x0800000000],
			["#f12", 0x1000000000],
			["#f13", 0x2000000000],
			["#f14", 0x4000000000],
			["#f15", 0x8000000000]
		];
		var busy =  parseInt ($("#busyinput").val(), 16) ;
		$("#myresult").html( busy );
		for(var i=0; i < mystruct.length; i++)	
			updateSchedule(mystruct[i][0], mystruct[i][1], busy);
	});
	
	function updateSchedule(loc, mask, busy){
		var res = busy & mask;
		var mytf = (busy & mask) == mask;
		if ((busy & mask) == mask)
			$(loc).html("busy");
		else
			$(loc).html("");
	}

//endfile
});