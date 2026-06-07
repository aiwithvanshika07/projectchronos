console.log("Project Chronos Loaded");

function saveXP(points){

let xp =
Number(localStorage.getItem("xp")) || 0;

xp += points;

localStorage.setItem("xp",xp);

}

function getXP(){

return Number(
localStorage.getItem("xp")
) || 0;

}

function resetGame(){

localStorage.clear();

alert(
"Timeline Reset Complete"
);

location.reload();

  }
