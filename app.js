const iin = document.querySelector("#in");
const logIn = document.querySelector("#logIn");
const myDiv1 = document.querySelector("#myDiv1");
const myDiv2 = document.querySelector("#myDiv2");
const myDiv3 = document.querySelector("#myDiv3");
const backButton1 = document.querySelector(".backButton1");
const backButton2 = document.querySelector(".backButton2");

iin.addEventListener("click", function () {
  myDiv1.style.display = "none";
  myDiv3.style.display = "block";
});
logIn.addEventListener("click", function () {
  myDiv1.style.display = "none";
  myDiv2.style.display = "block";
});

backButton1.addEventListener("click", function () {
  myDiv2.style.display = "none";
  myDiv3.style.display = "none";
  myDiv1.style.display = "block";
});

backButton2.addEventListener("click", function () {
  myDiv2.style.display = "none";
  myDiv3.style.display = "none";
  myDiv1.style.display = "block";
});
