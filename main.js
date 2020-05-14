// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// document.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementById("modal").classList.add("hidden")
// });

document.addEventListener('DOMContentLoaded', (event) => {
   modal =  document.getElementById("modal")
   modal.className = "hidden"
  console.log("modal", modal)
});



  let glyphs = document.getElementsByClassName("like-glyph")


  for (let glyph of glyphs) {
    glyph.addEventListener("click", function(event){

        mimicServerCall()

// anything else you have to do with the res (response) string, do here on line 34
        // .then(res => res )
        // .then(res => res
        //
        //  )

        .then(function(response){
          // document.getElementById("modal").classList.add("hidden")
            document.getElementById("modal").className = "hidden"
          if (event.target.innerHTML == EMPTY_HEART) {
            console.log("hihih")
            event.target.innerHTML = FULL_HEART
            event.target.classList.add("activated-heart")
          } else {
              console.log("wha?")
              event.target.classList.remove("activated-heart")
              event.target.innerHTML = EMPTY_HEART
          }

        })


         // if (res == "Pretend remote server notified of action!") {
         //   console.log(event.target.innerHTML = FULL_HEART)
         //   event.target.classList.add("activated-heart")
         // } else if (res == "Random server error. Try again.") {
         //   console.log("failed message")
         // } else if (event.target.innerHTML = FULL_HEART) {
         //   console.log(event.target.innerHTML = EMPTY_HEART)
         //   event.target.classList.remove("activated-heart")
         // }

         .catch((error) => {
            // event.target.classList.remove("activated-heart")
            console.log(error)

            // event.target.classList.remove("activated-heart")
            // document.getElementById("modal").remove("hidden")

            setTimeout(function(){
              // document.getElementById("modal").classList.add("hidden")
              document.getElementById("modal").className = " "
              // document.getElementById("modal").remove("hidden")

            }, 5000)

            // document.getElementById("modal-message").innerText = error

         })



    } )
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
