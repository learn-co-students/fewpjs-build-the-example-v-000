// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function (){
  let errorModal = document.getElementById("modal");
  errorModal.classList.add('hidden');
  debugger
  likeAction();
})

function likeAction (){
  let heartBtns = document.querySelectorAll('.like-glyph');
  heartBtns.forEach(trigger => trigger.addEventListener('click', function (event){
  mimicServerCall()
  .then(displayHearts(event))
  .catch(error => {
   let errorModal = document.getElementById("modal");
   errorModal.classList.remove('hidden');
   let errorModalMessage = document.getElementById("modal-message");
   errorModalMessage.innerText = error;
   setTimeout(() => errorModal.classList.add('hidden'), 1500);
  })
}))
}

//&#x2661;

function displayHearts(event){
  if (event.target.innerText == "♡"){
  event.target.innerText = FULL_HEART;
  event.target.classList.add('activated-heart');
} else if (event.target.innerText == "♥"){
  console.log("testing")
  event.target.innerText = EMPTY_HEART;
  event.target.classList.remove('activated-heart')};
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
