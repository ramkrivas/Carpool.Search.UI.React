/* -------------------------------------------------------------------------------------------------
The Search box and Overalay are created with the intention of reusable (to be technogloy agnostic). 
The reason, initially I was not decided the final application could be in Angular or React. Hence, 
I strated as a custom webcomponent which can be used any of this framework.
------------------------------------------------------------------------------------------------- */

import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "blabla-search": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "blabla-overlay": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    multiline?: boolean;
    dataFields?: string;
    label?: string;
    image?: string;
  }
}
