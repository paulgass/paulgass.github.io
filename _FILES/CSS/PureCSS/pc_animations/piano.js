/*
JS used only for camera rotation, key click event's and for appearance animation rerun
*/
$(document).ready(function() {
  
    var winW = $(window).width();
    var winH = $(window).height();
    var $demo = $(".demo");
    var $rerun = $(".rerun");
    var rotation = {
      x: 75,
      z: -50
    };
    var prevValues = {
      x: 0,
      y: 0
    };
    var rotationActive = false;
    var startAnimTime = 5400;
    var timeout = setTimeout(function() {
      $demo.addClass("ready");
    }, 4400);
    
    $(document).on("mousedown", function(e) {
      var startX = e.pageX;
      var startY = e.pageY;
      
      $(document).on("mousemove", function(e) {
        var deltaX;
        var deltaY;
        if (!rotationActive) {
          deltaX = startX - e.pageX;
          deltaY = startY - e.pageY;
          rotationActive = true;
        } else {
          deltaX = prevValues.x - e.pageX;
          deltaY = prevValues.y - e.pageY;
        }
        prevValues.x = e.pageX;
        prevValues.y = e.pageY;
        
        var degX = deltaX * 100 / 360;
        var degY = deltaY * 100 / 360;
        
        rotation.x += degY;
        rotation.z += degX;
        
        $demo.css("transform", "rotateX("+rotation.x+"deg) rotateZ("+rotation.z+"deg)");
      });
      
      $(document).on("mouseup", function(e) {
        $(document).off("mousemove");
        $(document).off("mouseup");
        rotationActive = false;
        prevValues.x = 0;
        prevValues.y = 0;
      });
    });
    
    $(document).on("click", ".demo__panelKeys-key", function() {
      $(this).removeClass("pressed");
      $(this).css("top");
      $(this).addClass("pressed");
    });
    
    $(document).on("click", ".rerun", function() {
      window.clearTimeout(timeout);
      $(".demo__panelKeys-key").removeClass("pressed");
      $demo.hide().removeClass("ready");
      $demo.css("top");
      $demo.show();
      
      timeout = setTimeout(function() {
        $demo.addClass("ready");
      }, 4400);
    });
    
    $(window).on("resize", function() {
      winW = $(window).width();
      winH = $(window).height();
    });
    
  });