// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function mainFunction() {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const likeButtons = document.getElementsByClassName('like');

  modal.className = "hidden"; // Hide the error modal when the page loads
  // modal.classList.add("hidden"); // Not supported in all browsers

  for (const like of likeButtons) {
    const heart = like.querySelector('.like-glyph');

    like.addEventListener("click", function() {
      mimicServerCall()
        .then(function(success) {
          alert(success); // This is extra

          if (heart.textContent === EMPTY_HEART) {
            // Toggle the heart to 'liked'
            heart.textContent = FULL_HEART;
            heart.className = 'activated-heart';
          } else {
            // Toggle the heart to 'not liked'
            heart.textContent = EMPTY_HEART;
            heart.className = '';
          }
        })
        .catch(function(error) {
          modalMessage.textContent = error; // Add the error message to the modal
          modal.className = ""; // Display the modal
          // modal.classList.remove("hidden"); // Not supported in all browsers

          // Hide the modal after 5 seconds
          setTimeout(function() { modal.className = "hidden"; }, 5000);
        });
    });
  }
}

if (document.readyState === 'loading') { // Document hasn't finished loading
  document.addEventListener("DOMContentLoaded", mainFunction);
} else { // Document has finished loading
  mainFunction();
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
