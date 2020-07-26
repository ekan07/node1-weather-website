const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageone = document.querySelector("#message-1");
const messagetwo = document.querySelector("#message-2");
const messagethree = document.querySelector("#message-3")

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageone.textContent = "Loading...";
  messagetwo.textContent = "";
  messagethree.textContent = "";

  fetch("/weather?address=" + location).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageone.textContent = data.error;
      } else {
        messageone.textContent = "Location: " + data.location;
        messagetwo.textContent = "Current Forecast: " +  data.forecast;
        messagethree.textContent = "Temperature: " + data.temperature;
      }
    });
  });
});
