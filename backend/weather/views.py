from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .services import WeatherAPIClient


class CurrentWeatherView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        city = request.query_params.get("city")

        if not city:
            return Response(
                {
                    "ok": False,
                    "error": "city is required",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        client = WeatherAPIClient()

        weather = client.get_current_weather(city)

        return Response({
            "ok": True,
            "data": weather,
        })