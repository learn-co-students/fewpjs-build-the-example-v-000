// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// make modal hidden by default
let modal = document.querySelector('#modal');
modal.classList.add('hidden');

let likeGlyphs = document.querySelectorAll('.like-glyph');

function like(likeGlyph){
  likeGlyph.addEventListener('click', function(){
    mimicServerCall()
    .then()
    .catch(e => {
      modal.classList.remove("hidden");
      modal.innerText = e;
    })
    .then(() => likeGlyph.innerText = FULL_HEART);
  });
}

for(const likeGlyph of likeGlyphs){
  like(likeGlyph);
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
