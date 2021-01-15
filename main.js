// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let theLikes = document.querySelectorAll(".like");


function likeCallBack(evt){
  let thisLike  = evt.target;

     mimicServerCall().then((ok) => {
        thisLike.classList.add('activated-heart');
        thisLike.querySelector('span').innerText = FULL_HEART;


     }).catch( (error) => {
        let theModal =  document.querySelector('#modal');
        theModal.classList.remove('hidden');
        setTimeout( function(){
          theModal.classList.add('hidden');
        },5000);

     });

}

for ( let e of theLikes) {
  e.addEventListener('click', likeCallBack );
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
