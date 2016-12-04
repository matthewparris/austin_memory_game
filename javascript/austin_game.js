var p1Score, p2Score, images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];

function updateScore() {
  // Update score on screen
    $('#p1_score').text(p1Score);
    $('#p2_score').text(p2Score);
}

function p1Scores() {
  // Update P1 score and refresh score on screen
  p1Score += 1;
  updateScore();
}

function p2Scores() {
  // Update P2 score and refresh score on screen
  p2Score += 1;
  updateScore();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function addTile(name, image) {
//   return () => {
//     "<div class='col-sm-6 col-md-3'><div class='thumbnail' id='" + name + "'><div class='caption'>Austin's Memory Game</div></div></div>"
//   }
// }

function startGame() {

    // Initialze score
    p1Score = 0;
    p2Score = 0;


    //  Place scores on screen
    updateScore();

    // Card Position reset
    shuffle(images);

    // // Add ID's for the cards
    // $('.thumbnail').each((e) => {
    //     console.log('thumbnail:' + $('.thumbnail').index(e));
    // });

    $('.thumbnail').bind('click', (e) =>  {
      e.preventDefault();
      console.log(e.currentTarget.id);
    });
};

$(document).ready(() => {
    startGame();
});
