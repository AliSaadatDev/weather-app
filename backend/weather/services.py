import requests

from django.conf import settings


class WeatherAPIClient:

    def __init__(self):
        self.base_url = settings.WEATHER_API_BASE_URL
        self.api_key = settings.WEATHER_API_KEY

    def get_current_weather(self, location: str):
        url = f"{self.base_url}/current.json"

        params = {
            "key": self.api_key,
            "q": location,
            "aqi": "yes",
        }

        response = requests.get(
            url,
            params=params,
            timeout=10,
        )

        response.raise_for_status()

        return response.json()