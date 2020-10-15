document.getElementById("myBtn").addEventListener("click", loading);

function loading() {
  document.getElementById("myBtn").innerHTML = "Generating Doggo...";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var dogPic = document.createElement("img");
      dogPic.setAttribute("src", data.message);

      document.getElementById("dog-pic").appendChild(dogPic);
    });
}
