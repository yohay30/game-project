document.querySelector("#ok2").addEventListener("click", function (event) {
  event.preventDefault();

  document.querySelector("#good").style.display = "none";
  document.querySelector("#errPasseord").style.display = "none";
  document.querySelector("#error").style.display = "none";

  const fname2 = document.querySelector("#fname2").value.trim();
  const lname2 = document.querySelector("#lname2").value.trim();
  const password2 = document.querySelector("#password2").value.trim();

  if (fname2 && password2) {
    const fromStorge = localStorage.getItem(fname2);
    if (fromStorge) {
      const user = JSON.parse(fromStorge);

      if (user.lastName === lname2) {
        if (user.password === password2) {
          document.querySelector("#good").style.display = "block";
          setTimeout(function () {
            document.querySelector("#good").style.display = "none";
            window.location.href = "../מבוא לבחירת משחק/chose.html";
          }, 3000);
          return;
        } else {
          document.querySelector("#errPasseord").style.display = "block";
          setTimeout(function () {
            document.querySelector("#errPasseord").style.display = "none";
          }, 3000);
          return;
        }
      } else {
        document.querySelector("#error").style.display = "block";
        setTimeout(function () {
          document.querySelector("#error").style.display = "none";
        }, 3000);
        return;
      }
    } else {
      document.querySelector("#error").style.display = "block";
      setTimeout(function () {
        document.querySelector("#error").style.display = "none";
      }, 3000);
      return;
    }
  }
});
