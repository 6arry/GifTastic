// BUTTONS THAT PRE-LOAD ON PAGE RENDER
// ==================================================================

$(function(){
    buttonMaker(searchArray, "searchButton btn btn-outline-info", "#search-buttons");
    // console.log("Page Loaded");
})

var searchArray = ["Goku", "Vegeta", "Gohan"];

// BUTTON MAKER FUNCTION
// ==================================================================

function buttonMaker(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for (var i=0; i<searchArray.length;i++){
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

// GiPHY APi KEY = UNUrXOwdD5LUj9OXrpezgJTnU1ytlcTJ

// GiPHY EXAMPLE: http://api.giphy.com/v1/gifs/search?api_key=UNUrXOwdD5LUj9OXrpezgJTnU1ytlcTJ&limit=10

// Parameters for the API
// Search: "q=goku"
// Amount of search results =  "&limit=5"

// THIS IS ALL ABOUT ON-CLICK, AJAX CALL, AND WHERE EVERYTHING GOES AFTER YOU CLICK A BUTTON
// =========================================================================================

$(document).on("click", ".searchButton", function(){
    var type = $(this).data("type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=UNUrXOwdD5LUj9OXrpezgJTnU1ytlcTJ&limit=5&q=" + type;
    $.ajax({url: queryURL, method: "GET"}).done(function(response){
        for (var i=0; i<response.data.length;i++){
            var searchDiv = $("<div class='search-item'>");
            var rating = response.data[i].rating;
            var p = $('<p>').text("Rating: " + rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $("<img>");
            image.attr("src", still);
            image.attr("data-still", still);
            image.attr("data-animated", animated);
            image.attr("data-state", "still");
            image.addClass("searchImage");
            searchDiv.append(p);
            searchDiv.append(image);
            $("#searches").prepend(searchDiv);
        }
    })
    // console.log(type);
})

// THIS MAKES THE GIF START AND STOP MOVING
// ==========================================================

$(document).on("click", ".searchImage", function(){
    var state = $(this).attr("data-state");
    if (state == "still"){
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
})

// THIS ADDS MORE BUTTONS
// ==========================================================

$("#add-search").on("click", function(){
    var newSearch = $("input").eq(0).val();
    searchArray.push(newSearch);
    buttonMaker(searchArray, "searchButton btn btn-outline-info", "#search-buttons");
    return false;
})