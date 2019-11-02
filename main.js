
// Your JavaScript code goes here!
/*When a user clicks on an empty heart ("Recognizing events")
Invoke mimicServerCall to simulate making a server request
mimicServerCall randomly fails to simulate faulty network conditions */

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let likeHeart = document.querySelectorAll(".like");  // selecting "likes" elements tjat we want to make it clickable
 for (let i=0; i< likeHeart.length; i++){   //  finding all the likes
  likeHeart[i].addEventListener("click", likeFunction);   // create a click event, calling on like function to recongnize clickable event
  function likeFunction(e) {
     let heart = e.target;

  mimicServerCall("Url") //fetch function - Invoke minicServerCall to simulate making a server request
      .then(function(serverMessage){   // changing heart in HTML
        if (heart.innerHTML == FULL_HEART) {
            heart.innerHTML = EMPTY_HEART};
        if (heart.innerHTML == EMPTY_HEART) {
            heart.innerHTML = FULL_HEART};
        })

        /*  Display the error modal by removing the .hidden class
            Display the server error message in the modal
            Use setTimeout to hide the modal after 5 seconds (add the .hidden class)  */

      .catch(function(error){  // respond to the error using .catch
        let modal = document.getElementById("modal")
        modal.className = " ";
        modal.innerText = error  //   post error in modal
        console.log(modal);
        setTimeout(function(){  // use setTimeout to hide the modal after 5 seconds
          modal.className= "hidden"   //  adding hidden class back to modal
        }, 5000)
       });

      const li = document.getElementsByTagName('li')  //create class for activated_heart in each li
        for(let i=0; i < li.length; i++) {
       const spanLike = document.querySelector('span.like-glyph')
       spanLike.style.color = 'red'
       console.log(spanLike[i])

       }
    }
 }

/*  Pending
a) red heart for second person /looping is not working and activated heart is not working
b) remove activated heart


        element.class:LIst.remove("activated_heart")
        heart.className += "activated_heart"
        heart.classList.add("activated_heart")
        //heart.style.color ='red'// add activated heart to HTML
        // element.classList.add("activated_heart");  */


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
