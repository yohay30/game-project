document.querySelector("#ok1").addEventListener("click", function () {
  const firstNameIn = document.querySelector("#fname1").value.trim();
  const lastNameIn = document.querySelector("#lname1").value.trim();
  const age = document.querySelector("#age1").value;
  const password1 = document.querySelector("#password1").value;

  const person = {
    name: firstNameIn,
    lastName: lastNameIn,
    age: age,
    password: password1,
  };
console.log(person.name);
  const personJSON = JSON.stringify(person);
  localStorage.setItem(person.name,personJSON);
});

