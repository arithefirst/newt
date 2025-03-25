import config from '$lib';
import { PRIVATE_WEATHER_API_KEY } from '$env/static/private';

type TWeatherData = {
  error: Error | null;
  noConfig: boolean;
  data: {
    weatherCode: string;
    temperature: number;
    weather: string;
  } | null;
};

export async function load({ fetch }): Promise<TWeatherData> {
  if (!PRIVATE_WEATHER_API_KEY || PRIVATE_WEATHER_API_KEY === 'yourkeyhere') {
    return {
      noConfig: true,
      error: null,
      data: null,
    };
  }

  try {
    const { lat, long } = config.weather.coordinates;
    const units = config.weather.units;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${PRIVATE_WEATHER_API_KEY}&units=${units}`,
    );

    if (!response.ok) {
      throw new Error(`Weather API responded with status: ${response.status}`);
    }

    const responseJson = await response.json();

    return {
      error: null,
      noConfig: false,
      data: {
        weather: responseJson.weather[0].main,
        weatherCode: responseJson.weather[0].icon,
        temperature: Math.round(responseJson.main.temp),
      },
    };
  } catch (e) {
    return {
      error: e as Error,
      noConfig: false,
      data: null,
    };
  }
}
