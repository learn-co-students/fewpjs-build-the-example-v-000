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

//selects all hearts by class name.
let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
  // OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
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

//// Slower to load through the DOM?? 
// // Add the .hidden class to the error Modal in the HTML so that it doesn't appear when the page first loads.
// const errorModal = document.getElementById("modal")
//
// function hideError() {
//   errorModal.setAttribute("class", "hidden")
// }
//
// function clickHeart(event) {
//   let heart = event.target
//
//   if (heart.innerText === EMPTY_HEART) {
//     // when a user clicks on an empty heart, invoke mimicServerCall to simulate making a server request
//     // mimicServerCall randomly fails to simulate faulty network conditions.
//     mimicServerCall()
//     // when the server returns a success status
//     .then(serverResponse => {
//       // change the heart to a full heart
//       heart.innerText = FULL_HEART
//       // add the activated-heart class to make the heart appear red.
//       heart.setAttribute("class", "activated-heart")
//     })
//     // when the server returns a failure status
//     .catch((reason) => {
//       // display the error modal by removing the .hidden class
//       errorModal.removeAttribute("class", "hidden")
//       // display the server error message in the modal
//       errorModal.innerText = reason
//       // use setTimeout to hide the modal after 5 seconds (add the .hidden class)
//       window.setTimeout(hideError, 5000)
//     })
//     // when a user clicks on a full heart
//   } else {
//     // change the heart back to an empty heart
//     heart.innerText = EMPTY_HEART
//     // remove the .activated-heart class
//     heart.removeAttribute("class", "activated-heart")
//   }
// }
//
// hideError();
//
// document.addEventListener("DOMContentLoaded", () => {
//   const object = document.getElementsByClassName('like-glyph')
//   // addEventListener for each like-glyph (heart in the html)
//   for (const heart in object) {
//     if (object.hasOwnProperty(heart)) {
//       const element = object[heart];
//       element.addEventListener("click", clickHeart)
//     }
//   }
// });
