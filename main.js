// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let classyHearts = document.querySelectorAll(".like")

for (let lkGlyph of classyHearts) {
  lkGlyph.addEventListener("click", toLikeOrNotToLike);
}

function toLikeOrNotToLike(element){
  let heart = element.target
  mimicServerCall("someUrl")
  .then((message) => {
    console.log(message)
    
  }).catch((message) => {
    console.log(message)

    function addTextNode(text) {
      let newtext = document.createTextNode(text),
      errorPElement= document.getElementById('modal-message');
      errorPElement.appendChild(newtext)
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
