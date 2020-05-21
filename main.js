 // Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", function(e) {
    const heart = e.target;
    mimicServerCall()
    .then(function(servresp){
      if (heart.innerHTML === EMPTY_HEART){
        heart.className = "activated-heart";
        heart.innerHTML = FULL_HEART;
      } else {
        heart.className = "like-glyph";
        heart.innerHTML = EMPTY_HEART;
      }
    })
    .catch(function(error){
      let hideClass = document.getElementsByClassName("hidden");
      hideClass[0].classList.remove("hidden");
      let modalMessage = document.getElementById("modal-message");
      modalMessage.innerHTML = error;
      setTimeout(function(){ 
        let newClassName = document.getElementById("modal");
        newClassName.className = "hidden" }, 5000);
    })

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
