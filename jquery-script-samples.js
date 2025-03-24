$(document).ready(function(){
    console.log("JQuery is ready!");

    let $changeTextColor = $("#changeTextColor");

    $changeTextColor.click(function(event) {
        console.log(event);
        $(this).addClass("btn-secondary")
        $(this).removeClass("btn-primary")
        changeTextColor("blue");
       //alert("Button was clicked!");
    });

    $changeTextColor.on("mouseenter", function(event) {
        //console.log("hovering");
        $("#hint").show();
        changeTextColor("red");
        //$("#hint").html("Text Changed")
    });

    $changeTextColor.on("mouseleave", function(event) {
        //console.log("hovering");
        $("#hint").hide();
        changeTextColor("black");
        //$("#hint").html("Text Changed Again")
    });

    function changeTextColor(color) {
        $("div").css("color", color);
    }

    console.log("Empty element should be zero: " + $("#doesNotExist").length)
    console.log("First Name element");
    console.log($("input[name='firstName']"));
    console.log("Input elements");
    console.log($("input"));
    console.log("First Name value is " + $("input[name='firstName']").val())

    $("#animals").find("li").eq(2).text("Lion");
    $("#animals").find("li").eq(1).html("<a href='#'>Cat</a>");

    //Change John to Tom
    $("input[name='firstName']").val("Tom");

    $("#animals").find("li:first").append($("#animals ul li:last"));
    $("#animals").find("li:first").append($("#animals ul li:last")).clone();

    $("#animals").find("li").eq(1).remove();

});