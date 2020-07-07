// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  likeEvent();
})

function likeEvent() {
  let likes = document.getElementsByClassName("like")
  for(like of likes)  {
    like.addEventListener("click", heartClick) //do not invoke because it will call it before the event fires. 
  }
};

function heartClick(event) { //the event is passed to heartClick automatically from line 13, you don't have to explicitly pass it in. 
  mimicServerCall() //this is the fetch 
  .then(response => {
    if(response === "Pretend remote server notified of action!") {
      changeHeart(event)
    }})
  .catch(error => {
    displayError(error)
  })
  }

function changeHeart(event) {
  let button = event.target;
  let heart = button.firstElementChild;
  if(heart.innerHTML === EMPTY_HEART) {
    heart.innerHTML = FULL_HEART
    heart.classList.add("activated-heart");
  }
  else {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.value = "";
  }
}

function displayError(error) {
  let modal = document.getElementById("modal");
  modal.classList.value = "";
  let errorMessage = document.getElementById("modal-message");
  errorMessage.innerText = error;
  setTimeout(function() {
    modal.classList.add("hidden")}, 5000)
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
