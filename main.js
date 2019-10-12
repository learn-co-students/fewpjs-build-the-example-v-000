// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('click', (e) => {

  mimicServerCall()
  .then(() => {
    changeHeart(e);
  })
  .catch(function(error) {
    document.querySelector('#modal-message').innerHTML = error
    document.querySelector('.hidden').removeAttribute('class', 'hidden')
    setTimeout(function(){
      document.getElementById('modal').setAttribute('class', 'hidden')
    }, 5000)
  })

  function changeHeart(e) {
    if (e.target.innerHTML === EMPTY_HEART) {
      e.target.innerHTML = FULL_HEART;
      e.target.className = "activated-heart"
    } else {
      e.target.innerHTML = EMPTY_HEART;
      e.target.className = "like"
    }
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
