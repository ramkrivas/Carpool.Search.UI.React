import { css } from "lit-element";

export const styles = css`
:host {
  width: 100%;
  display: block;
  height: 2.5rem;
}
.search-wrapper {
  position: relative;
  height: 2.5rem;
}
input,
:host([readonly]) input:focus {
  line-height: 1.5rem !important;
  font-family: gt-eesti, "Helvetica Neue", Helvetica, Arial, sans-serif
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  border-radius: 0.125rem 0.125rem 0rem 0rem;
  background: rgb(237, 237, 237);
  height: 2.5rem;
  color: #054752;
  font-size:1.2rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  text-overflow: ellipsis;
  transition: var(--transition-time) all ease-in-out;
  border-bottom: 0.0625rem solid transparent;
  border-color: #054752;
  padding-left:1rem;
}
input::-ms-clear {
  display: none;
}

#showSearch,
.empty-wrapper {
  max-height: 12.5rem !important;
  overflow: auto;
  background:rgb(237, 237, 237);
  z-index: 1;
  box-shadow: var(--shadow-overlay);
  box-sizing: border-box;
}
.empty-wrapper {
  width: calc(100% - 1rem);
}
.name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
#showSearch .itemList {
  height: 1.5rem;
  padding: 0.5rem;
  font-family: gt-eesti, "Helvetica Neue", Helvetica, Arial, sans-serif
  color: #054752;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-height: 1.5rem;
}

input::-webkit-input-placeholder,
input::-moz-placeholder {
  font: var(--body-1);
  color: #054752;
}
.searchText {
  white-space: pre;
  color:#2DBEFF;
  font: var(--title-1);
}
/* hover */
input:hover {
  background: rgb(237, 237, 237);
}
input:focus {
  border-color: rgb(237, 237, 237);
}
:host(:not(.no-hovermq)) #showSearch .itemList:hover,
#showSearch .itemList.hover {
  cursor: pointer;
  background: rgba(var(--ui-1), var(--opacity-7));
}

:host(:not(.no-hovermq))

:host(:not(.no-hovermq)) ::-webkit-input-placeholder:hover {
  font: var(--body-1);
  color: var(--text-secondary);
}
.itemList.active {
  background: rgba(var(--ui-1), var(--opacity-7));
}
/*multiline suggestions */
:host([multiline]) #showSearch .itemList {
  padding: 0.25rem 0.5rem;
}
:host([multiline]) #showSearch .itemList {
  padding: 0.55rem 0.5rem;
  height: 2rem;
  line-height: 2rem;
  max-height: 2rem;
  background: #fff;
  text-align:left;
  border-bottom: 1px solid rgb(237, 237, 237);
}
:host([multiline]) #showSearch .itemList div {
  padding: 0;
  height: 1rem;
  line-height: 1rem;
}
:host([multiline]) #showSearch .main_text {
  font: var(--body-1);
  color: #054752;
  font-weight:700;
}
:host([multiline]) #showSearch .secondary_text {
  font: var(--body-2);
  color:#708C91;
  font-weight:700;
}
.secondary_text .searchText {
  font: var(--title-2);
}
.main_text,
.secondary_text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
 
}
.empty-wrapper {
  padding: 1rem 0.5rem;
}
`;
