from rest_framework import serializers


class WeatherLocationSerializer(serializers.Serializer):
    name = serializers.CharField()
    region = serializers.CharField()
    country = serializers.CharField()
    latitude = serializers.FloatField(source="lat")
    longitude = serializers.FloatField(source="lon")
    timezone = serializers.CharField(source="tz_id")


class WeatherConditionSerializer(serializers.Serializer):
    text = serializers.CharField()
    icon = serializers.CharField()
    code = serializers.IntegerField()


class CurrentWeatherSerializer(serializers.Serializer):
    temperature = serializers.FloatField(source="temp_c")
    feels_like = serializers.FloatField(source="feelslike_c")
    humidity = serializers.IntegerField()
    wind_speed = serializers.FloatField(source="wind_kph")
    wind_direction = serializers.CharField(source="wind_dir")
    pressure = serializers.FloatField(source="pressure_mb")
    precipitation = serializers.FloatField(source="precip_mm")
    visibility = serializers.FloatField(source="vis_km")
    uv = serializers.FloatField()

    condition = WeatherConditionSerializer()

    chance_of_rain = serializers.IntegerField()
    chance_of_snow = serializers.IntegerField()


class WeatherResponseSerializer(serializers.Serializer):
    location = WeatherLocationSerializer()
    current = CurrentWeatherSerializer()