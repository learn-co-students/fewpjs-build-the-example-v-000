// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function addLikeListener(){
  let buttons = document.querySelectorAll(".like-glyph")
  buttons.forEach(button =>
    button.addEventListener('click', clickEvent => {
      if (clickEvent.target.innerText == EMPTY_HEART) {
        mimicServerCall()
          .then(()=> {activateHeart(clickEvent.target)})
          .catch(error => handleError(error))
      } else {
        deactivateHeart(clickEvent.target)
      }
    })
  )
}

function activateHeart(clickedHeart) {
  clickedHeart.innerText = FULL_HEART
  clickedHeart.classList.add("activated-heart")
}

function deactivateHeart(clickedHeart) {
  clickedHeart.innerText = EMPTY_HEART
  clickedHeart.classList.remove("activated-heart")
}

function handleError(error) {
  let modalDiv = document.querySelector("#modal")
  let modalMessage = modalDiv.querySelector("#modal-message")
  modalDiv.classList.remove("hidden")
  modalMessage.innerText = error
  setTimeout(resetError,3000);
}

function resetError(error) {
  let modalDiv = document.querySelector("#modal")
  let modalMessage = modalDiv.querySelector("#modal-message")
  modalDiv.classList.add("hidden")
  modalMessage.innerText = ""
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

document.addEventListener('DOMContentLoaded',()=>{
  addLikeListener();
})