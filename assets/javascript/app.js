//create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var topics = ["Spirited Away", "Hunter x Hunter", "Puella Magi Madoka Magica", "Full Metal Alchemist", "Cowboy Bebop", "Samurai Champloo", "Food Wars", "Guren Lagaan"];


// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
for (var i = 0; i < topics.length; i++) {
    var button = $('<button>' + topics[i] + '</button>');

    $("#button-box").append(button);

    // check to see if buttons are actually being clicked
    $('button').on('click', function () {
        console.log('button clicked!');
    })




}

// checking out my api key
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=nEJ4U2h4TUNGRM7XscV2yEFq62tOorZ4&limit=5");
xhr.done(function (data) { console.log("success got data", data); });

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).


// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// Rejoice! You just made something really cool.
