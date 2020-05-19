getScores = function() {
  $.ajax({
    type: "GET",
    url: "http://espn.go.com/sports/scores/feed?sportId=0&eventId=0&rand=" + new Date().getTime() + "&xhr=1",
    dataType: "json",
    success: function (data) {
      console.log(JSON.stringify(data, null, 2));
    }
  });
}
getScores();