// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const LIKE_BUTTONS = document.querySelectorAll('.like-glyph')
const MODAL = document.getElementById('modal')

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  LIKE_BUTTONS.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault()
      mimicServerCall()
        .then(() => {
          if (button.innerHTML === EMPTY_HEART) {
            button.innerHTML = FULL_HEART
            button.setAttribute('class', 'activated-heart')
          } else {
            button.innerHTML = EMPTY_HEART
            button.removeAttribute('class')
          }
        })
        .catch(() => {
          MODAL.removeAttribute('class')
          setTimeout(() => {
            MODAL.setAttribute('class', 'hidden')
          }, 3000)
        })
    })
  })
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
