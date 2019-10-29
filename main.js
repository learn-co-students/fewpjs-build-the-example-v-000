// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like");
document.addEventListener("DOMContentLoaded", function(){
  return hearts.forEach((heart) => {
    heart.addEventListener("click", likeCallback)
  })
})

console.log(hearts);

// create a variable called heart = event
// .then and then .catch

const clickHeart = (event) => {
  console.log(event);
  event.preventDefault();


  return fetch(event, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(event.target)
    })
    .then((response) => response.text)
    .then((json) => {heartClicked(json);})
    .catch((error) => {
      document.querySelector("#modal.hidden").removeAttribute(".hidden");
      document.getElementById("modal-message").innerHTML = error.message;
      setTimeout(hideErrorMessage, 5000)
    })
}

const heartClicked = (heart) => {
  document.querySelector(".like-glyph") = heart;
  if (heart === EMPTY_HEART) {
    heart.setAttribute("class", "activated-heart");
  } else {
    heart.removeAttribute("class", "activated-heart");
  }
}

const hideErrorMessage = (error) => {
  const div = document.getElementById("modal");
  div.setAttribute("class", "hidden").innerHTML = error;
  
}

const likeCallback = (event) => {
  console.log(event);
  mimicServerCall(event)
  .then(function (response) {
    console.log(response);
    clickHeart(event);
  })
  .catch((error) => {
    console.log(error);
    hideErrorMessage(error);
  })
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
