var x = function(idStr) {
    return document.getElementById(idStr);
};

var main = function() {
    var num1 = x("inBox1").value;
    var num2 = x("inBox2").value;
    var answer = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));

    if (this.id == "btn1") {
        x("outDiv").innerHTML = answer;
    };
};

window.onload = function() {
    x("btn1").addEventListener("click", main);
};