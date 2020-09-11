// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
var hash = {
  EMPTY_HEART: FULL_HEART,
  FULL_HEART: EMPTY_HEART
}
var modal = document.querySelector(".modal")
var liker = document.querySelector(".like")
// Your JavaScript code goes here!

liker.addEventListener("click", (event) => {
  mimicServerCall(function (url) { 
  .then((result => event.target.innerText = hash[event.target.innerText]
  .catch((error => {
    modal.classList.remove("hidden")
    })
  })
});



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
