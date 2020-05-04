// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let glyphStates = {
  EMPTY_HEART : FULL_HEART,
  FULL_HEART : EMPTY_HEART 
};

let colorStates = {
  "red" : "",
  "": "red"
};

let hidden = document.querySelector(`.hidden`);
let error = document.querySelector(`modal`);
//error.classList.add(`hidden`); -> not needed but but it works to inject classlist.


document.addEventListener("DOMContentLoaded", function() {
  error.appendChild(hidden);
});


let articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = FULL_HEART;
    })
    .catch(function(error) {
      console.log(error); 
      alert("Something went wrong!");
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
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
