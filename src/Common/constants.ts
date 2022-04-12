const baseUrl = "https://public-api.blablacar.com/api/v3/trips";
const authKey = "YzbiA8L6DcqxTvSna1lOFQQU66FosDVs";
const tripSearch =
  "&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2020-03-10T20:00:00&currency=EUR";

export const maxCount = 3;

export const searchbaseUrl = baseUrl + "?key=" + authKey + tripSearch;
