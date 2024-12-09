export type weatherType = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    feelslike_c: number;
    uv: number;
  };
};



export type hourlyForecastType = {
  forecast: {
    forecastday: Array<{
      date: string;
      hour: Array<{
        time: string;
        temp_c: number;
        humidity: number;
        condition: {
          text: string;
          icon: string;
        };
      }>;
    }>;
  };
};


export type threeDaysType = {
  current: {
    temp_c: number;
    condition: {
      icon: string;
      text: string;
    };
  };
}


export type ForecastDay= {
  date: string;
  day: {
    condition: {
      text: string;
      icon: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
};