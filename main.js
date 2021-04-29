// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

let heartClick = (heart) => {
    let isHeartEmpty = () => heart.innerHTML === EMPTY_HEART;
    let fillHeart = () => {
        heart.innerHTML = FULL_HEART;
        heart.classList.add("activated-heart");
    };
    let emptyHeart = () => {
        heart.innerHTML = EMPTY_HEART;
        heart.classList.remove("activated-heart");
    };
    let heartCheck = () => isHeartEmpty() ? fillHeart() : emptyHeart();
    mimicServerCall()
        .then(function(response){
            heartCheck();
        })
        .catch(function(error){
            errorModal.classList.remove("hidden");
            errorModal.innerText = error;
            setTimeout(() => errorModal.classList.add("hidden"), 3000);
        });
};
let hearts = document.getElementsByClassName("like-glyph");
Array.from(hearts).forEach(heart => heart.addEventListener("click", () => heartClick(heart)));


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
