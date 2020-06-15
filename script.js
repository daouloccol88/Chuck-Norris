const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", () => {
  const url ="https://api.chucknorris.io/jokes/random";
  fetch(url)
  .then(res => {
    return res.json();
  }).then (data => {
    jokeText.innerHTML = data.value;
  });
});


