// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeGlyph = document.querySelectorAll('.like-glyph')

for (const heart of likeGlyph) {
  heart.addEventListener('click', (event) => {
    console.log(event.target)
    const heartImage = event.target
    mimicServerCall()
    .then(() => {
      if (heartImage.textContent !== FULL_HEART) {
        heartImage.textContent = FULL_HEART;
      } else {
        heartImage.textContent = EMPTY_HEART;
      }
      heartImage.classList.toggle("activated-heart");
    })
    .catch((error) => {
      document.getElementById('modal-message').textContent = error;
      function displayError() {
        document.getElementById('modal').classList.toggle('hidden');
      }
      displayError();
      const temporaryDisply = setTimeout(() => {
        displayError();
      }, 5000)
    });
  })
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
