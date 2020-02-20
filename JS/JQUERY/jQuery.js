$(document).ready(function(){
    $("h1").text("Hello jQuery World!");
});
$(document).ready(function(){
    $("button").click(function(){
        var newHeading = "<h1>Hungry?</h1>";
        var newParagraph = document.createElement("p");
		newParagraph.innerHTML = "<em>Bon appétit</em>";
        var newImage = $('<img src="../../IMAGES/shrimp.png" alt="Symbol">');
        $("#jQueryImageDisplay").append(newHeading, newParagraph, newImage);
    });
});
$(document).ready(function(){
	$('.showbtn').click(function(){
   		$('.myimgdivshowhide').show();
	});
  	$('.hidebtn').click(function(){
   		$('.myimgdivshowhide').hide();
	});
});