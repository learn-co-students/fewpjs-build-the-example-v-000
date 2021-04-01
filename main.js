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

// liker.addEventListener("click", (event) => {
//   mimicServerCall(function (url) { 
//   .then((result => event.target.innerText = hash[event.target.innerText];
//   .catch((error => {
//     modal.classList.remove("hidden");
//     })
//   })
// });
function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
    //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function (serverMessage) {
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function (error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
