/* -------------------------------------------------------------------------------------------------
BlaBlaOveralay is overalay custom web component which can reused to display the content in a overlay. Currently this is being
used in search control.
------------------------------------------------------------------------------------------------- */

import { ArcOverlayMixin } from "@advanced-rest-client/arc-overlay-mixin";
import { css, html, LitElement } from "lit-element";

class BlaBlaOveralay extends ArcOverlayMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        background: transparent;
      }
    `;
  }
  render() {
    return html` <slot></slot> `;
  }
  firstUpdated() {
    this.addEventListener("closed", (e) => {
      e.stopImmediatePropagation();
    });

    this.addEventListener("opened", (e) => {
      e.stopImmediatePropagation();
    });
  }
}

customElements.define("blabla-overlay", BlaBlaOveralay);
