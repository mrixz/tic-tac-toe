let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

turnO=true; //playerX,playerY

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerHTML=`<img src="o.png" class="symbol">`;
            turnO=false;
        } else{
           box.innerHTML=`<img src="x.png" class="symbol">`;
            turnO=true; 
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableBoxes =() =>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes =() =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerHTML=" ";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulaions, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Img = boxes[pattern[0]].querySelector("img");
        let pos2Img = boxes[pattern[1]].querySelector("img");
        let pos3Img = boxes[pattern[2]].querySelector("img");

        if (pos1Img && pos2Img && pos3Img) {
            let pos1Val = pos1Img.getAttribute("src");
            let pos2Val = pos2Img.getAttribute("src");
            let pos3Val = pos3Img.getAttribute("src");

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val.includes("o.png") ? "O" : "X");
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click" ,resetGame);