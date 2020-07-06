// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let hearts = document.querySelectorAll('.like');

function like (e) {
  let heart = e.target;
  mimicServerCall("test URL")
    .then(function(serverMessage){
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color]
    })
    .catch(function(error){
      document.getElementById('modal').className = "";
    });
}
for (let glyph of hearts) {
  glyph.addEventListener("click", like);
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
