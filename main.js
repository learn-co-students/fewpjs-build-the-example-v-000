// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").addEventListener("click", function(event){

    // Invoke mimicServerCall to simulate making a server request
    let myHeart = event.target
    mimicServerCall()
    .then(function() {
      if(myHeart.className == "like-glyph"){
        if(myHeart.innerText == EMPTY_HEART){
          myHeart.innerText = FULL_HEART;

          // Add the .activated-heart class to make the heart appear red
          // right now this isn't working because for some reason, two actions
          // seem to cause the loop to exit prematurely such that the heart turns red,
          // but the user looses the ability to un-like the content.
          // myHeart.classList.add('activated-heart') // alternatively: myHeart.className = "activated-heart"
        } else {

          // When a user clicks on a full heart
          // Change the heart back to an empty heart
          // Remove the .activated-heart class
          myHeart.innerText = EMPTY_HEART;
          myHeart.classList.remove('activated-heart')
        }
      }
    })

    // When the server returns a failure status, Respond to the error using a
    // .catch(() => {}) block after your .then(() => {}) block.
    .catch(error => console.log('error message in the modal'))
  })
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
