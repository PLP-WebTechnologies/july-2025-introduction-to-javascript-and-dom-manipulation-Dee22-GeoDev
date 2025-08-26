let userAge = 24; 
if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let a = 5, b = 10;
console.log("Sum of a + b =", a + b);

function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total =", calculateTotal(50, 3));

function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}
console.log(greetUser("Damacline"));

let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("title").innerText = "Hey things are getting tougher!";
  document.getElementById("title").style.color = "green";
});

function changeText(){
let newDiv = document.createElement("div");
newDiv.innerText = "I was created by JavaScript!";
newDiv.style.color = "red";
document.body.appendChild(newDiv);
document.getElementById("title").style.color = "red";
}

document.getElementById("createItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.innerText = "New Item " + (document.querySelectorAll("#dynamicList li").length + 1);
  document.getElementById("dynamicList").appendChild(li);
  document.getElementById("title").style.color = "purple";
});