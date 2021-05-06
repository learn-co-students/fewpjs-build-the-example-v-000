// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function () {
  let errModal = document.getElementById("modal");
  
  errModal.classList.add('hidden');
  likeAction();
})

function likeAction() {
  let heartBtns = document.querySelectorAll('.like-glyph');

  heartBtns.forEach(trigger => trigger.addEventListener('click', function (event) {
    mimicServerCall()
      .then(displayHearts(event))
      .catch(error => {
        let errModal = document.getElementById("modal");
        errModal.classList.remove('hidden');

        let errModalMessage = document.getElementById("modal-message");
        errModalMessage.innerText = error;
        setTimeout(() => errModal.classList.add('hidden'), 1500);
      })
  }))
}

function displayHearts(event) {
  if (event.target.innerText == "♡") {
    event.target.innerText = FULL_HEART;
    event.target.classList.add('activated-heart');
  } else if (event.target.innerText == "♥") {
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove('activated-heart')
  };
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
