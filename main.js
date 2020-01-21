// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

//object literal
 const glyph = {
   '♡':'♥',
   '♥':'♡' 
 };


document.addEventListener("DOMContentLoaded", () => { HideErrorBanner(); eventListeners(); });
function eventListeners() {
  const like = document.getElementsByClassName("like-glyph");
  for (const e of like) { e.addEventListener("click", (e) => { liker(e) }) }
}

function HideErrorBanner(){
  const modal = document.getElementById("modal")
  modal.setAttribute("class", "hidden");
}

function displayErrorBanner(e){
  const modal = document.getElementById("modal")
  modal.removeAttribute("class", "hidden");
  
  const modal_message = document.getElementById("modal-message")
  setTimeout(() => { HideErrorBanner()},5000)
  modal_message.innerText = e ;
  console.log(e)
}
    
function liker(e) {
  mimicServerCall().then((result) => { 
    HideErrorBanner();
    e.target.innerText = glyph[e.target.innerText] ;
    console.log(result)
  }).catch((error) => { displayErrorBanner(error)})  
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
