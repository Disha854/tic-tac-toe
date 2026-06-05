const cells = document.querySelectorAll(".board .cell");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const restart = document.querySelector(".restart-btn");

const cta = document.getElementById("ctaScreen");
const gameScreen = document.getElementById("gameScreen");

setTimeout(()=>{

cells.forEach((cell,index)=>{

setTimeout(()=>{

cell.style.transition=".5s";
cell.style.opacity="1";
cell.style.transform="scale(1)";

},index*250);

});

},500);

setTimeout(()=>{

title.style.transition=".7s";
title.style.opacity="1";
title.style.transform="scale(1)";

},3000);

setTimeout(()=>{

subtitle.style.transition=".7s";
subtitle.style.opacity="1";

},3800);

setTimeout(()=>{

restart.style.transition=".7s";
restart.style.opacity="1";
restart.style.transform="translateY(0)";

},4500);

setTimeout(()=>{

cells[0].innerHTML="X";
cells[0].style.opacity="1";

},5500);

setTimeout(()=>{

cells[4].innerHTML="O";
cells[4].style.opacity="1";

},6500);

setTimeout(()=>{

gameScreen.style.transition="1s";
gameScreen.style.opacity="0";
gameScreen.style.transform="scale(.9)";

},9000);

setTimeout(()=>{

cta.style.opacity="1";
cta.style.pointerEvents="auto";

},10000);

const playBtn = document.getElementById("playNow");
const miniGame = document.getElementById("miniGame");

playBtn.addEventListener("click",()=>{

cta.style.display="none";
miniGame.classList.remove("hidden");

});

const winningCell = document.getElementById("winningCell");

winningCell.addEventListener("click",()=>{

winningCell.innerHTML="X";
winningCell.classList.add("win");

document.getElementById("result").innerHTML =
"🎉 YOU WIN!";

});