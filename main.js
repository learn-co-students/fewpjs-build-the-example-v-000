// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// HERE'S THE PLAN STAN!!!
// Write out code as if there is one "like" elements
// Encapsulate code inside a loop (for each?)

// OR...
// Use article#id to identify unique "like" elements and assign event listeners that way
// Resource: https://css-tricks.com/the-thinking-behind-simplifying-event-handlers/


document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener('click', event => {
    console.log(event.target);
  });
  
  // initialLike();
});

function initialLike() {
  const eHeart = Array.from(document.getElementsByClassName("like-glyph")).find(el => el.textContent === EMPTY_HEART);

  eHeart.addEventListener("click", function(e) {
    console.log("Clicky!");
    mimicServerCall();
  });
};


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
