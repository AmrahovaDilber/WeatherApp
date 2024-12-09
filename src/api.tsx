const BASE_URL = "https://api.weatherapi.com/v1/.";
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

// Fetch weather data for a specific location
export const fetchWeather = async (location: string) => {
  return await weatherApi("/current.json", { q: location });
};

export const fetch7DaysWeather = async (countryName: string) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${countryName}&days=7&aqi=no&alerts=no
`
    );
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export const fetchHourlyForecast = async (countryName) => {
  try {
    const response =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${countryName}&days=1
`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
