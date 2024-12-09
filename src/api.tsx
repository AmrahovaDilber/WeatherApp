const BASE_URL = "https://api.weatherapi.com/v1/";
const API_KEY = "ebdc92171b6b43dcaf5182749240812";

export const weatherApi = async (
  endpoint: string,
  params: Record<string, string> = {}
) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  params.key = API_KEY;
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch WeatherAPI data:", error);
    throw error;
  }
};


export const fetchWeather = async (location: string) => {
  return await weatherApi("/current.json", { q: location });
};

export const fetch7DaysWeather = async (countryName: string) => {
  try {
    const data = await weatherApi("/forecast.json", {
      q: countryName,
      days: "7",
      aqi: "no",
      alerts: "no",
    });
    return data;
  } catch (error) {
    console.error("Error in fetch7DaysWeather:", error);
    throw error;
  }
};

export const fetchHourlyForecast = async (countryName: string) => {
  try {
    const data = await weatherApi("/forecast.json", {
      q: countryName,
      days: "1",
    });
    return data;
  } catch (error) {
    console.error("Error in fetchHourlyForecast:", error);
    throw error; 
  }
};


export const fetchCurrentLocationWeather = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}current.json?key=${API_KEY}&q=${latitude},${longitude}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};