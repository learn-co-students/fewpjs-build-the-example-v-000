// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorRibbon = document.querySelector("#modal")
errorRibbon.classList.add("hidden")

document.addEventListener("DOMContentLoaded", function(){

  addLikeEvents()

  function addLikeEvents() {
    const likeButtons = document.querySelectorAll(".like")
    for (const button of likeButtons) {
      button.querySelector(".like-glyph").addEventListener("click", onClickLikeButton)
    }

    function onClickLikeButton(event) {
      
      if (event.target.innerText == EMPTY_HEART) {
        mimicServerCall().then(() => {
          event.target.innerText = FULL_HEART
          event.target.classList.add("activated-heart")})
        .catch(error=>{displayErrorWithMsg(error)})

      } else if (event.target.innerText == FULL_HEART) {
        mimicServerCall().then(() => {
          event.target.innerText = EMPTY_HEART
          event.target.classList.remove("activated-heart") })
        .catch(error => { displayErrorWithMsg(error) })
      } else {
        console.error("innerText of like span is invalid")
      }
    }
  }

  function displayErrorWithMsg(msg) {
    errorRibbon.classList.remove("hidden")
    errorRibbon.querySelector("#modal-message").innerText = msg
    setTimeout(() => { errorRibbon.classList.add("hidden") }, 5000)
  }
})// endof DOMContentLoaded


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
