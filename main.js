// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//getEleementsbyclassname -returns an array of elements.
//addeventlistener to a single element.



function likeHeart(){
  mimicServerCall("url")
.then(function(){
// changes the heart to a full heart
//add activated heart to make heart appear red.

var likes = document.getElementsByClassName('like-glyph')

for (var i = 0; i < likes.length; i++) {
    likes[i].className += ' activated-heart'
}
})// does action if it passes

.catch(function(error){
document.getElementById('modal').className = ""
document.getElementById('modal').innerHTML = error.message

//this is if the server call fails
})


//link it to the article class....and when they click like, it would match ? and light up the heart

}
//if server fails, respond to error with a catch block. afteryour then block
// display error modal and show the message

window.addEventListener('DOMContentLoaded', () => {
var likes = document.getElementsByClassName('like')

for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', likeHeart, false);
}
})

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
