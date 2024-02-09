let user = 0;
let comp= 0;
let yourScore = document.querySelector("#your_score");
let compScore =document.querySelector("#comp_score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#winner");
const reset = document.querySelector(".reset");



const compRandom = () => {
    const option =["rock","paper","scisser"];
    const randomindex = Math.floor(Math.random()*3);
    return option[randomindex]; 

}
const showWinner=( userwin)=>{
    if(userwin){
        user++;
        yourScore.innerHTML=user;
        console.log(user)
        console.log("you win");
        msg.innerHTML="congratulation you win "
        
    }else{
        comp++;
        compScore.innerHTML=comp;
        console.log("comp win")
        msg.innerHTML="oops computer wins"
    }

}
const draw =() =>{
    console.log("game draw");
}
const playGame = (userChoice) => {
    console.log(userChoice +" is clicked");
    const compChoice = compRandom();
    console.log(compChoice+" is clicked")

    if (userChoice ===compChoice){
        draw();
        msg.innerHTML="game draw "
    }else{
        let userwin =true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper"?false : true ;
        }else if(userChoice==="paper"){
            userwin=compChoice=== "scisser" ? false:true;
        }else{ 
            userwin = compChoice ==="rock" ?false :true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
reset.addEventListener("click", () => {
    user=0;
    comp=0;
    yourScore.innerHTML = "0";
    compScore.innerHTML = "0";
});
 