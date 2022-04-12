import {
  assert,
  elementUpdated,
  fixture,
  fixtureCleanup,
} from "@open-wc/testing";

const multiLineSearchTemplate = `<blabla-search multiline  search-array='[{"name":"joe","email":"joe@email.com"},{"name":"John Smith","email":"john.smith@email.com"},{"name":"Joseph Davis","email":"joseph.davis@email.com"},{"name":"Jonathan Parker","email":"jonathan.parker@email.com"}]'></blabla-search>`;

describe("multi line search", () => {
  let multiLineSearch: any, searchInput: any;
  beforeEach(async () => {
    multiLineSearch = await fixture(multiLineSearchTemplate);
    searchInput = multiLineSearch.shadowRoot.querySelector("input");
  });
  it("check for multi line  property", () => {
    assert.equal(multiLineSearch.multiline, true);
  });

  it.only("on change of value of input show search", async () => {
    searchInput.value = "J";
    searchInput.dispatchEvent(new Event("input"));
    await elementUpdated(searchInput);
    searchInput.dispatchEvent(new KeyboardEvent("keyup"));
    await elementUpdated(searchInput);
    assert.equal(multiLineSearch._overlay.opened, true);
  });
  it("show selected item in input on click of selected item span element", async () => {
    searchInput.value = "J";
    searchInput.dispatchEvent(new Event("input"));
    await elementUpdated(searchInput);
    searchInput.dispatchEvent(new KeyboardEvent("keyup"));
    await elementUpdated(searchInput);
    const selectedItem = multiLineSearch.shadowRoot.querySelectorAll(
      "#showSearch .itemList span"
    )[0];
    selectedItem.click();
    assert.equal(multiLineSearch.value, "joe");
  });
  it("when whole string is set", async () => {
    multiLineSearch.wholeString = true;
    await elementUpdated(multiLineSearch);
    assert.equal(multiLineSearch.wholeString, true);
  });
  it("when whole string is set and search", async () => {
    multiLineSearch.wholeString = true;
    await elementUpdated(multiLineSearch);
    searchInput.value = "joe@";
    searchInput.dispatchEvent(new Event("input"));
    await elementUpdated(searchInput);
    searchInput.dispatchEvent(new KeyboardEvent("keyup"));
    await elementUpdated(searchInput);
    const selectedItem = multiLineSearch.shadowRoot.querySelectorAll(
      "#showSearch .itemList span"
    )[0];
    selectedItem.click();
    assert.equal(multiLineSearch.value, "joe");
  });
  afterEach(() => {
    fixtureCleanup();
  });
});
