document.getElementById("searchBtn").addEventListener("click", function() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (city.trim() === "") {
    result.textContent = "Lütfen bir şehir adı girin.";
    return;
  }

  // Random fake temperature just for testing
  const temp = Math.floor(Math.random() * 15 + 10);
  result.innerHTML = `${city} için sıcaklık: ${temp}°C ☀️`;
});
