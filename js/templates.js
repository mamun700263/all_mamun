// <!-- index.html -->

let navbar_container = document.getElementById("navbar_container")

  fetch('/html/templates/navbar.html')
    .then(response => response.text())
    .then(data => {
      navbar_container.innerHTML = data;
    });

alert("hello")