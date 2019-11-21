// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorPElement = document.getElementById('modal-message')
// Your JavaScript code goes here!


let classyHearts = document.querySelectorAll(".like-glyph")

for (let lkGlyph of classyHearts) {
  lkGlyph.addEventListener("click", toLikeOrNotToLike);
}

function toLikeOrNotToLike(element){
  
  let heart = element.target
  mimicServerCall("someUrl")
  .then((message) => {
    if (heart.innerHTML === EMPTY_HEART) {
      heart.classList.add('activated-heart')
      heart.innerHTML = FULL_HEART
    } else {
      heart.classList.remove('activated-heart')
      heart.innerHTML = EMPTY_HEART
    }
  
    console.log(message)
  }).catch((message) => {
    console.log(message)

    function addTextNode(text) {
      let newtext = document.createTextNode(text)
      errorPElement.appendChild(newtext)
      setTimeout(function(){ errorPElement.innerHTML = ""; }, 3000)
    }

    addTextNode(message)
    
    document.getElementById("modal").className = ""
    setTimeout(function(){ document.getElementById("modal").className = "hidden"; }, 3000);
    
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
