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
