// Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'
//
// Your JavaScript code goes here!
//


  //
  // let data = {
  //   name: "Kat",
  //   age: "24"
  // };
  // let configObj = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body: JSON.stringify(data)
  // };
  // return fetch('file:///Users/Katrina/Development/fewpjs-build-the-example-v-000/index.html', configObj)
  // .then(function(response){
  //   return response.json();
  // }).then(function(obj){
  //   console.log(obj);
  // }).catch(function(error){
  //   alert("Oh-uh");
  //   console.log(error.message);
  // });
// })

let liHearts = document.querySelectorAll(".like");
document.addEventListener("DOMContentLoaded", () => {
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  let colorStates = {
    "red" : "",
    "": "red"
  };

  let likes = document.getElementsByClassName("likes");
  let li = document.getElementsByTagName("li");
  let error = document.getElementById("modal");
  error.hidden = true;
  mimicServerCall("fakenews");

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
