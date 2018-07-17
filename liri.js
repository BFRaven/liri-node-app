require("dotenv").config();
// Global Variables
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var movie = "";

args = process.argv.slice(3).join("+");
input = process.argv[2];
switch(input) {
    case "spotify-this-song": 
    if(!input) {
        input = "song";
    };
    if(!args) {
        args = "The+Sign";
    };
    var songSearch = spotify(args);
    songSearch.findSong(args);
    break;
    case "my-tweets":
        var tweetSearch = client(args);
        tweetSearch.findMyTweets(args);
    break;
    case "movie-this":
    if(!input) {
        input = "movie";
    };
    if(!args) {
        args = "Mr.+Nobody";
    };
    var movieSearch = movie(args);
    movieSearch.findMovies(args);
};


// my-tweets




// spotify-this-song

// function Spotify(artist, song, preview, album) {
//     this.artist = artist;
//     this.song = song;
//     this.preview = preview;
//     this.album = album;
// }





// movie-this

var request = require("request"), fs = require("fs");
var TV = function() {
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var mov = JSON.parse(body);
        let logs = "Name: " + mov.name + "\nGenre(s): " + mov.genres + "\nRating: " + mov.rating.average + "\nNetwork: " + mov.network.name + "\nSummary: " + mov.summary + "\n\n"
        fs.appendFile("log.txt", logs, function(err) {
          if (err) throw err;
        });
        console.log(logs)
      };
    });
  };



}// do-what-it-says