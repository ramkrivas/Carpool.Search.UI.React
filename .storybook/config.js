import { configure } from '@kadira/storybook';


function loadStories() {
  require('../../blblacar.assignment/src/__tests__/Storybooks/stories');
}

configure(loadStories, module);

if (typeof window === 'object') {
  window.__storybook_stories__ = require('@kadira/storybook').getStorybook();
}
