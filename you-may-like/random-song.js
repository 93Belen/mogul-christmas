// Open any random song url in the You May Like directory.

const randomSongBtn = document.getElementById("random-button");

const links = [
  // Bryan Adams - Must Be Santa
  "https://www.youtube.com/watch?v=aAuKuyAZ7YM",
  // Bobby Helms - Jingle Bell Rock
  "https://www.youtube.com/watch?v=R_vmuL0gjU0",
  // Pentatonix - Joy to the World
  "https://www.youtube.com/watch?v=-Xo64Q2ucQ8",
  // Joy To The World | Original
  "https://www.youtube.com/watch?v=30OaM6b48k8",
  // We Wish You A Merry Christmas | Original
  "https://www.youtube.com/watch?v=g-OF7KGyDis",
  // Sam Smith - Have Yourself A Merry Little Christmas
  "https://www.youtube.com/watch?v=rnEqv8WcVq8",
  // The Ronettes - Sleigh Ride
  "https://www.youtube.com/watch?v=JVer2lCjARU",
  // The Ronettes - Frosty The Snowman
  "https://www.youtube.com/watch?v=PQ-ULzAAb20",
  // Pentatonix - Frosty The Snowman ft: Alessia Cara
  "https://www.youtube.com/watch?v=18qE6_-2dQs",
  // Michael Bublé - Frosty The Snowman (ft. The Puppini Sisters)
  "https://www.youtube.com/watch?v=jIyVB1b2aBs",
  // Pentatonix - Mary, Did You Know?
  "https://www.youtube.com/watch?v=ifCWN5pJGIE",
];
let openStuff = function () {
  // get a random number between 0 and the number of links
  var randIdx = Math.random() * links.length;
  // round it, so it can be used as array index
  randIdx = parseInt(randIdx, 10);
  // construct the link to be opened
  var link = links[randIdx];
  // open it in a new window / tab (depends on browser setting)
  window.open(link);
};

randomSongBtn.onClick = openStuff;
