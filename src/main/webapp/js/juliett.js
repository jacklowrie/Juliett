$(function() {
  $("#nametest").click(function() {
    var testdata = {
        username: $('#username').val(),
    };
    $.post(URL, testdata, function(data) {
       console.log(data);
    });
  });
});

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
	user.
});