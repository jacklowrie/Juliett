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