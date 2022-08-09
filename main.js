// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").addEventListener("click", function(event){
    mimicServerCall()
    .then(function() {
      console.log(event.target)
      if(event.target.className === "like-glyph"){
        console.log("inside the if")
        if(event.target.innerText === EMPTY_HEART){
          event.target.innerText = FULL_HEART;
        } else{
          event.target.innerText = EMPTY_HEART;
        }
      }
    })
    .catch(error => console.log(error))
  })
})



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
