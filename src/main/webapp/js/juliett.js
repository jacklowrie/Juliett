$(document).ready( function(){
	
	
	/* Schedules.html (calendar functions) */
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

	var starttimes = [
	["08:00:00",  0x0001],
	["08:30:00",  0x0002],
	["09:00:00",  0x0004],
	["09:30:00",  0x0008],
	["10:00:00",  0x0010],
	["10:30:00",  0x0020],
	["11:00:00",  0x0040],
	["11:30:00",  0x0080],
	["12:00:00",  0x0100],
	["12:30:00",  0x0200],
	["13:00:00",  0x0400],
	["13:30:00",  0x0800],
	["14:00:00",  0x1000],
	["14:30:00",  0x2000],
	["15:00:00",  0x4000],
	["15:30:00",  0x8000],
	["16:00:00",  0x10000],
	["16:30:00",  0x20000],
	["17:00:00",  0x40000],
	["17:30:00",  0x80000],
	["18:00:00",  0x100000],
	["18:30:00",  0x200000],
	["19:00:00",  0x400000],
	["19:30:00",  0x800000],
	["20:00:00",  0x1000000],
	["20:30:00",  0x2000000],
	["21:00:00",  0x4000000],
	["21:30:00",  0x8000000]];

	

	var course = []

	var Caesar;
    Caesar = (function() {
        var base = 'http://vazzak2.ci.northwestern.edu/';

        var loadedTerms = {};

        Caesar.getCourses = function(tmpid) {

        	var id = []
        	
        	if (tmpid.indexOf(",") == -1) {
        		id.push(tmpid);
        	}
        	else 
        		id = tmpid.split(",");
        	
        	
        	for (var i = 0; i < id.length; i++) {
        		$.ajax({
        			url: base + 'courses/?id=' + id[i],
	                async: false
	            }).done(function( data ) {
	            	course.push(data[0])
	            })
	        }    
        };
        function Caesar() {}
        return Caesar;
    }());


    var courseIDs = []
    var courseIDs = getUrlVars()["message"]
    Caesar.getCourses(courseIDs)

    //Caesar.getCourses([58464,58459])
	/*
		courseIDs is defined in the jsp file which is got from server.
	*/


    console.log(course[0].title)


	function getUrlVars() {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
	}


	getcourseinfo();
	$('.poppop').popover({html : true});


	function getcourseinfo(){ 
	//parses json object, interprets it and updates the timetable
	

	// var message = '[{"id": 59271, "title": "Freshman Seminar", "term": "2013 Fall", "school": "WCAS", "instructor": {"name": "Harris Matthew Feinsod", "bio": null, "address": null, "phone": null, "office_hours": null}, "subject": "ENGLISH", "catalog_num": "101-6", "section": "24", "room": "University Hall 018", "meeting_days": "TuTh", "start_time": "09:30:00", "end_time": "10:50:00", "start_date": "2013-09-24", "end_date": "2013-12-07", "seats": 15, "overview": null, "topic": "Sea Changes: Literature of the Modern Oceans", "attributes": null, "requirements": "Enrollment Requirements: Reserved for Freshmen and Sophomores", "component": "LEC", "class_num": 13318, "course_id": 1763, "coursedesc_set": [], "coursecomponent_set": []}, {"id": 3269, "title": "Freshman Seminar", "term": "2013 Fall", "school": "WCAS", "instructor": {"name": "Mary E Finn", "bio": null, "address": null, "phone": null, "office_hours": null}, "subject": "ENGLISH", "catalog_num": "101-6", "section": "25", "room": "Fisk Hall 114", "meeting_days": "TuTh", "start_time": "11:30:00", "end_time": "12:50:00", "start_date": "2013-09-24", "end_date": "2013-12-07", "seats": 15, "overview": null, "topic": "Not Your Mother\'s Jane Austen", "attributes": null, "requirements": "Enrollment Requirements: Reserved for Freshmen and Sophomores", "component": "LEC", "class_num": 17480, "course_id": 1763, "coursedesc_set": [{"name": "Class Materials (Required)", "desc": "Jane Austen, Sense and Sensibility (1811); Mary Elizabeth Braddon, Lady Audley\'s Secret (1862); Henry James, The Portrait of a Lady (1881)"}, {"name": "Note", "desc": "Janine Tobeck got her Ph. D. from the University of Wisconsin-Madison. Her dissertation, \\"Altered States: Authors, Subjects and Sovereignty in Postwar American Fiction\\" focused on a group of marginally canonical writers who worked to throw out the bath-water of conventional realism without the baby of social commitment after World War II. It unites these writers into a cohesive alternative tradition by relating their literary strategies to the theory of a \\"literature of power\\" and the strange autobiographical subject of Thomas De Quincey, the (similarly unconventional) romanticist best known as the English Opium-Eater."}, {"name": "Reading", "desc": "Hannah Arendt, <i>Eichmann in Jerusalem</i>\\nKurt Vonnegut, <i>Mother Night</i>Kazuo Ishiguro, <i>Remains of the Day</i>\\n    Laura Blumenfeld, <i>Revenge, A Story of Hope</i>, additional readings available online"}, {"name": "Teaching Method", "desc": "Discussion"}, {"name": "Projects", "desc": "You will be asked to take formal minutes for one class session (~750 words), write three short papers (~750 words each), and a final paper of ~2,000 words"}, {"name": "Evaluation Method", "desc": "Three short papers will form the basis of evaluation. Class participation will also be factored into grades."}, {"name": "Class Notes", "desc": "I\'m a long-time member of the Northwestern faculty whose research has centered on Victorian novels and cultural history. My taste for hardboiled crime fiction will be temporarily held in check for the purposes of this course."}], "coursecomponent_set": []}, {"id": 59267, "title": "Freshman Seminar", "term": "2013 Fall", "school": "WCAS", "instructor": {"name": "Shauna Seliy", "bio": null, "address": null, "phone": null, "office_hours": null}, "subject": "ENGLISH", "catalog_num": "101-6", "section": "20", "room": "Parkes Hall 224", "meeting_days": "MoWe", "start_time": "09:30:00", "end_time": "10:50:00", "start_date": "2013-09-24", "end_date": "2013-12-07", "seats": 15, "overview": "We will read three classic nineteenth-century novels that seem to tell one story (the story of a young woman\'s quest for independence and personal fulfillment) in a series of different versions. The course is designed as an introduction to the critical reading of fiction and to the effective use of such concepts as theme, metaphor, tone, point of view, authorial \\"distance.\\"", "topic": "Growing up Gay", "attributes": "No P/N option for this section\\n\\n", "requirements": "Enrollment Requirements: Reserved for Freshmen and Sophomores", "component": "LEC", "class_num": 11506, "course_id": 1763, "coursedesc_set": [{"name": "Class Notes", "desc": "I\'m a long-time member of the Northwestern faculty whose research has centered on Victorian novels and cultural history. My taste for hardboiled crime fiction will be temporarily held in check for the purposes of this course."}, {"name": "Class Materials (Required)", "desc": "Jane Austen, Sense and Sensibility (1811); Mary Elizabeth Braddon, Lady Audley\'s Secret (1862); Henry James, The Portrait of a Lady (1881)"}, {"name": "Evaluation Method", "desc": "Three short papers will form the basis of evaluation. Class participation will also be factored into grades."}], "coursecomponent_set": []}, {"id": 59268, "title": "Freshman Seminar", "term": "2013 Fall", "school": "WCAS", "instructor": {"name": "Glenn F Sucich", "bio": null, "address": null, "phone": null, "office_hours": null}, "subject": "ENGLISH", "catalog_num": "101-6", "section": "21", "room": "Annenberg Hall G28", "meeting_days": "MoWe", "start_time": "14:00:00", "end_time": "15:20:00", "start_date": "2013-09-24", "end_date": "2013-12-07", "seats": 15, "overview": null, "topic": "History of Hell", "attributes": null, "requirements": "Enrollment Requirements: Reserved for Freshmen and Sophomores", "component": "LEC", "class_num": 11953, "course_id": 1763, "coursedesc_set": [], "coursecomponent_set": []}, {"id": 59269, "title": "Freshman Seminar", "term": "2013 Fall", "school": "WCAS", "instructor": {"name": "Evan M Mwangi", "bio": null, "address": null, "phone": null, "office_hours": null}, "subject": "ENGLISH", "catalog_num": "101-6", "section": "22", "room": "Parkes Hall 213", "meeting_days": "MoWe", "start_time": "15:30:00", "end_time": "16:50:00", "start_date": "2013-09-24", "end_date": "2013-12-07", "seats": 15, "overview": null, "topic": "Representations of Violence", "attributes": null, "requirements": "Enrollment Requirements: Reserved for Freshmen and Sophomores", "component": "LEC", "class_num": 12085, "course_id": 1763, "coursedesc_set": [], "coursecomponent_set": []}]'

	// var course = JSON.parse(message);
	var title = course[0].title;
		//alert("the title is " + title);
		

		for (var i=0; i < course.length; i++){
			mycoursedays = getencodeddays(course[i]);
			mycoursetimes = getencodedtimes(course[i]);
			courseinfo = makecoursepop(course[i]);
			
			updateTimeTable(mycoursetimes, mycoursedays, courseinfo);

		}
		
	}
	
	/* helper functions for getcourseinfo() */
	function updateTimeTable(times, days, message){ 
		//calls updateSchedule on every cell in mystruct
		for(var i=0; i < mystruct.length; i++)
			updateSchedule(mystruct[i][0], mystruct[i][1], mystruct[i][2], days, times, message);
	}

	function updateSchedule(loc, currentday, currenttime, days, times, message){ 
		//if this cell's day is listed in days, and this cell's 1/2 hour isin times, change the content of the td to message
		if ( ((currentday & days) == currentday) && 							 
			((currenttime & times) == currenttime) ) {
			$(loc).html(message);
		$(loc).css("background-color","#df691a")
	}
}

function makecoursepop(thiscourse){
	coursedisplay = getcoursedisplay(thiscourse);
	popinfo = getpopinfo(thiscourse);
	return "<div type='button' class='btn poppop' data-container='body' data-toggle='popover' data-placement='bottom' data-trigger='hover' data-content='" + popinfo + "'>" + coursedisplay + "</div>";
}		

function getcoursedisplay(thiscourse){
	return thiscourse.subject + " " + thiscourse.catalog_num + "<br>" + thiscourse.title;
}

function getpopinfo(thiscourse){
	var coursetopic = thiscourse.topic
	if (coursetopic != null)
		coursetopic = coursetopic.replace("\'", "")
	return "Course ID: " + thiscourse.id + "<br>Topic: " + coursetopic + "<br>Instructor: " + thiscourse.instructor.name +"<br>Section: " + thiscourse.section + "<br>Room: " + thiscourse.room + "<br>starts: " + thiscourse.start_time +"<br>ends: " + thiscourse.end_time;
}

		function getencodeddays(thiscourse){ //transforms input string into hex vals
			var encodeddays = 0x0;
			var daystring = thiscourse.meeting_days;
			var days = [["Mo",0x1], ["Tu",0x2], ["We",0x4], ["Th",0x8], ["Fr",0x10]];


			for (var i=0; i<days.length;i++){
				// var loc = daystring.indexOf(days[i][0]);
	// 					if (loc != -1)
	// 						encodeddays |= days[i][1];
	encodeddays |= daystring.indexOf(days[i][0]) == -1 ? 0x0 : days[i][1];
}
return encodeddays;
}

		function getencodedtimes(thiscourse){ //transforms input into time duration
			var encodedtimes = 0x0;
			var timestart = new Date("Wed Jan 26 2011 " + thiscourse.start_time);
			var timeend = new Date("Wed Jan 26 2011 " + thiscourse.end_time);
			
			var encodedtimestart = lookupstarttime(thiscourse.start_time);
			var halfhours = classDurationHalfHours(thiscourse);

			encodedtimes = encodedtimestart;
			for(var i=0; i<halfhours; i++){
				encodedtimes = (encodedtimes << 1) | encodedtimestart;
			}

			return encodedtimes;
		}

		/* helper functions for getencodedtimes() */		
			function lookupstarttime(st){ //returns start time of class
				for (var i=0; i<starttimes.length; i++)
					if (starttimes[i][0] == st)
						return starttimes[i][1];
					return 0;
				}

			function classDurationHalfHours(thiscourse){ //returns duration of course
				var timestart = new Date("Wed Jan 26 2011 " + thiscourse.start_time);
				var timeend = new Date("Wed Jan 26 2011 " + thiscourse.end_time);
				if (timestart>timeend){
					alert("error times wrong");
					return 0;
				} 
				else {
					var class_seconds = ( timeend.getTime() - timestart.getTime()) / 1000;
					var class_minutes = class_seconds/60;
					var class_halfhours = class_minutes/30;
					return Math.floor(class_halfhours);
				}
			}




//endfile
});