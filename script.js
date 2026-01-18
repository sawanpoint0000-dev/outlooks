<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Email Generator</title>
</head>
<body>

<h3>Email Generator (only small letters)</h3>

<input type="text" id="name" placeholder="Enter name">
<button onclick="generateEmail()">Generate Email</button>

<p id="result"></p>

<script>
function cleanMailName(text) {
  return text
    .toLowerCase()        // only small letters
    .replace(/[^a-z]/g, ""); // remove numbers & symbols
}

function generateEmail() {
  let name = document.getElementById("name").value;

  if (name === "") {
    alert("Name enter karo");
    return;
  }

  let email = cleanMailName(name) + "@gmail.com";

  document.getElementById("result").innerText = "Generated Email: " + email;
}
</script>

</body>
</html>
