//create an array of strings, each one related to a topic that interests you. Save it to a variable called topics. testing
var topics = ["Spirited Away", "Hunter x Hunter", "Puella Magi Madoka Magica", "Full Metal Alchemist", "Cowboy Bebop", "Samurai Champloo", "Naruto", "Gurren Lagaan"];


// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.

for (var i = 0; i < topics.length; i++) {
    var button = $('<button>' + topics[i] + '</button>');
    // button.addClass("anime-title");
    button.attr("data-anime", topics[i]);
    //append buttons to html div
    $("#button-box").append(button);
    // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    $('button').on('click', function () {
        // check to see if buttons are actually being clicked
        //console.log("clicked");

        //event.preventDefault();
        var anime = $(this).attr("data-anime");
        //check if data attr was passed
        //console.log(anime);
        //add query url and check if linked to "anime"
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            anime + "&api_key=nEJ4U2h4TUNGRM7XscV2yEFq62tOorZ4&limit=10";
        //console.log(queryURL);

        // ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            //function for what to do with response (data array of 10 gifs) from ajax call
            .then(function (response) {
                //check for retrieved data 
                //console.log(response);
                //store data in results variable
                var results = response.data;
                console.log(results);

                //loop though each result item
                for (var i = 0; i < results.length; i++) {

                    //create and store div tag
                    var animeDiv = $("<div>");

                    //creating p tag for result item's rating
                    var p = $("<p>").text("rating:" + results[i].rating);

                    //creating and storing img tag
                    var animeGIF = $("<img>");

                    //setting the src attr of the img to the still img property to get back the still images
                    animeGIF.attr("src", results[i].images.fixed_height_still.url);

                    // Under every gif, display its rating (PG, G, so on).

                    //appending paragraph and image tag to the animeDiv
                    animeDiv.append(animeGIF);
                    animeDiv.append(p);

                    //prepending the animeDiv to the HTML page in the appropriate div
                    $("#gif-rating-box").prepend(animeDiv);



                }
            });

    });
}


// checking out my api key
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=nEJ4U2h4TUNGRM7XscV2yEFq62tOorZ4&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
 // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
 // If the clicked image's state is still, update its src attribute to what its data-animate value is.
 // Then, set the image's data-state to animate
 // Else set src to the data-still value
    //$(document).on("click", $(animalImage), function() {
    //  The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //add attributes like we added the src of the retrieved gifs to still
    //   var state = $(animeGIF).attr("data-state");
    //   console.log();
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   } else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //   }
    // });
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
//in order to get info from the #user-fav-title, we must create a new on click function for the submit button to grab the 
//value of the text input and make a button with it, adding it to the array. remember to clear the buttons before so we dont double print them.
//newly created button should function the same as the rest in the array



