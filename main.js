// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
const errorModal = document.getElementById("modal")

function hideError() {
  errorModal.setAttribute("class", "hidden")
}

function clickHeart(event) {
  let heart = event.target

  if (heart.innerText == EMPTY_HEART) {
    // When a user clicks on an empty heart
    // // Invoke mimicServerCall to simulate making a server request
    // // // mimicServerCall randomly fails to simulate faulty network conditions
    mimicServerCall()
    // When the server returns a success status
    .then(serverResponse => {
      // Change the heart to a full heart
      heart.innerText = FULL_HEART
      // Add the .activated-heart class to make the heart appear red
      heart.setAttribute("class", "activated-heart")
    })
    // When the server returns a failure status
    .catch((reason) => {
      // Display the error modal by removing the .hidden class
      errorModal.removeAttribute("class", "hidden")
      // Display the server error message in the modal
      errorModal.innerText = reason
      // Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
      window.setTimeout(hideError, 5000)
    })
  } else { // When a user clicks on a full heart
    // Change the heart back to an empty heart
    heart.innerText = EMPTY_HEART
    // Remove the .activated-heart class
    heart.removeAttribute("class", "activated-heart")
  }
}

hideError();

document.addEventListener("DOMContentLoaded", () => {
  const object = document.getElementsByClassName('like-glyph')
  // addEventListener for each like-glyph (heart)
  for (const heart in object) {
    if (object.hasOwnProperty(heart)) {
      const element = object[heart];
      element.addEventListener("click", clickHeart)
    }
  }
});

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
