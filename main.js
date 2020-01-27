// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', setup)

function setup(){
  const hearts = document.querySelectorAll('.like-glyph')



  for (const heart of hearts) { heart.addEventListener('click', clickLike)}

  function clickLike(e){
    mimicServerCall()
      .then(updateHeart(e))
      .catch(handleError)  
  }
}

function updateHeart(e){
  console.log(e.target.classList)
  if (e.target.classList.contains('activated-heart')){
    e.target.classList.remove('activated-heart')
    e.target.textContent = "♡"
  } else {
    e.target.classList.add('activated-heart')
    e.target.textContent = '❦'
  }
}

function handleError(error){
  errorModal.classList.remove('hidden')
  errorModal.textContent = `Oops! ${error}`
  setTimeout(hideModal, 5000)
}

function hideModal(){
  errorModal.classList.add('hidden')
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
