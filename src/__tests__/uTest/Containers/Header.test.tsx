import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../Containers/Header/Header';
import {IntersectionObserver} from '../Mocks/mockInterSectionObserver';

IntersectionObserver

describe('components', () => {
  describe('header', () => {

    test('renders logo in the header', () => {
      render(<Header />);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', '../../logo.svg');
        expect(logo).toHaveAttribute('alt', 'blablacar logo');
    });

    
  });
});

