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

//--------------------------
$("document").ready(function () {
   animateDemo();
});
//--Lynda Files-------------------------------------------------
/*

    AJAX made simple
02 Extracting Page Content
    Overview of selectors and filters
    Basic selectors
    Basic filters
    Advanced selectors
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