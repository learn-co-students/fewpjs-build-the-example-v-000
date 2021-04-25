// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const allHearts = document.querySelectorAll('.like-glyph');



for (glyph of allHearts) {
  glyph.addEventListener('click', likeCallBack);
}

function likeCallBack(e) {
  const heart = e.target;
  mimicServerCall('fakeURL')
  .then(function(serverMessage) {
    if (e.target.innerText == EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.className = 'like-glyph activated-heart';
         } else {
           e.target.innerText = EMPTY_HEART;
           e.target.className = 'like-glyph';
         }
  })
  .catch(function(error) {
    const modal = document.getElementById('modal');
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = 'hidden', 3000);
  
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
