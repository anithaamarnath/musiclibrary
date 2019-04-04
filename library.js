var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:

// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for(var track in library.playlists){
    let id = library.playlists[track]["id"];
    let name = library.playlists[track]["name"];
    let tracks =  library.playlists[track]["tracks"];
//console.log(library.playlists[track]);
console.log(id + ":" + name + " - " + tracks.length+ "tracks");

  }


}
printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var trac in library.tracks){
    let id = library.tracks[trac]["id"];
    let name = library.tracks[trac]["name"];
    let artist = library.tracks[trac]["artist"];
    let album = library.tracks[trac]["album"];
    console.log(id + ' : ' + name +  ' by ' + artist + ' (' + album + ') ');
  }


}
printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
 let id = library.playlists[playlistId]['id'];
 let name = library.playlists[playlistId]['name'];
 let tracks = library.playlists[playlistId]['tracks'];
 console.log(id + ': ' + name + '- ' + tracks.length + 'tracks');
 for (let t of tracks) {
   let id = library.tracks[t]['id'];
   let name = library.tracks[t]['name'];
   let artist = library.tracks[t]['artist'];
   let album = library.tracks[t]['album'];
   console.log(id +  ':' + name + ' by '   + artist + ' (' + album + ') ' );
 }
}
printPlaylist('p01','t02');




// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlist =  library.playlists[playlistId];
  var track = library.tracks[trackId];


  var trackArr = library.playlists[playlistId].tracks;
  trackArr.push(trackId);
  console.log(trackArr);
}
addTrackToPlaylist('t03', 'p01')





// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

// tracks: { t01: { id: "t01",
//                    name: "Code Monkey",
//                    artist: "Jonathan Coulton",
//                    album: "Thing a Week Three" },

var addTrack = function (name, artist, album) {
  var id = uid();
  var newTrack = {
    id: id,
    name: name,
    artist: artist,
    album: album

  };
  //add it to the existing data
  library.tracks[id] = newTrack;
  console.log(library);

}
addTrack('testName', 'testArtist','testAlbum');

// adds a playlist to the library
// p01: { id: "p01",
//                       name: "Coding Music",
//                       tracks: ["t01", "t02"]
//                     },

var addPlaylist = function (name) {
  var id =uid();
  var newPlay = {
    id: id,
    name: name
  };
  library.playlists[id] = newPlay;
  console.log(newPlay);

}
addPlaylist('testname')



// var printSearchResults = function(query) {

// }