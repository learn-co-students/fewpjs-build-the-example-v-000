// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const switcher = {'♡': '♥', '♥':'♡'};
const hearts = document.querySelectorAll(".like-glyph");
const modal = document.getElementById("modal");

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  hearts.forEach(heart => {
    heart.addEventListener("click", (e) => {
      e.preventDefault()
      mimicServerCall()
        .then(() => {
          if (heart.innerHTML === EMPTY_HEART) {
            heart.setAttribute("class", "activated-heart");
          } else {
            heart.setAttribute("class", "like-glyph");
          }
          heart.innerHTML = switcher[heart.innerHTML];
        })
        .catch(() => {
          modal.removeAttribute("class");
          setTimeout(function() { 
            modal.setAttribute("class", "hidden"); 
          }, 3000);
        })
    })
  })
});

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
