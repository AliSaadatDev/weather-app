from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import WeatherResponseSerializer
from .services import (
    WeatherAPIClient,
    WeatherAPIError,
    WeatherAPINotFoundError,
    WeatherAPIAuthenticationError,
    WeatherAPITimeoutError,
)


class CurrentWeatherView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        city = request.query_params.get("city")

        if not city:
            return Response(
                {
                    "ok": False,
                    "error": {
                        "code": "CITY_REQUIRED",
                        "message": "City is required.",
                    },
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        client = WeatherAPIClient()

        try:
            weather = client.get_current_weather(city)

        except WeatherAPINotFoundError:
            return Response(
                {
                    "ok": False,
                    "error": {
                        "code": "LOCATION_NOT_FOUND",
                        "message": "Location not found.",
                    },
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        except WeatherAPIAuthenticationError:
            return Response(
                {
                    "ok": False,
                    "error": {
                        "code": "WEATHER_SERVICE_AUTH_ERROR",
                        "message": "Weather service authentication failed.",
                    },
                },
                status=status.HTTP_502_BAD_GATEWAY,
            )

        except WeatherAPITimeoutError:
            return Response(
                {
                    "ok": False,
                    "error": {
                        "code": "WEATHER_SERVICE_TIMEOUT",
                        "message": "Weather service request timed out.",
                    },
                },
                status=status.HTTP_504_GATEWAY_TIMEOUT,
            )

        except WeatherAPIError:
            return Response(
                {
                    "ok": False,
                    "error": {
                        "code": "WEATHER_SERVICE_UNAVAILABLE",
                        "message": "Weather service is temporarily unavailable.",
                    },
                },
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        serializer = WeatherResponseSerializer(weather)

        return Response(
            {
                "ok": True,
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )