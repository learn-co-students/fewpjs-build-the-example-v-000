// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modal").className = "hidden"
  let likers = document.getElementsByClassName('like')
  for(let i = 0; i < likers.length; i++){
    liker = likers[i]
    liker.addEventListener('click', likerClickFunction)
  }
});

function likerClickFunction(){
  let heart = heartGetter()



  if(heart == EMPTY_HEART){
    // mimicServerCall()
    // if(true){
    //
    // }
    // else{
    //
    // }
      heartSetter(FULL_HEART)

      // set to red
      if (event.target.getElementsByTagName("span")[0] == undefined){
        heart = event.target.classList.add("activated-heart");
      }
      else {
        heart = event.target.getElementsByTagName("span")[0].classList.add("activated-heart");
      }
  }
  else{
    heartSetter(EMPTY_HEART)

    // remove red
    if (event.target.getElementsByTagName("span")[0] == undefined){
      heart = event.target.classList.remove("activated-heart");
    }
    else {
      heart = event.target.getElementsByTagName("span")[0].classList.remove("activated-heart");
    }
  }

// when clicking on an empty heart
// if mimicServer fails do a bunch of stuff
//   Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
//   Display the error modal by removing the .hidden class
//   Display the server error message in the modal
//   Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
// if mimicServer succeeds, change the like to
//   Change the heart to a full heart
//   Add the .activated-heart class to make the heart appear red

// when clicking on a full heart
//   Change the heart back to an empty heart
//   Remove the .activated-heart class
}

// returns the empty or full heart
function heartGetter(){
  let heart = ''
  if (event.target.getElementsByTagName("span")[0] == undefined){
    heart = event.target.innerHTML
  }
  else {
    heart = event.target.getElementsByTagName("span")[0].innerHTML
  }
  return heart
}

// sets the clicked heart to a new heart
function heartSetter(heart){
  if (event.target.getElementsByTagName("span")[0] == undefined){
    event.target.innerHTML = heart
  }
  else {
    event.target.getElementsByTagName("span")[0].innerHTML = heart
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
