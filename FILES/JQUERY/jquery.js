$(document).ready(function(){
    $("h1").text("Hello jQuery World!");
});
$(document).ready(function(){
    $(".jQueryButtonImageDisplay").click(function(){
        var newHeading = "<h1>Hungry?</h1>";
        var newParagraph = document.createElement("p");
		newParagraph.innerHTML = "<em>Bon appétit</em>";
        var newImage = $('<img src="FILES/IMAGES/shrimp.png" alt="Symbol">');
        $("#jQueryDivImageDisplay").append(newHeading, newParagraph, newImage);
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
