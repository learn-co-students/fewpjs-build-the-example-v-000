// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeHeart(){
mimicServerCall("url")
.then(function(){
// changes teh color of the heart
console.log('pass')
})// does action if it passes

.catch(function(error){
document.getElementById('modal').className = ""
//this is if the server call fails
})

document.getElementById("like-glyph").addEventListener("click", likeHeart())

//link it to the article class....and when they click like, it would match ? and light up the heart

}
//if server fails, respond to error with a catch block. afteryour then block
// display error modal and show the message


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
