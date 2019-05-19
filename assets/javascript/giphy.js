$(function(){
    populateButtons(searchArray, "searchButton", "#buttonsArea");
    // console.log("Page Loaded");
})

var searchArray = ["Dog", "Cat", "Bird"];

function populateButtons(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for (var i=0; i<searchArray.length;i++){
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on("click", ".searchButton", function(){
    var type = $(this).data("type");
    
    // console.log(type);
})



// GiPHY APi KEY = UNUrXOwdD5LUj9OXrpezgJTnU1ytlcTJ

// GiPHY EXAMPLE: http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=UNUrXOwdD5LUj9OXrpezgJTnU1ytlcTJ&limit=10

// ON CLICK FUNCTIONS ============================================ //
// $('button').on('click', function(){
//     var x = $(this).data('search');
//     console.log(x)

//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=goku&api_key=UNUrXOwdD5LUj9OXrpezgJTnU1ytlcTJ&limit=10"
// })

// ON CLICK FUNCTIONS ============================================ //
// ON CLICK FUNCTIONS ============================================ //
// ON CLICK FUNCTIONS ============================================ //
// ON CLICK FUNCTIONS ============================================ //
// ON CLICK FUNCTIONS ============================================ //
// ON CLICK FUNCTIONS ============================================ //