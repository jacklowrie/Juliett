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

function student(name, residence, starttime, endtime) {
	this.name = name;
	this.residence = residence;
	this.starttime = starttime;
	this.endtime = endtime;
}

$("#userinfo").submit(function(){
	var user = new student();
});