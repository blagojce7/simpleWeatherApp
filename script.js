// The data that is used in the app
const weatherData = {
        tempUnit: 'C',
        windSpeedUnit: 'm/s',
        days: [
            { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10, type: 'sunny' },
            { day: 'Tue', temp: 14, windDirection: 'north', windSpeed: 14, type: 'rainy' },
            { day: 'Wed', temp: 17, windDirection: 'south', windSpeed: 2, type: 'cloudy' },
            { day: 'Thu', temp: 18, windDirection: 'south-east', windSpeed: 24, type: 'sunny' },
            { day: 'Fri', temp: 1, windDirection: 'south-west', windSpeed: 23, type: 'rainy' },
            { day: 'Sat', temp: 15, windDirection: 'east', windSpeed: 22, type: 'cloudy' },
            { day: 'Sun', temp: 9, windDirection: 'west', windSpeed: 20, type: 'sonny' },
        ]
    }
    // form short to full name of the days
var DAYS = {
        'Mon': 'Monday',
        'Tue': 'Tuesday',
        'Wed': 'Wednesday',
        'Thu': 'Thursday',
        'Fri': 'Friday',
        'Sat': 'Saturday',
        'Sun': 'Sunday'
    }
    //Generate the list with the days of the week
CreateList(weatherData.days);

function CreateList(weatherDataDays) {
    weatherDataDays.forEach(data => {
        var node = document.createElement("li");
        var textnode = document.createTextNode(data.day);
        node.onclick = () => showDetails(data);
        var nodespan = document.createElement("span");
        var textnodespan = document.createTextNode(data.temp + "°C");
        nodespan.appendChild(textnodespan);
        node.appendChild(textnode);
        document.getElementById("my-list").appendChild(node).appendChild(nodespan);
    });
}

//function to show all the detail of the selected day
function showDetails(data) {
    document.getElementById("details-day-name").innerHTML = DAYS[data.day];
    document.getElementById("details-day-temperature").innerHTML = data.temp + "°C";
    document.getElementById("details-day-temperature").addEventListener("click", function() {
        document.getElementById("details-day-temperature").innerHTML = data.temp + 273.15 + " K"; //on click covert the temerature unit to Kelvin
    });
    document.getElementById("details-day-type").innerHTML = data.type;
    document.getElementById("details-day-windSpeed").innerHTML = data.windSpeed + " m/s";
    document.getElementById("details-day-windSpeed").addEventListener("click", function() {
        document.getElementById("details-day-windSpeed").innerHTML = data.windSpeed * 3.6 + " km/h"; //on clik convert the wind speed unit to km/h
    });
    document.getElementById("details-day-windDirection").innerHTML = data.windDirection;
    document.getElementById("windDirection-arrow").className = "arrow " + data.windDirection;
}