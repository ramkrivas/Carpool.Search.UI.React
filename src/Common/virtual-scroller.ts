/* -------------------------------------------------------------------------------------------------
The useVirtualScroll custom hook is used for infinite scrolling of the trips details loading on trip search result
------------------------------------------------------------------------------------------------- */

import { useEffect, useCallback, ElementRef } from "react";
import { ActionTypes } from "../Services/action-types";
import { VirtualScrollReference } from "./types";

export const useVirtualScroll = (
  scrollRef: VirtualScrollReference,
  dispatch: any
) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: ActionTypes.NAVIGATE_PAGE });
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};
