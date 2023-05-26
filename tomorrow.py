import requests

url = "https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=XXX"
headers = {"accept": "application/json"}
response = requests.get(url, headers=headers)

print(response.text)