$(".calculate").click(function(){
var name=$(".sport").val();
var number=parseInt($(".day").val());
var year=parseInt($(".age").val());
console.log(number);
console.log(year);

var hoursper=365*31*number;
var finalAge=31+year;

//var userInput=$("input").val();
//var userInput=parseInt($("input").val());

$(".results").text("By the year 2050 you would have played "+name+" for "+hoursper+" hours and will be "+finalAge+" years "+" old ");













});
