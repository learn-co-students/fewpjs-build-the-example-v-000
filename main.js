// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

mimicServerCall()
.then(response => {
  addListeners()
})
.catch(error => {
  alert("something happened on mimicServerCall")
  errorModal()
})

const addListeners = () => {
  likesArray = Array.from(document.getElementsByClassName('like-glyph'))
  likesArray.forEach(element => {
    element.addEventListener('click', () => {
      if (element.innerText === EMPTY_HEART) {
        element.innerText = FULL_HEART
        element.className = 'activated-heart'
      } else {
        element.innerText = EMPTY_HEART
        element.className = ''
      }
    })
  })
}

const errorModal = () => {
  let modal = document.getElementById('modal') 
  modal.className = ''
  const hide = () => {modal.className = 'hidden'}
  setTimeout(hide, 5000)
}
// const addListeners = (elements) => {elements.map(element => element.addEventListener('click', console.log('mapped it ehre!!!')))}
// addListeners(likesArray)

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
