import React from 'react';
import SearchPane from '../../../../blblacar.assignment/src//Containers/Trips-Card/trip-card';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('TripsCard', module)
  .add('default view', () => {
    return (
      <div className="SearchPaneSection">
        <TripCard searchQuery=''/>
      </div>
    );
  });

  storiesOf('TripsCard', module)
  .add('loading all the trips search result', () => {
    return (
      <div className="SearchPaneSection">
        <TripCard searchQuery='load'/>
      </div>
    );
  });
