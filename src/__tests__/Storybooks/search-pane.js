import React from 'react';
import SearchPane from '../../../../blblacar.assignment/src//Containers/Search-Pane/searchPane';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('SearchPane', module)
  .add('default view', () => {
    return (
      <div className="SearchPaneSection">
        <SearchPane/>
      </div>
    );
  });
