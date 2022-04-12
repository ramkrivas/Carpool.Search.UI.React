import { render, screen } from "@testing-library/react";
import { IntersectionObserver } from "../Mocks/mockInterSectionObserver";
import SearchPane from "../../../Containers/Search-Pane/searchPane";

IntersectionObserver;

describe("components", () => {
  describe("SearchPane", () => {
    test("renders Search pane header", () => {
      render(<SearchPane />);
      const searchPaneHeader = screen.getByTestId("searchHeader");
      expect(searchPaneHeader).toBeInTheDocument();
      expect(searchPaneHeader.innerHTML).toEqual("Find a Ride");
    });

    test("renders blabla Search custom webcomponents", () => {
      render(<SearchPane />);
      expect(screen.getByTestId("locationGoingFrom")).toBeInTheDocument();
      expect(screen.getByTestId("locationGoingTo")).toBeInTheDocument();
    });

    test("renders Search button", () => {
      render(<SearchPane />);
      expect(screen.getByTestId("searchBtn")).toBeInTheDocument();
    });
  });
});
