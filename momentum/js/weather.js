
const API_KEY = "c036856d4420294449cdc97f8ba1e616"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=matric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

// getCurrentPosition는 두개의 인자가 필요함
// 첫번째는 모든게 잘 됐을 때 실행될 함수
// 두번째는 에러가 났을 때 실행될 함수
// 사용자의 현재위치를 가져옴 
// Javascript가 geolocationposition object를 줌 input parameter로
// 우린 Javascript가 채울 공간을 만들어주기만 하면 됌
