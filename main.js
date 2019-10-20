// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll('.like').forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    mimicServerCall()
    .then(() => {
      updateHeartIcon(element);
    })
    .catch(error => {
      document.querySelector('#modal-message').innerText = error.message;
      document.querySelector('#modal').classList.remove("hidden");
      setTimeout(function() {
        document.querySelector('#modal').classList.add("hidden");
      },5000);
    });
  });
});

function updateHeartIcon(e) {
  let focusedHeart = e.firstElementChild;
  if (focusedHeart.innerText == EMPTY_HEART) {
    focusedHeart.innerText = FULL_HEART;
    focusedHeart.classList.add("activated-heart")
  } else {
    focusedHeart.innerText = EMPTY_HEART;
    focusedHeart.classList.remove("activated-heart")
  }
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
