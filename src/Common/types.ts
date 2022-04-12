/* -------------------------------------------------------------------------------------------------
The custom types and models used in the projects
------------------------------------------------------------------------------------------------- */


export type TripsState = {
  fetching: boolean;
  trips: ITrips[];
};
export type TripsDispatch = {
  fetching: boolean;
  type: string;
  result: ITrips[];
};
export type PageState = {
  page: number;
};
export type VirtualScrollReference = {
  current: HTMLElement;
};
export type Props = {
  searchQuery: string;
};
export type PageDispatch = Pick<TripsDispatch, "type">;

export interface ITrips {
  distance_in_meters: number;
  duration_in_seconds: number;
  link: string;
  price: Price;
  waypoints: WayPoints[];
}
export class Price {
  amount: number;
  currency: string;
  link: string;
}
export class WayPoints {
  date_time: string;
  place: Place;
}
export class Place {
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  country_code: string;
}
