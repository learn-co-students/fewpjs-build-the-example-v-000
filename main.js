document.addEventListener("DOMContentLoaded", () => {



    // Defining text characters for the empty and full hearts for you to use later.
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'

    // Your JavaScript code goes here!
    var heart = document.querySelector("span.like-glyph")

    heart.addEventListener('click', likeComment)

    function likeComment() {
        mimicServerCall("url")
            .then(function(response) {
                return response;
            })
            .then(function(object) {
                heart = FULL_HEART;
                //Add .activated-heart class to make it red
            })
            .catch(function(error) {
                let modal = document.querySelector("#modal")
                modal.classList.remove("hidden");
                let modalMessage = document.querySelector("#modal-message")
                modalMessage.innerText = error;
                setTimeout(function() { modal.className = "hidden" }, 5000);
            })
    }

    //WHEN USER CLICKS FULL HEART
    //   Change to empty heart
    //   Remove .activated-heart class

    //------------------------------------------------------------------------------
    // Ignore after this point. Used only for demo purposes
    //------------------------------------------------------------------------------

    function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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

});