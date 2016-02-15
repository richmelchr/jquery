/*
jQuery notes created by Richard Melcher
//13 February 2016
//notes: Lynda.com jQuery Essential Training
*/
function createContent() {
    var newP = $("<p>");

    newP.append("<em>append new text</em>");
    $("#empty").html(newP); //replace all contents

    $("#empty2").html("<em>This is new content</em>"); //also replace

    $("#abc").prepend("<li>prepend item</li>"); //add content before

    $("#first" + " h2").text("this is new");
}
//--Events---------------------------------------------------------
function eventDemo() {
    var empty = $("#empty");
    empty.on("mousemove", onMouseOver);
    empty.on("click", onMouseClick);
    empty.on("mouseleave", onMouseLeave);

    function onMouseOver(evt) {
        empty.text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
    }
    function onMouseClick(evt) {
        empty.text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
        empty.off("mousemove", onMouseOver); //disables mousemove tracking event
    }
    function onMouseLeave(evt) {
        empty.text("mouseleave");
        empty.on("mousemove", onMouseOver); //re-enables mousemove tracking event
    }
}

function animateDemo() {
    $("#empty").click(function() {
       $("#empty").animate({width:400}, 300)    //over 300ms
           .animate({height: 300}, 400)         //over 400ms
           .animate({left: 200}, 500)           //over 500ms
           .animate({top: "+=100", borderWidth: 10}, "slow"); //value of 'slow' = 600ms
    });
}
//--AJAX Demo-------------------------------------------------------------
function ajaxDemo() {
    //create two buttons inside #buttonWrap
    //note: CSS all ready created and waiting
    var buttonWrap = $("#buttonWrap");
    buttonWrap.append('<button id="getContent">get text</button>');
    buttonWrap.append('<button id="loadHTML">load html</button>');

    $("#getContent").click(getContent); //set event listeners onto newly created buttons
    $("#loadHTML").click(loadHTML);     //for the click event.

    function getContent() {
        //grab .txt file from server and run setContent() if successful
        $.ajax("sampletextcontent.txt",
            {success: setContent, type: "GET", dataType: "text"});
    }
    function setContent(data, status, jqxhr) {
        $("#empty").text(data);
    }
    function loadHTML() {
        //shorthand for getContent() function. same result
        $("#empty").load("samplehtml.html");
    }
}

function commonSelect() {
    //basic selectors
    $("p").css("border", "1px solid red"); //note: no angle brackets, just tag name
    $(".a").css("border", "1px solid red");
    $("#example").css("border", "1px solid red");
    $("p.b").css("border", "1px solid red"); //p tags with class b

    //basic filters
    $("#example" + "p:first").css("border", "1px solid red");
    $("#example" + "p:last").css("border", "1px solid red");
    $("#example" + "p:even").css("border", "1px solid red");
    $("#example" + "p:odd").css("border", "1px solid red");

    $("#example.a:first").css("border", "1px solid red"); //id example, with class a
    $("#example.b:even").css("border", "1px solid red");//id example, with class b

    $("#example" + "p:gt(1)").css("border", "1px solid red");//items greater than 1
    $("#example" + "p:lt(3)").css("border", "1px solid red");//items less than 3
    $("#example" + "p:eq(2)").css("border", "1px solid red");//items equal to 2

    $("#example" + "p:not(p:eq(2))").css("border", "1px solid red");//items not equal to expression

    $("#example:animated").css("border", "1px solid red"); //items in process of being animated
    $("#example:focus").css("border", "1px solid red");//element that currently has focus

    //advanced selectors
    $("div > p").css("border", "1px solid red"); //parent > child (note: immediate children only)
    $("div p.a").css("border", "1px solid red"); //parent > descendant (all p.a inside div)
    $("ul + div").css("border", "1px solid red");//get div that comes directly after a <ul>
    $("#para1" + "~ p").css("border", "1px solid red");//p siblings after #para1
}

//--------------------------
$("document").ready(function () {
    ajaxDemo();
});
//--Lynda Files-------------------------------------------------
/*

    Advanced filters
    Attribute filters
    Traversing documents with jQuery
    jQuery statement changing
    Challenge - Annotate page content
    Solution - Annotate page content
03 Manipulating Page Content
    Creating content
    Inserting page content
    Altering page content
    Manipulating attributes
    Working with CSS
    Positioning with CSS
    Embedding custom data
    Challenge - Generate a table of contents
    Solution - Generate a table of contents
04 jQuery Events
    jQuery event-handling features
    Binding and unbinding events
    Event-helper features
    Using the jQuery event object
    Challenge - Create a hover effect
    Solution - Create a hover effect
05 jQuery Animations and Effects
    Introduction to jQuery animations
    Hiding and showing elements
    Fading elements
    Sliding elements
    Custom animations
    Challenge - Build an image rotator
    Solution - Build an image rotator
06 jQuery and AJAX
    jQuery and AJAX
    Helper functions
    Working with different data types
    Using global AJAX handlers
    Challenge - Create a dynamic news service
    Solution - Create a dynamic news service
07 Conclusion
    Goodbye
 */