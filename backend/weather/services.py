import requests

from django.conf import settings

class WeatherAPIError(Exception):
    """Base exception for WeatherAPI errors."""


class WeatherAPINotFoundError(WeatherAPIError):
    """Raised when the requested location does not exist."""


class WeatherAPIAuthenticationError(WeatherAPIError):
    """Raised when WeatherAPI authentication fails."""


class WeatherAPITimeoutError(WeatherAPIError):
    """Raised when WeatherAPI request times out."""


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

        try:
            response = requests.get(
                url,
                params=params,
                timeout=10,
            )

        except requests.Timeout as exc:
            raise WeatherAPITimeoutError(
                "Weather service timed out."
            ) from exc

        except requests.RequestException as exc:
            raise WeatherAPIError(
                "Weather service is unavailable."
            ) from exc

        if response.status_code == 400:
            raise WeatherAPINotFoundError(
                "Location not found."
            )

        if response.status_code in (401, 403):
            raise WeatherAPIAuthenticationError(
                "Weather service authentication failed."
            )

        if response.status_code >= 500:
            raise WeatherAPIError(
                "Weather service is temporarily unavailable."
            )

        response.raise_for_status()

        return response.json()