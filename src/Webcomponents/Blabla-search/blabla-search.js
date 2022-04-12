/* -------------------------------------------------------------------------------------------------
BlaBlaSearch is custom web component which can reused as a HTML element to integrate multiline
search functionality.
------------------------------------------------------------------------------------------------- */

import { html, LitElement } from "lit-element";
import "../Blabla-overlay/blabla-overlay"
import { styles } from "./styles";
import { getSearchResult } from "./utilities";
import { searcharr } from './datastore'

export class BlaBlaSearch extends LitElement {
  constructor() {
    super();
    this.searchArray = searcharr;
    this.value = "";
    this.label = "Search";
    this.dataFields = [];
  }

  static get properties() {
    return {
      label: { type: String, reflect: true },
      searchArray: { type: Array, reflect: true, attribute: "search-array" },
      multiline: { type: Boolean, reflect: true },
      value: { type: String, reflect: true },
      dataFields: { type: Array, reflect: true },
    };
  }

  static get styles() {
    return [styles];
  }

  render() {
    const [mainTextKey, secondaryTextKey] = this.dataFields;

    return html`
      <div class="search-wrapper">
        <input
          type="text"
          .value="${this.value}"
          @input="${(e) => (this.value = e.target.value)}"
          @keyup="${() => this.changeInput(this.value)}"
          id="searchBox"
          placeholder="${this.label}"
        />
        <blabla-overlay
          id="showSearch"
          class="showSearch"
          style="width:${getComputedStyle(this).width}; display:${this.value
            ? "block"
            : "none"}"
          scroll-action="refit"
          @focus="${(e) => this.overlayFocusHandler(e)}"
          no-overlap
          horizontal-align="left"
          no-cancel-on-outside-click
        >
          ${this.multiline
            ? html`
                ${this.searchArray.map(
                  (item) => html`
                    ${this.filterSearchResult(
                      item,
                      mainTextKey,
                      secondaryTextKey
                    )
                      ? html`
                          <div
                            @click="${(e) => this.selectItem(e)}"
                            class="itemList"
                            data-item="${item[mainTextKey]}"
                          >
                            <div
                              class="main_text"
                              data-item="${item[mainTextKey]}"
                            >
                              <span
                                class="name"
                                data-item="${item[mainTextKey]}"
                                >${item[mainTextKey]}</span
                              >
                            </div>
                            <div
                              class="secondary_text"
                              data-item="${item[mainTextKey]}"
                              data-second-item="${item[secondaryTextKey]}"
                            >
                              <span
                                class="name"
                                data-item="${item[mainTextKey]}"
                                >${item[secondaryTextKey]}</span
                              >
                            </div>
                          </div>
                        `
                      : ""}
                  `
                )}
              `
            : ""}
        </blabla-overlay>
      </div>
    `;
  }

  connectedCallback = () => super.connectedCallback();

  disconnectedCallback = () => super.disconnectedCallback();

  firstUpdated = () => {
    this._overlay = this.shadowRoot.querySelector("#showSearch");
    this.shadowRoot.querySelector("input").addEventListener("focus", () => {
      this.value ? this._overlay.open() : this._overlay.close();
    });
  };

  overlayFocusHandler(e) {
    e.preventDefault();
    this.shadowRoot.querySelector("input").focus();
  }

  changeInput() {
    if (this.value) {
      this._overlay.open();
      this.multilineSearch();
    } else {
      this._overlay.close();
    }
  }

  multilineSearch() {
    this._overlay
      .querySelectorAll(".itemList .main_text")
      .forEach((c) => getSearchResult(c, c.dataset.item, this.value));
    this._overlay
      .querySelectorAll(".itemList .secondary_text")
      .forEach((c) => getSearchResult(c, c.dataset.secondItem, this.value));
  }

  filterSearchResult(inputStr, mainTextKey, secondaryTextKey) {
    return (
      inputStr[mainTextKey].toLowerCase().indexOf(this.value.toLowerCase()) !==
        -1 ||
      inputStr[secondaryTextKey]
        .toLowerCase()
        .indexOf(this.value.toLowerCase()) !== -1
    );
  }

  selectItem(e) {
    this.value = e.target.dataset.item;
    e.target.tagName === "SPAN"  ? this.value = e.target.parentNode.dataset.item :  this.value = e.target.dataset.item;
    this.shadowRoot.querySelector("input").value = this.value;
    this.changeInput(this.value);
    this._overlay.close();
    this.shadowRoot.querySelector("input").blur();
  }
}
customElements.define("blabla-search", BlaBlaSearch);
