// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById('modal')

function hideToggle () {
  errorModal.classList.toggle('hidden')
}

function heartActiveToggle(el) {
  el.classList.toggle('activated-heart')
}

function heartFullToggle(el) {
  if (el.innerHTML === EMPTY_HEART) {
    el.innerHTML = FULL_HEART
  }
  else {el.innerHTML = EMPTY_HEART}
}

document.querySelectorAll('span.like-glyph').forEach(span => {
  span.addEventListener('click', (clickEvent) => {
    eventSpan = clickEvent.target
    updateHeart(eventSpan)
  })
})

function updateHeart(el) {
  mimicServerCall()
    .then(function() {
      heartFullToggle(el);
      heartActiveToggle(el);
    })
    .catch(function(error) {
      hideToggle();
      let p = errorModal.querySelector('p');
      p.innerHTML = error
      setTimeout(hideToggle, 3000);
    })
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
