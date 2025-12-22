const firstNames = [
"rahul","rohit","aman","vikas","sachin","arjun","deepak","ankit",
"sumit","pankaj","ravi","mohit","karan","nitesh","ajay","sandeep",
"manoj","ashish","vinod","pradeep"
];

const lastNames = [
"verma","sharma","singh","patel","gupta","yadav","mehta","mishra",
"jain","agrawal","kumar","malik","choudhary","pandey","tiwari"
];

const FIXED_PASSWORD = "Santosh@8757#$";
const usedNames = new Set();
let count = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("password").value = FIXED_PASSWORD;
});

function generateUnique(){
    let username;

    do{
        const first = firstNames[Math.floor(Math.random()*firstNames.length)];
        const last  = lastNames[Math.floor(Math.random()*lastNames.length)];
        const digits = Math.floor(100000 + Math.random()*900000);
        username = first + last + digits;
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
    if(input.value === "") return;

    navigator.clipboard.writeText(input.value);

    input.classList.add("copied");

    const sound = document.getElementById("copySound");
    sound.currentTime = 0;
    sound.play();
}
