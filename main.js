// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", function() {
  errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');

  const likeGlyph = document.querySelectorAll('article.media-post footer ul li span.like-glyph');
  for (const e of likeGlyph) {
    e.addEventListener('click', function(event) {
      mimicServerCall().then(function(resonse) {
        if (e.innerHTML === EMPTY_HEART) {
          e.innerHTML = FULL_HEART;
          e.classList.add('activated-heart');
        } else {
          e.innerHTML = EMPTY_HEART;
          e.classList.remove('activated-heart');
        }
      })
      .catch(function(error) {
        document.getElementById('modal-message').innerHTML = error;
        errorModal.classList.remove('hidden');
        setTimeout(function(){ errorModal.classList.add('hidden'); }, 5000);
      })

    })
  }

});




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
