var p1Score, p2Score, images = [];

// Add my images
images[images.length] = 'images/image1.jpg';
images[images.length] = 'images/image1.jpg';
images[images.length] = 'images/image2.jpg';
images[images.length] = 'images/image2.jpg';
images[images.length] = 'images/image3.jpg';
images[images.length] = 'images/image3.jpg';
images[images.length] = 'images/image4.jpg';
images[images.length] = 'images/image4.jpg';
images[images.length] = 'images/image5.jpg';
images[images.length] = 'images/image5.jpg';
images[images.length] = 'images/image6.jpg';
images[images.length] = 'images/image6.jpg';
images[images.length] = 'images/image7.jpg';
images[images.length] = 'images/image7.jpg';
images[images.length] = 'images/image8.jpg';
images[images.length] = 'images/image8.jpg';
images[images.length] = 'images/image9.jpg';
images[images.length] = 'images/image9.jpg';
images[images.length] = 'images/image10.jpg';
images[images.length] = 'images/image10.jpg';
images[images.length] = 'images/image11.jpg';
images[images.length] = 'images/image11.jpg';
images[images.length] = 'images/image12.jpg';
images[images.length] = 'images/image12.jpg';


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

    // Card position reset
    // shuffle(images);

    // // Add ID's for the cards
    // $('.thumbnail').each((e) => {
    //     console.log('thumbnail:' + $('.thumbnail').index(e));
    // });

    // Add images (numbers for now) to each div
    for (var i = 0; i < images.length + 1; i++) {
      $('#' + i).find('img').after("<img class='img-responsive' id='answer' src='" + images[i - 1] + "'/>");
    };

    // Display none the value of the cards
    $('.thumbnail>#answer').css('display', 'none');

    // Assign click bind to all thumbnails/cards
    $('.thumbnail').bind('click', (e) =>  {
      console.log(e.currentTarget.id);
      // Flip images on cards
      $(e.currentTarget).find('p').toggle();
      $(e.currentTarget).find('img').toggle();
    });
};

$(document).ready(() => {
    startGame();
});
