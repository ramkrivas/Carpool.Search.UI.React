/* -------------------------------------------------------------------------------------------------
The Trips card component gets the list of trips from the custom fetch hook and renders it as list of cards with basic information.
------------------------------------------------------------------------------------------------- */

import React, { useEffect, useReducer, useRef } from "react";
import { Props } from "../../Common/types";
import { pageReducer, tripsReducer } from "../../Services/reducers";
import { useFetch } from "../../Services/service-hooks";
import { useVirtualScroll } from "../../Common/virtual-scroller";
import { ITrips } from "../../Common/types";
import "./trip-card.scss";

const TripCard = (props: Props) => {
  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });
  const [tripsCollection, tripsDispatch] = useReducer(tripsReducer, {
    trips: [],
    fetching: true,
  });
  useEffect(() =>{
    if(props.searchQuery){
      document.getElementById('page-bottom-boundary').innerText="loading";
    }
    
  })
  let endOfResultBoundaryRef = useRef(null);
  useVirtualScroll(endOfResultBoundaryRef, pagerDispatch);
  useFetch(pager, tripsDispatch);

  return (
    <React.Fragment>
      {props.searchQuery && tripsCollection.trips
        ? tripsCollection.trips.map((trip: ITrips, index: number) => {
            const { price, waypoints, distance_in_meters } = trip;

            return (
              <React.Fragment>
                <div key={index}>
                  <div className="row">
                    <div className="three wide computer nine wide tablet six wide mobile column flatCards">
                      {" "}
                    </div>
                    <div className="ui link cards">
                      <div className="card">
                        <div className="content">
                          <div className="cardHeader">
                            <div className="routeStart">
                              {waypoints[0].place.city}{" "}
                              <div className="routeAddressLeft">
                                {waypoints[0].place.address}
                              </div>
                            </div>
                            <div className="line-5"></div>
                            <div className="routeEnd">
                              {waypoints[1].place.city}{" "}
                              <div className="routeAddressRight">
                                {waypoints[1].place.address}
                              </div>
                            </div>
                          </div>
                          <div className="cardHeader"></div>
                        </div>
                        <div className="content">
                          <div className="cardHeader">
                            Total Price /Person : {price.amount}{" "}
                            {price.currency}
                          </div>
                          <div className="cardHeader">
                            Distance: {distance_in_meters / 1000} KM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        : ""}

      <div
        id="page-bottom-boundary"
        style={{ border: "1px solid #red" }}
        ref={endOfResultBoundaryRef}
      >
        
      </div>
    </React.Fragment>
  );
};
export default TripCard;
