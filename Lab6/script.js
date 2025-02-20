// loading spinner
function showLoading() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

// Hide loading spinnerrr
function hideLoading() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Event listener for using geolocation
document.getElementById('geoLocation').addEventListener('click', function() {
    resetInputs();
    showLoading(); 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getSunriseSunsetInfo(position.coords.latitude, position.coords.longitude);
        }, function(error) {
            alert("Error in Geolocation: " + error.message);
            hideLoading(); 
        });
    } else {
        alert("Geolocation is not supported by this browser.");
        hideLoading(); 
    }
});

// Show the spinner
function showSpinner() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

// Hide the spinner
function hideSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Event listener for using geolocationn
document.getElementById('geoLocation').addEventListener('click', function() {
    resetInputs();
    showSpinner();  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getSunriseSunsetInfo(position.coords.latitude, position.coords.longitude);
            hideSpinner();  
        }, function(error) {
            alert("Error in Geolocation: " + error.message);
            hideSpinner();  
        });
    } else {
        alert("Geolocation is not supported by this browser.");
        hideSpinner();  
    }
});

// Event listener for selecting a predefined location
document.getElementById('presetLocations').addEventListener('change', function() {
    resetInputs('select');
    const coords = this.value.split(',');
    if (coords.length === 2) {
        showSpinner();  
        getSunriseSunsetInfo(coords[0], coords[1]);
    }
});

// Event listener for the search location input
document.getElementById('searchLocation').addEventListener('input', function() {
    resetInputs('input'); 
});

// Event listener for searching a location
document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('searchLocation').value;
    if (location) {
        showSpinner();  
        fetch(`https://geocode.maps.co/search?q=${encodeURIComponent(location)}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    getSunriseSunsetInfo(data[0].lat, data[0].lon);
                } else {
                    alert("Location not found.");
                }
                hideSpinner();  
            })
            .catch(() => {
                alert("Error fetching location data.");
                hideSpinner(); 
            });
    } else {
        alert("Please enter a location to search.");
    }
});


// Reset other input methods
function resetInputs(triggeredBy = '') {
    if (triggeredBy !== 'select') {
        document.getElementById('presetLocations').value = '';
    }
    if (triggeredBy !== 'input') {
        document.getElementById('searchLocation').value = '';
    }
}

// Fetch sunrise and sunset info
function getSunriseSunsetInfo(latitude, longitude) {
    fetchSunriseSunsetData(latitude, longitude, 'today')
        .then(dataToday => {
            fetchSunriseSunsetData(latitude, longitude, 'tomorrow')
                .then(dataTomorrow => {
                    updateDisplay(dataToday, dataTomorrow);
                    hideLoading(); 
                })
                .catch(() => {
                    alert("Error fetching tomorrow's sunrise and sunset data.");
                    hideLoading(); 
                });
        })
        .catch(() => {
            alert("Error fetching today's sunrise and sunset data.");
            hideLoading(); 
        });
}

// Fetch sunrise and sunset data
function fetchSunriseSunsetData(latitude, longitude, date) {
    return fetch(`https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=${date}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                return data.results;
            } else {
                throw new Error("API Error");
            }
        });
}

// Format UTC offset
function formatUTCOffset(offsetMinutes) {
    const hours = Math.floor(Math.abs(offsetMinutes) / 60);
    const minutes = Math.abs(offsetMinutes) % 60;
    const sign = offsetMinutes >= 0 ? '+' : '-';
    return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function updateDisplay(dataToday, dataTomorrow) {
    const todayData = document.getElementById('todayData');
    const tomorrowData = document.getElementById('tomorrowData');
    
    todayData.innerHTML = `
    <strong>Today:</strong>
    <div><img src="images/sunrise.png" alt="Sunrise Icon" style="width: 20px; vertical-align: middle;"> Sunrise: ${dataToday.sunrise}</div>
    <div><img src="images/sunset.png" alt="Sunset Icon" style="width: 20px; vertical-align: middle;"> Sunset: ${dataToday.sunset}</div>
    <div><img src="images/dawn.png" alt="Dawn Icon" style="width: 20px; vertical-align: middle;"> Dawn: ${dataToday.dawn}</div>
    <div><img src="images/dusk.png" alt="Dusk Icon" style="width: 20px; vertical-align: middle;"> Dusk: ${dataToday.dusk}</div>
    <div><img src="images/daylength.png" alt="Day Length Icon" style="width: 20px; vertical-align: middle;"> Day Length: ${dataToday.day_length}</div>
    <div><img src="images/solarnoon.png" alt="Solar Noon Icon" style="width: 20px; vertical-align: middle;"> Solar Noon: ${dataToday.solar_noon}</div>
    <div><img src="images/timezone.png" alt="Timezone Icon" style="width: 20px; vertical-align: middle;"> Timezone: ${dataToday.timezone} (UTC ${formatUTCOffset(dataToday.utc_offset)})</div>
`;

tomorrowData.innerHTML = `
    <strong>Tomorrow:</strong>
    <div><img src="images/sunrise.png" alt="Sunrise Icon" style="width: 20px; vertical-align: middle;"> Sunrise: ${dataTomorrow.sunrise}</div>
    <div><img src="images/sunset.png" alt="Sunset Icon" style="width: 20px; vertical-align: middle;"> Sunset: ${dataTomorrow.sunset}</div>
    <div><img src="images/dawn.png" alt="Dawn Icon" style="width: 20px; vertical-align: middle;"> Dawn: ${dataTomorrow.dawn}</div>
    <div><img src="images/dusk.png" alt="Dusk Icon" style="width: 20px; vertical-align: middle;"> Dusk: ${dataTomorrow.dusk}</div>
    <div><img src="images/daylength.png" alt="Day Length Icon" style="width: 20px; vertical-align: middle;"> Day Length: ${dataTomorrow.day_length}</div>
    <div><img src="images/solarnoon.png" alt="Solar Noon Icon" style="width: 20px; vertical-align: middle;"> Solar Noon: ${dataTomorrow.solar_noon}</div>
    <div><img src="images/timezone.png" alt="Timezone Icon" style="width: 20px; vertical-align: middle;"> Timezone: ${dataTomorrow.timezone} (UTC ${formatUTCOffset(dataTomorrow.utc_offset)})</div>
`;
}
