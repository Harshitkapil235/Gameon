let arr = [0, 1, 2];
let stone = 0;
let scissor = 1;
let paper = 2;
let user;
let randomIndex;
let wins = document.getElementById("wins");
let start = document.getElementById("start");
let ai = document.getElementById("computer");
let human = document.getElementById("user");
let images = ["stone.png", "scissor.png", "paper.png", "stone1.png"]
start.addEventListener("click", () => {
    StartPlaying()
    playSound("click.mp3")
})
function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }
function StartPlaying() {
    randomIndex = Math.floor(Math.random() * arr.length);
    computer = arr[randomIndex];
    console.log(computer);
}
function determineWinner(user, computer) {
    if (user == computer) {
        console.log("Tie")
        wins.innerText = "Tie"
        playSound("tie.mp3")
    }
    else if ((computer == stone && user == scissor) || (computer == paper && user == stone) || (computer == scissor && user == paper)) {
        console.log("Computer Wins")
        wins.innerText = "Computer Wins"
        playSound("lose.mp3")
    }
    else {
        console.log("human Wins")
        wins.innerText = "You Win"
        playSound("congratulation.mp3")
    }
}

let a = document.getElementById("stone")
let b = document.getElementById("paper")
let c = document.getElementById("scissor")
let resetButton = document.getElementById("restart");

a.addEventListener('click', () => {
    playSound("click.mp3")
    StartPlaying()
    ai.classList.add('shake-animation-c')
    human.classList.add('shake-animation-u')

    setTimeout(() => {
        ai.classList.remove('shake-animation-c')
        human.classList.remove('shake-animation-u')
        human.src = images[3];
        ai.src = images[computer];
        user = stone;
        determineWinner(user, computer);
    }, 2000);

})
b.addEventListener('click', () => {
    playSound("click.mp3")
    StartPlaying()
    ai.classList.add('shake-animation-c')
    human.classList.add('shake-animation-u')

    setTimeout(() => {
        ai.classList.remove('shake-animation-c')
        human.classList.remove('shake-animation-u')
        human.src = images[2];
    ai.src = images[randomIndex];
    user = paper;
    determineWinner(user, computer)
    }, 2000);


    
})
c.addEventListener('click', () => {
    playSound("click.mp3")
    StartPlaying()
    ai.classList.add('shake-animation-c')
    human.classList.add('shake-animation-u')

    setTimeout(() => {
        ai.classList.remove('shake-animation-c')
        human.classList.remove('shake-animation-u')
        human.src = images[1];
        ai.src = images[randomIndex];
        user = scissor;
        determineWinner(user, computer)
    }, 2000);
});