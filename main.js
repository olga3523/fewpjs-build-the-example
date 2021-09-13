// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal');
modal.classList.toggle('hidden');

function setLike(id) {
  mimicServerCall().then(function () {
    let heart = document.querySelector('#id201811189 .like-glyph');
    if (heart.innerHTML == EMPTY_HEART) {
      heart.classList.add('activated-heart');
      heart.innerHTML = FULL_HEART;
    }
    else {
      heart.classList.remove('activated-heart');
      heart.innerHTML = EMPTY_HEART;
    }
  }).catch(function ( message ) {
    modal.classList.toggle('hidden');
    document.getElementById('modal-message').innerHTML = message;
    setTimeout(() => {
      modal.classList.toggle('hidden');      
    }, 3000);
  });
}

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
