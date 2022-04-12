/* -------------------------------------------------------------------------------------------------
The custom service hook is mainly used to fetch the data from API and dispatch the actions to reducers.
------------------------------------------------------------------------------------------------- */

import { useEffect, useState, useLayoutEffect } from "react";
import { searchbaseUrl, maxCount } from "../Common/constants";
import { PageState } from "../Common/types";
import { ActionTypes } from "./action-types";

var pageCursor = "";
var isEndOfPage = false;
export const useFetch = async (data: PageState, dispatch: any) => {
  useEffect(() => {
    dispatch({ type: ActionTypes.FETCH_TRIPS, fetching: true });
    let apiUrl =
      searchbaseUrl && pageCursor && !isEndOfPage
        ? searchbaseUrl + "&count=" + maxCount + "&from_cursor=" + pageCursor
        : searchbaseUrl + "&count=" + maxCount;
    if (!isEndOfPage) {
      fetch(apiUrl)
        .then((data) => data.json())
        .then((images) => {
          let result = images.trips;
          pageCursor = images.next_cursor;
          isEndOfPage = pageCursor ? false : true;
          dispatch({ type: ActionTypes.STACKING_TRIPS, result });
          dispatch({ type: ActionTypes.FETCH_TRIPS, fetching: false });
        })
        .catch((error) => {
          dispatch({ type: ActionTypes.FETCH_TRIPS, fetching: false });
          return error;
        });
    }
  }, [dispatch, data.page]);
};
