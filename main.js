// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red": "",
  "": "red"
};

const hearts = document.querySelectorAll(".like");
document.addEventListener("DOMContentLoaded", function(){
  return hearts.forEach((heart) => {
    heart.addEventListener("click", likeCallback)
  })
})

console.log(hearts);

const likeCallback = (event) => {
  let heart = event.target;
  mimicServerCall("url")
    .then(function () {
      heartClicked(heart);
    })
    .catch((error) => {
      hideErrorMessage(error);
    })
}

const heartClicked = (heart) => {
  // maybe need to add a loop? 
  heart = document.querySelector(".like").firstElementChild;
  heart.innerText = glyphStates[heart.innerText];
  heart.style.color = colorStates[heart.style.color];
}
// create a variable called heart = event
// .then and then .catch


const hideErrorMessage = (error) => {
  console.log(error);
  const div = document.getElementById("modal");
  div.setAttribute("class", "hidden");
  
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
