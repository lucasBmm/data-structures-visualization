import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
    it('should render correctly', () => {
        const { container } = render(<Footer />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should contain a div element', () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('div')).toBeInTheDocument();
    });

    it('should contain a p element', () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('p')).toBeInTheDocument();
    });
});

export {}