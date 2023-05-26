const options = {method: 'GET',
headers: {accept: 'application/json'}};

fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=XXX', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
curl --compressed --request GET --url \ 'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=vYTQ3K5IuqDraRb0Yk32I5tJOLlQgURH'