var p1Score, p2Score;

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

    // // Add ID's for the cards
    // $('.thumbnail').each((e) => {
    //     console.log('thumbnail:' + $('.thumbnail').index(e));
    // });

    $('.thumbnail').bind('click', (e) =>  {
      e.preventDefault();
      console.log(e.id);
      $(e).attr('id');
    });
};

$(document).ready(() => {
    startGame();
});
