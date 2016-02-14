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
//----------------------------------------------------------------

//--------------------------
$("document").ready(function () {
   createContent();
});
//--Lynda Files-------------------------------------------------
/*
01 A quick Introduction to jQuery
    -Your first jQuery enabled page
    -Introduction to selectors and filters
    *Creating and changing page content
    Handling events
    Using jQuery animations
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