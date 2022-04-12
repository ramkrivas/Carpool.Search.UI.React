import React from 'react';
import Header from '../../../../blblacar.assignment/src/Containers/Header';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <div className="headerSection">
        <Header/>
      </div>
    );
  });
