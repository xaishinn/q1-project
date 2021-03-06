// Function to generate a random integer between min & max (inclusive)
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//    make sure max is numberOfItems-1 to ensure a valid array index


// Fetch items from the NASA images API

fetch('https://images-api.nasa.gov/search?keywords=galaxies&description=galaxy&center=jpl&media_type=image')
  .then(response => response.json())
  .then(body => {
    var numberOfItems = body.collection.items.length;
    var randomIndexItem = randomInteger(0, numberOfItems-1);
    var randomItem = body.collection.items[randomIndexItem];
    var randomImg = randomItem.links[0];

    document.body.style.backgroundImage = 'url("' + randomImg.href + '")';
    document.body.style.backgroundAttachment = 'fixed';
    
    
    // document.body.style.background = 'url("' + randomImg.href + '")';

    
    // Pull the thumbnail source from the item.links[0].href field
    // Update the document.body style background to the image url obtained above
    // console.log(randomImg)
  })
  .catch(e => console.error(e));

  var quizzes = [
    "../quiz/index.html",
    "../quiz2/index.html",
    "../quiz3/index.html"
];

function randomQuiz() {
    var rand = Math.floor(Math.random() * 3);
    return quizzes[rand];
    
  }
  

function quizStart() {
  window.location.href = randomQuiz();
}
