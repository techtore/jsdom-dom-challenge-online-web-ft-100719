document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const countDown = document.getElementById("minus");
    const countUp = document.getElementById("plus");
    const likes = document.getElementById("heart");
    const counterPause = document.getElementById("pause");
    const comments = document.querySelector("div.comments");
    const commentInput = document.getElementById("comment-input");
    const commentForm = document.getElementById("comment-form");
    const submit = document.querySelector("#submit");
 //timer increment on page load

timer = setInterval(function() { counter.innerText++ }, 1000);

 //count up and count down on click
    countDown.addEventListener('click', function(){
        counter.innerText = parseInt(counter.innerHTML, 10) - 1 ;
    });

    countUp.addEventListener('click', function(){
        counter.innerText = parseInt(counter.innerHTML, 10) + 1 ;
    });

 //pause counter on click (disable buttons)
  
counterPause.addEventListener('click', function(){
        counterPause.innerText = "resume"
        clearInterval(timer);
        disableButtons();  
});

const buttons = [countUp, countDown, likes];

function disableButtons (){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
      commentInput.disabled = true;
};

likes.addEventListener("click", function() {
    const ul = document.querySelector(".likes");
    const li = document.createElement("li");
    let numLikes = parseInt(counter.innerHTML);

    li.innerHTML = numLikes;

    ul.appendChild(li);
});
    
//leave comment on game play
   
   commentForm.addEventListener("submit", function(e) {
       e.preventDefault();
    const commentEntry = document.createElement('p');
    commentEntry.innerText = commentInput.value;

    comments.appendChild(commentEntry);
    e.target.reset();
   });
});

// function startTimer(){
//  timer = setInterval(function() { counter.innerText++ }, 1000);
//  counterPause.innerText = "pause"
// }; 



// when resume clicked counter resumes and buttons enabled

// function enableButtons(){
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].disabled = false;
//       }
//       commentInput.disabled = false;
// };

   // this logic stops counter from starting on doc load
    // else if (counterPause.innerText == "resume") {
    //     timer;
    //     counterPause.innerText = "pause"
    //     enableButtons();
    // }