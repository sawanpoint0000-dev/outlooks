// ===== RANDOM BOYS NAME GENERATOR (200K+ POSSIBILITIES) =====

const start = [
  "ra","ro","vi","ka","ar","an","sa","ni","mo","de",
  "su","pa","la","ha","ma","ta","ya","aj","ak","am"
];

const mid = [
  "h","r","n","v","m","t","s","l","k","y","j","d"
];

const end = [
  "ul","it","an","esh","av","ay","in","er","al","at",
  "ar","on","am","as","ik"
];

const FIXED_PASSWORD = "Santosh@8757#$";
const usedNames = new Set();
let count = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("password").value = FIXED_PASSWORD;
});

function randomName(){
  const a = start[Math.floor(Math.random()*start.length)];
  const b = mid[Math.floor(Math.random()*mid.length)];
  const c = end[Math.floor(Math.random()*end.length)];
  let name = a + b + c;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function generateUnique(){
  let username;

  do{
    const name = randomName();
    const digits = Math.floor(10000 + Math.random() * 90000); // 5 digits
    username = name + digits;
  } while(usedNames.has(username));

  usedNames.add(username);
  count++;

  const input = document.getElementById("username");
  input.value = username;
  input.classList.remove("copied");

  document.getElementById("total").innerText = count;
}

function copyText(id){
  const input = document.getElementById(id);
  if(!input.value) return;

  navigator.clipboard.writeText(input.value);
  input.classList.add("copied");

  const sound = document.getElementById("copySound");
  sound.currentTime = 0;
  sound.play();
}
