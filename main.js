// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById('modal')
let heart = document.querySelectorAll("span.like-glyph")

heart.addEventListener('click', handleLike);

function handleLike() {
  if (heart.className === "like-glyph") {
   mimicServerCall("url")
    .then(function(response) {
    return response;
  })
    .then(function(object) {
      handleSuccess()
  })
    .catch(function(error) {
      handleRejection()
  })
}
  else {
  heart.innerText = EMPTY_HEART;
  heart.className = "like-glyph"
  }
}

function handleRejection() {
  modal.classList.remove('hidden')
  setTimeout(hideModal, 3000)
}

function handleSuccess() {
    heart.innerText = FULL_HEART;
    heart.className = "like-glyph activated-heart"
}

function hideModal() {
  modal.classList.add('hidden')
}

function handleUnlike() {

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
