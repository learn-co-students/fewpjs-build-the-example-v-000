// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let likeHearts = document.querySelectorAll(".like-glyph");

Array.from(likeHearts).forEach(item => {
  item.addEventListener("click", function(){
      showLike(event)
  })
})

function modalTimeOut() {
  setTimeout(function() {
    modal.className = "hidden"}, 5000
  )
}

function showLike(event) {
  let heart = event.target
  //debugger;
  mimicServerCall()
    .then(function() {
      if (heart.className != "activated-heart") {
        heart.innerText = FULL_HEART
        heart.className = "activated-heart"

      } else if (heart.className === "activated-heart") {
        //debugger;
        heart.innerText = EMPTY_HEART
        heart.classList.remove("activated-heart")
        //debugger;
      }
    })
    .catch((error) => {
      modal.className = ""
      modalTimeOut()
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
