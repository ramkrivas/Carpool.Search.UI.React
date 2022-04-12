/* -------------------------------------------------------------------------------------------------
The Search pane renders Search controls (webcomponent) to select the starting and destination points of a trip
------------------------------------------------------------------------------------------------- */

import React, { useReducer, useRef, useState } from "react";
import styles from "../Header/header.module.scss";
import "../../Webcomponents/Blabla-search/blabla-search";
import "../../Webcomponents/Blabla-overlay/blabla-overlay";
import "antd/dist/antd.css";
import TripCard from "../Trips-Card/trip-card";

const SearchPane = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const HandleSearch = () => {
    setSearchQuery("load");
  };
  return (
    <React.Fragment>
      <div className={`ui grid`}>
        <div className="five wide computer nine wide tablet six wide mobile column">
          {" "}
        </div>

        <div
          className={`six wide computer three wide tablet six wide mobile column`}
        >
          <h1 data-testid="searchHeader" className={`ui grid ${styles.header}`}>
            Find a Ride
          </h1>
          <br></br>
          <br></br>
          <div className={"ui uisegmentcustom"}>
            <blabla-search
              multiline
              data-testid="locationGoingFrom"
              label="Leaving from"
              dataFields='["main_text","secondary_text"]'
            ></blabla-search>
          </div>
          <br></br>
          <br></br>
          <div className={"ui uisegmentcustom"}>
            <blabla-search
              multiline
              data-testid="locationGoingTo"
              label="Going To"
              dataFields='["main_text","secondary_text"]'
            ></blabla-search>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <button
        type="button"
        data-testid="searchBtn"
        onClick={HandleSearch}
        className="ant-btn ant-btn-primary"
      >
        Search
      </button>
      <br></br>
      <br></br>
      <TripCard searchQuery={searchQuery} />
    </React.Fragment>
  );
};
export default SearchPane;
