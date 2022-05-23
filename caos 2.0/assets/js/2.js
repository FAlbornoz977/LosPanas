const APP_ID = '4090239d69cdb3874de692fd18539299';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`)
        .then(response => response.json())
        .then(data => setWeatherData1(data1));
}

const setWeatherData1 = data1 => {
    const weatherData1 = {
        location1: data.name,
        temperature1: Math.floor(data.main.temp),
        date1: getDate1(),

    }

    Object.keys(weatherData1).forEach( key => {
        setTextContent(key, weatherData1[key]);
    });

    cleanUp();
}

const cleanUp = () => {
    let container1 = document.getElementById('container1');

    container1.style.display = 'flex1'; 
}

const getDate1 = () => {
    let date1 = new Date1();
    return `${date1.getDate()}-${ ('0' + (date1.getMonth() + 1)).slice(-2)}-${date1.getFullYear()}`;
}

const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}