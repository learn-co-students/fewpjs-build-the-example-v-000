// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  let likers = document.getElementsByClassName('like')
  for(let i = 0; i < likers.length; i++){
    liker = likers[i]
    liker.addEventListener('click', likerClickFunction)
  }
});

function likerClickFunction(event){
  let heart = heartGetter()

  if(heart == EMPTY_HEART){
    mimicServerCall()
      .then(function(){
        heartSetter(FULL_HEART, event)
        // set to red
        if (event.target.getElementsByTagName("span")[0] == undefined){
          heart = event.target.classList.add("activated-heart");
        }
        else {
          heart = event.target.getElementsByTagName("span")[0].classList.add("activated-heart");
        }
      })
      .catch(function(error){
        document.getElementById('modal').classList.remove('hidden')

        setTimeout(function(){
          document.getElementById('modal').classList.add('hidden')
        }, 5000)
      })

  }
  else{
    heartSetter(EMPTY_HEART, event)

    // remove red
    if (event.target.getElementsByTagName("span")[0] == undefined){
      heart = event.target.classList.remove("activated-heart");
    }
    else {
      heart = event.target.getElementsByTagName("span")[0].classList.remove("activated-heart");
    }
  }
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
function heartSetter(heart, event){
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
