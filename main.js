// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeIcons = document.querySelectorAll(".like-glyph") 

// Your JavaScript code goes here!
window.onload=function(){
  // When a user clicks on an empty heart
  likeIcons.forEach(link => link.addEventListener("click", toggleLike))
}

function toggleLike(event) {
  // Invoke mimicServerCall
  mimicServerCall()
  .then(() =>  {
    // When the server returns a success status
    // Change the heart to a full heart
    if (event.target.innerHTML == EMPTY_HEART) {
      event.target.innerHTML = FULL_HEART
      // Add the .activated-heart class to make the heart appear red
      event.target.classList.add("activated-heart")
    } else {
      // When a user clicks on a full heart
      // Change the heart back to an empty heart
      event.target.innerHTML = EMPTY_HEART
      // Remove the .activated-heart class
      event.target.classList.remove("activated-heart")
    }
  })
  // Respond to the error using a .catch(() => {}) block 
  .catch((error) => {
    // Display the error modal by removing the .hidden class
    let modal = document.getElementById("modal")
    modal.classList.remove("hidden")
    // Display the server error message in the modal
    let p = document.getElementById("modal-message")
    p.innerHTML = error
    // Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
    setTimeout(() => {
      modal.classList.add("hidden")
    }, 5000);
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
// simulate making a server request
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // mimicServerCall randomly fails to simulate faulty network conditions
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}