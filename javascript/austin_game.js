// Variables for score, turn counter, how many cards flipped, which player turn it is and the images array
var p1Score, p2Score, turnCount, cardFlipCount, isPlayerOne, images = [];

// Add my images
function setImages() {
  images[images.length] = [1, 'images/image1.jpg'];
  images[images.length] = [1, 'images/image1.jpg'];
  images[images.length] = [2, 'images/image2.jpg'];
  images[images.length] = [2, 'images/image2.jpg'];
  images[images.length] = [3, 'images/image3.jpg'];
  images[images.length] = [3, 'images/image3.jpg'];
  images[images.length] = [4, 'images/image4.jpg'];
  images[images.length] = [4, 'images/image4.jpg'];
  images[images.length] = [5, 'images/image5.jpg'];
  images[images.length] = [5, 'images/image5.jpg'];
  images[images.length] = [6, 'images/image6.jpg'];
  images[images.length] = [6, 'images/image6.jpg'];
  images[images.length] = [7, 'images/image7.jpg'];
  images[images.length] = [7, 'images/image7.jpg'];
  images[images.length] = [8, 'images/image8.jpg'];
  images[images.length] = [8, 'images/image8.jpg'];
  images[images.length] = [9, 'images/image9.jpg'];
  images[images.length] = [9, 'images/image9.jpg'];
  images[images.length] = [10, 'images/image10.jpg'];
  images[images.length] = [10, 'images/image10.jpg'];
  images[images.length] = [11, 'images/image11.jpg'];
  images[images.length] = [11, 'images/image11.jpg'];
  images[images.length] = [12, 'images/image12.jpg'];
  images[images.length] = [12, 'images/image12.jpg'];
}

function resetGame() {
  window.location.reload();
}

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

function flipcard(e) {

  // If a card is clicked, flip the images
  console.log('flipcard:'+ e.currentTarget.id);
  // Flip images on cards
  $(e.currentTarget).find('img').toggle(); // toggle the solution image if clicked
  $(e.currentTarget).find('.answer').click(false); // lock out click if flipped
  $(e.currentTarget).attr('flipped', 'true') // let's flag the card with an attr
  cardFlipCount++; // Count the flip, if 2 then we wanna change turns
  console.log('flip count:' + cardFlipCount);

  if (cardFlipCount === 2) {

    // Get Results
    var flippedResult1 = $(".thumbnail[flipped='true']").first().find('img')[1].id;
    var flippedResult2 = $(".thumbnail[flipped='true']").last().find('img')[1].id;
    console.log('card1: ' + flippedResult1 + ' card2: ' + flippedResult2);

    // Let's score the point if applicable
    if (isPlayerOne === true && (flippedResult1 === flippedResult2)) {
      p1Score++;
      updateScore();
      $(".thumbnail[flipped='true']").attr('flipped', 'done'); // flipped is now done
      $(".thumbnail[flipped='done']").click(false); // done is now unclickable
    }

    if (isPlayerOne === false && (flippedResult1 === flippedResult2)) {
      p2Score++;
      updateScore();
      $(".thumbnail[flipped='true']").attr('flipped', 'done'); // flipped is now done
      $(".thumbnail[flipped='done']").click(false); // done is now unclickable
    }

    // need to figure out who to score if there's a match
    if (isPlayerOne === true) {
      isPlayerOne = false;
    } else {
      isPlayerOne = true;
    };

    // Game Over if points = 12
    if ((p1Score + p2Score) === 12) {
      console.log('Game Over.');
      $("#gameOverModal").modal('show');
    }

    // $('.thumbnail>img').click(false); // don't want anyone clicking after 2 cards are revealed
    setTimeout(() => {
      $(".thumbnail[flipped='true']").find('img').toggle(); // toggle generic image
      $(".thumbnail[flipped='true']").attr('flipped', 'false'); // flipped is now false
      cardFlipCount = 0; // reset flip counter
      turnCount++; // up the counter by 1
      flippedResult1 = undefined;
      flippedResult2 = undefined;

      console.log('turn: ' + turnCount);
      console.log('isPlayerOne:' + isPlayerOne);

      // $('.thumbnail>img').click(true); // make cards clickable again
    }, 3000)
  }
}

function startGame() {

  // Initialize variables
  p1Score = 0;
  p2Score = 0;
  turnCount = 1;
  cardFlipCount = 0;
  isPlayerOne = true;

  //  Place scores on screen
  updateScore();

  // Card position reset
  setImages();
  shuffle(images);

  // Add images to each div
  $('.answer').remove(); // Remove any answer tiles first if any
  for (var i = 1; i < images.length + 1; i++) {
    $('#' + i).find('img').after("<img class='img-responsive answer' id='solution " + images[i - 1][0] + "' src='" + images[i- 1][1] + "'/>");
    console.log(i + " " + images[i - 1]);
  };

  // Display:none the value of the cards
  $('.thumbnail').css('flipped', 'false');
  $('.thumbnail>.answer').css('display', 'none');

  // Assign click bind to all thumbnails/cards
  $('.thumbnail').on('click', (e) => flipcard(e));
};

$(document).ready(() => {
    startGame();
});
