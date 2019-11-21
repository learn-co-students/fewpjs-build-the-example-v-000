// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  const likeGlyphs = document.getElementsByClassName('like-glyph');
  const errorModal = document.getElementById('modal');

  for (const like of likeGlyphs) {
    addLikeEventListener(like);
  }

  function addLikeEventListener(like) {
    like.addEventListener('click', function(e) {
      mimicServerCall()
      .then(() => {
        if (e.target.innerText === EMPTY_HEART) {
          like.innerText = FULL_HEART;
          like.className = 'activated-heart';
        } else {
          like.innerText = EMPTY_HEART;
          like.classList.remove('activated-heart');
        }
      })
      .catch(() => {
        errorModal.classList.remove('hidden');
        setTimeout(() => errorModal.className = 'hidden', 5000);
      })
    })
  }

})


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
