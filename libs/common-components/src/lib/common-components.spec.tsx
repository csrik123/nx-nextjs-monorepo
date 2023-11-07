import { render } from '@testing-library/react';

import CommonComponents from './common-components';
import React from 'react';

describe('CommonComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonComponents />);
    expect(baseElement).toBeTruthy();
  });
});
