import { render } from "@testing-library/react";
import { IntersectionObserver } from "../Mocks/mockInterSectionObserver";
import TripCard from "../../../Containers/Trips-Card/trip-card";

IntersectionObserver;

describe("components", () => {
  describe("Trip card", () => {
    test("renders trip card loading indication", () => {
      const component = render(<TripCard searchQuery="" />);
      const searchPaneHeader = component.container.querySelector(
        "#page-bottom-boundary"
      );
      expect(searchPaneHeader).toBeInTheDocument();
      expect(searchPaneHeader.innerHTML).toEqual("loading");
    });
  });
});
