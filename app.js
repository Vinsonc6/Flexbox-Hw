




function AddCart ()
    const buttons = document.querySelectorAll("button");
//create array if we need more from EACH
const btnArray = ArrayBuffer.from(buttons);
btnArray,forEach((btn) ) =>
    btn.addEventListenter("click", function (event) {
        console.log(event.target.textContent);
        console.log
    })


//made an array
//usigm for each to put array of cards on screen
//work on cart