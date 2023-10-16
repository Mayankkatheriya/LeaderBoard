document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    let firstName = e.target.children[0].value;
    let lastName = e.target.children[1].value;
    let country = e.target.children[2].value;
    let score = e.target.children[3].value;
    let errorMessage = document.querySelector(".errorMessage")
    errorMessage.style.display = "none"
    if(firstName==="" || lastName === "" || country==="" || score===""){
        errorMessage.style.display = "block"
    }
    else{
        let scoreBoardContainer = document.querySelector(".scoreBoard-container");
        let scoreBoardElement = document.createElement("div");
        scoreBoardElement.classList.add("scoreboard");

        //todo get Date and time
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        let d = new Date();
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        let time = h + ":" + m + ":" + s;

        let mon = month[d.getMonth()];
        let year = d.getFullYear();
        let da = addZero(d.getDate())
        let date = mon + " "+  da + ", " + year;

        scoreBoardElement.innerHTML = `
        <div>
        <p class = "playerName"> ${firstName} ${lastName}</p>
        <p class="main-time">${date}, ${time}</p>
        </div>
        <p class="player-country">${country}</p>
        <p class="player-score">${score}</p>
        <div class="scoreboard-btn-container">
            <button>🗑️</button>
            <button>+5</button>
            <button>-5</button>
        </div>
        `;
        scoreBoardContainer.appendChild(scoreBoardElement);
        activateButton()
        sortAndAppend();
    }
})
//TODO Activate buttons
function activate(e) {
    let btnTarget = e.target.textContent;
    let scores = e.target.parentElement.parentElement.children[2];
    if (btnTarget === "🗑️") {
        e.target.parentElement.parentElement.remove();
    }
    else if(btnTarget==="+5"){
        scores.textContent = parseInt(scores.textContent)+5    
    }
    else if(btnTarget==="-5"){
        scores.textContent = parseInt(scores.textContent)-5    
    }
    sortAndAppend();
}
//! call back function in click event should be global otherwise it will give error
function activateButton() {
    // This function activates the buttons in each scoreboard element.

    [...document.querySelectorAll(".scoreboard-btn-container")].map(el => {
        el.addEventListener("click", activate);
    });
}

//TODO sort and reappend all elements
function sortAndAppend() {
    let scoreBoardContainer = document.querySelector(".scoreBoard-container");
    let data = [...document.querySelectorAll(".scoreboard")];

    //* sort the data array based on the player's score

    data.sort((a, b) => {
        return parseInt(b.querySelector(".player-score").textContent) - parseInt(a.querySelector(".player-score").textContent);
    });

    //* clear the existing elements

    while (scoreBoardContainer.firstChild) {
        scoreBoardContainer.removeChild(scoreBoardContainer.firstChild);
    }

    //* append the sorted elements back to the container

    data.forEach((element) => {
        scoreBoardContainer.appendChild(element);
    });
}
sortAndAppend();
activateButton();