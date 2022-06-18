// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  
  const buttons = Array.from(document.getElementsByClassName("like-glyph"))

  buttons.forEach( button => {button.addEventListener("click", function() {
    mimicServerCall()
    .then(response => {
      alert(response);
        if (button.className == "activated-heart"){button.classList.remove("activated-heart")}
        else {button.className = "activated-heart"
      };
    })
    .catch(error => {
      let modal = document.getElementById("modal");
      modal.innerHTML = error;
      modal.classList.remove("hidden")
      setTimeout(function() {modal.className ="hidden"}, 5000)
    });
  })})
})



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
