const APIKEY = "c63d9d9ae8678b4a7f1ab0d4768f5255";

/*Appel API OpenWeather avec ville en paramètre de fonction*/

let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML =
          "<i class='fa-solid fa-city'></i>" + data.name;
        document.querySelector("#temp").innerHTML =
          "<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + "°";
        document.querySelector("#humidity").innerHTML =
          "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
          "<i class='fa-solid fa-wind'></i>" + data.wind.speed + "m/s";
      })
    )
    .catch((err) => console.log("Erreur : " + err));
};

/*Ecouteur d'évènement sur la soumission du formulaire*/

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;
  apiCall(ville);
});

/*Appel par défault au chargement de la page*/
apiCall('Madrid');
