// import { transformFile } from "babel-core"

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// event listener => when a .like class is clicked, identify the target ... do you need to add a full heart or an empty heart?
// depending on the results of mimic server call, execute the change that you determined
document.addEventListener('DOMContentLoaded', () => {
  var hearts = Array.from(document.querySelectorAll('.like'))
  hearts.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      attemptServerCall(e.target)
    })
  })
})

function isEmptyHeart(target) {
  if (target.innerText == EMPTY_HEART) {
    return true
  }  else {
    return false
  }
}

function adjustHeart(target) {
  const changeToFull = isEmptyHeart(target)
  if (changeToFull) {
    target.innerText = FULL_HEART
    target.setAttribute('class', 'activated-heart')
  } else {
    target.innerText = EMPTY_HEART
    target.setAttribute('class', 'like-glyph')
  }
}

function showError(e) {
  const message = document.createTextNode(e)
    document.querySelector("#modal-message").appendChild(message)
    document.querySelector("#modal").setAttribute("class", "")
  }

function attemptServerCall(target) {
  mimicServerCall().then(() =>{
    adjustHeart(target)
  }).catch((error) => {
    const messageTiming = setTimeout(() => {
      showError(error)
    }, 10)
    setTimeout(() => { 
      clearTimeout(messageTiming)
      document.querySelector("#modal-message").removeChild;
      document.querySelector("#modal").setAttribute("class", "hidden")
    }, 5000)
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
