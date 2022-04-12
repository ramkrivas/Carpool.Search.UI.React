/* -------------------------------------------------------------------------------------------------
Helper or Utilities functions used in the blabla-search webcomponent
------------------------------------------------------------------------------------------------- */

const searchHighlight = (fullText: String, value: String) => {
  let highLightedHtml;

  if (value) {
    const matchStart = fullText.toLowerCase().indexOf(value.toLowerCase());
    const matchEnd = matchStart + value.length - 1;
    const beforeMatch = fullText.slice(0, matchStart);
    const matchText = fullText.slice(matchStart, matchEnd + 1);
    const afterMatch = fullText.slice(matchEnd + 1);
    highLightedHtml = `${beforeMatch}<span class="searchText">${matchText}</span>${afterMatch}`;
  }
  return highLightedHtml;
};

export const getSearchResult = (
  item: HTMLElement,
  fullText: String,
  searchText: String
) => {
  if (fullText.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
    item.innerHTML = searchHighlight(fullText, searchText);
  } else {
    item.innerHTML = `<span class="name">${fullText}</span>`;
  }
};
