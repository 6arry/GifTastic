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
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=UNUrXOwdD5LUj9OXrpezgJTnU1ytlcTJ&limit=10&q=" + type;
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
            $("#searchs").append(searchDiv);
        }
    })
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