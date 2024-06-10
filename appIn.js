"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#myDiv2").style.display = "none";
  document.querySelector("#myDiv3").style.display = "none";
  document.querySelector("#good").style.display = "none";
  document.querySelector("#errPassword").style.display = "none";
  document.querySelector("#error").style.display = "none";
  document.querySelector("#registerSuccess").style.display = "none";

  document.querySelector("#logIn").addEventListener("click", function () {
    document.querySelector("#myDiv1").style.display = "none";
    document.querySelector("#myDiv2").style.display = "block";
  });

  document.querySelector("#in").addEventListener("click", function () {
    document.querySelector("#myDiv1").style.display = "none";
    document.querySelector("#myDiv3").style.display = "block";
  });

  document.querySelector(".backButton1").addEventListener("click", function () {
    document.querySelector("#myDiv1").style.display = "block";
    document.querySelector("#myDiv2").style.display = "none";
  });

  document.querySelector(".backButton2").addEventListener("click", function () {
    document.querySelector("#myDiv1").style.display = "block";
    document.querySelector("#myDiv3").style.display = "none";
  });



  document.querySelector("#ok1").addEventListener("click", function (event) {
    event.preventDefault();

    const firstNameIn = document.querySelector("#fname1").value.trim();
    const lastNameIn = document.querySelector("#lname1").value.trim();
    const age = document.querySelector("#age1").value;
    const password1 = document.querySelector("#password1").value;

    const person = {
      name: firstNameIn,
      lastName: lastNameIn,
      age: Number(age),
      password: password1,
      math: 0,
    };



    let users = JSON.parse(localStorage.getItem("current")) || [];
    users.push(person);

    localStorage.setItem(person.name, JSON.stringify(users));

    document.querySelector("#registerSuccess").style.display = "block";
    setTimeout(function () {
      document.querySelector("#registerSuccess").style.display = "none";
      document.querySelector("#myDiv2").style.display = "none";
      document.querySelector("#myDiv1").style.display = "block";
    }, 3000);
  });

  document.querySelector("#ok2").addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector("#good").style.display = "none";
    document.querySelector("#errPassword").style.display = "none";
    document.querySelector("#error").style.display = "none";

    const fname2 = document.querySelector("#fname2").value.trim();
    const lname2 = document.querySelector("#lname2").value.trim();
    const password2 = document.querySelector("#password2").value.trim();

    if (fname2 && lname2 && password2) {
      const users = JSON.parse(localStorage.getItem("current")) || [];
      const user = users.find(
        (user) => user.name === fname2 && user.lastName === lname2
      );

      if (user) {
        if (user.password === password2) {
          console.log(1);
          document.querySelector("#good").style.display = "block";
          setTimeout(function () {
            document.querySelector("#good").style.display = "none";
            window.location.href = "../מבוא לבחירת משחק/chose.html";
          }, 3000);
        } else {
          document.querySelector("#errPassword").style.display = "block";
          setTimeout(function () {
            document.querySelector("#errPassword").style.display = "none";
          }, 3000);
        }
      } else {
        document.querySelector("#error").style.display = "block";
        setTimeout(function () {
          document.querySelector("#error").style.display = "none";
        }, 3000);
      }
    }
  });
});
