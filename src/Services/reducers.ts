/* -------------------------------------------------------------------------------------------------
The Services has two reducers : tripsReducer for fetching and concating the trips. 
                                pageReducer - pagination/cursor wise fetching data
------------------------------------------------------------------------------------------------- */

import { ActionTypes } from "./action-types";
import {
  TripsState,
  TripsDispatch,
  PageDispatch,
  PageState,
} from "../Common/types";

const tripsReducer = (state: TripsState, action: TripsDispatch) => {
  switch (action.type) {
    case ActionTypes.STACKING_TRIPS:
      return { ...state, trips: state.trips.concat(action.result) };
    case ActionTypes.FETCH_TRIPS:
      return { ...state, fetching: action.fetching };
    default:
      return state;
  }
};

const pageReducer = (state: PageState, action: PageDispatch) => {
  switch (action.type) {
    case ActionTypes.NAVIGATE_PAGE:
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};

export { pageReducer, tripsReducer };
