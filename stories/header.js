import React from 'react';
// import Header from './files/Header';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <div className="todoapp">
        {/* <Header/> */}
      </div>
    );
  });
