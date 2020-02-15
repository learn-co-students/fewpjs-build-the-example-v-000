// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//  hide the modal upon screen load
let modal = document.getElementById('modal')
modal.className = 'hidden'

let likes = document.getElementsByClassName('like-glyph')

Array.from(likes).forEach(element => {
  element.addEventListener("click", function(){
    mimicServerCall()
    .then()
    .catch((error) => {
      modal.className = ""
      modal.innerHTML = error 
      modalTimeOut()
    })
    .then(heartStatus(element))
  })
})

function modalTimeOut(){
  setTimeout(function(){
    modal.className = 'hidden'}, 3000
  )
}

function heartStatus(element) {
  if(element.innerTEXT === EMPTY_HEART || element.innerTEXT === '&#x2661;'){
    element.innerTEXT = FULL_HEART
    element.className = 'activated-heart'
  } else {
    element.innerTEXT = EMPTY_HEART
    element.className = ""
  }
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

document.getElementById().addEventListener("click", 
  function(){
    document.getElementById("").innerHTML = "";
  })