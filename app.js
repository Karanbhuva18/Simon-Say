let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game started")
        started=true
        levelUp();
    }
    
})
function btnFlash(btn){
    
    

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },700);
}
function userPress(btn){
   
   
   
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);

   
}

function checkAns(idx){
   
    if( gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length)
        { 
            levelUp()
        }
       
    }
    else{
        h2.innerHTML = `game over <br>your score is ${level} <br> Press any key to reStart game`
        started=false
        level=0
        gameSeq = []
    }
}
function btnpress()
{
    userPress(this)
    // console.log(this.classList[1])
    userSeq.push(this.classList[1]);
    checkAns(userSeq.length-1)
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4)
    //random btn choose
    let randomColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    console.log(randomColor)
    btnFlash(randbtn);
    userSeq=[];
}



let allBtn = document.querySelectorAll(".btn")

for(btn of allBtn){
    btn.addEventListener("click",btnpress)
}