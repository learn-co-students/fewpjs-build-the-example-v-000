const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeGylphs = document.querySelectorAll(".like-glyph")
let modal = document.getElementById("modal")

function toggleModal(){
  modal.classList.toggle('hidden')
}

function toggleLike(event){

  mimicServerCall().then((ok) => {
    let heart = event.target.textContent
    if ( heart == EMPTY_HEART || heart == "&#x2661;"){
      event.target.textContent = FULL_HEART
      
    }else{
      event.target.textContent = EMPTY_HEART
    }
    event.target.classList.toggle('activated-heart')
\  }).catch(error =>{
    toggleModal()
    setTimeout( toggleModal, 3000)
  })

}

for (let like of likeGylphs){ like.addEventListener("click", toggleLike) }

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
