var url = "https://official-joke-api.appspot.com/jokes/programming/random";

$.getJSON(url, function (data) {
  console.log(data);
display.innerHTML = `Q: ${data[0].setup} <br>
<br>
A: ${data[0].punchline}`
  
});