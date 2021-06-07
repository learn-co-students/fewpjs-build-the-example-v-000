// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const main = document.querySelector('body')
main.addEventListener('click', function (event) {
  let likeButtonIsPressed = event.target.className === "like-glyph"
 
  if (likeButtonIsPressed) {
    //let id = event.target.parentElement.dataset.id
    console.log(event.target)
     let like = event.target
     if (like.innerText == EMPTY_HEART) {
      like.innerText = FULL_HEART
    }
    else {
      like.innerText = EMPTY_HEART
    }
    
   
    // fetch(`http://localhost:3000/toys/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
      
    // })
    // .then(response => response.json())
  }
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
