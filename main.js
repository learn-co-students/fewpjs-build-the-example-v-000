// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById("modal")
modal.className = "hidden"
let likes = document.getElementsByClassName("like-glyph")
Array.from(likes).forEach(element => {
  element.addEventListener("click", function() {
    // debugger;
    mimicServerCall()
    .then()
    .catch((error) => {
      modal.className = ""
      modal.innerText = error
      modalTimeOut()
    })
    .success(heartStatus(element))
  })
})

function heartStatus(heart) {
  if (heart.innerText === "&#x2661;" || heart.innerText === EMPTY_HEART) {

    heart.innerText = FULL_HEART
  } else {

    heart.innerText = EMPTY_HEART
  }
  
}

function modalTimeOut() {
setTimeout(function() {
    modal.className = "hidden"
  }, 5000)
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
