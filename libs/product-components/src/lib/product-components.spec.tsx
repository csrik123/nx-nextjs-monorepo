import { render } from '@testing-library/react';

import ProductComponents from './product-components';
import React from 'react';

describe('ProductComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductComponents />);
    expect(baseElement).toBeTruthy();
  });
});
