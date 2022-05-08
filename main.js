// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
errorModal = document.querySelector("#modal");
errorModal.className = "hidden";
const likeGlyphs = document.querySelectorAll(".like-glyph");

function glyphCb(event) {
  const glyphSelected = event.target;
  mimicServerCall()
  .then((response) => {
    alert(response);
    if (glyphSelected.textContent === EMPTY_HEART) {
      glyphSelected.textContent = FULL_HEART;
      glyphSelected.className = "activated-heart";
    } else {
      glyphSelected.textContent = EMPTY_HEART;
      glyphSelected.className = "";
    }
  })
  .catch((error) => {
    errorModal.className = "";
    document.querySelector("#modal-message").textContent = error;;
    setTimeout(() => errorModal.className = "hidden", 3000);
  })
}

// for (const likeGlyph of likeGlyphs) {
//   likeGlyph.addEventListener("click", glyphCb);
// }
likeGlyphs.forEach((likeGlyph) => likeGlyph.addEventListener("click", glyphCb))


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
