import { render } from '@testing-library/react';
import { Badge } from '@/components/ui/Badge';
import '@testing-library/jest-dom/extend-expect'; // import the package here

describe('Badge component', () => {
  it('should render with the correct color class', () => {
    const { getByText } = render(<Badge color="red">Test</Badge>);
    expect(getByText('Test')).toHaveClass('bg-red-100 text-red-800');
  });

  it('should render with the correct text', () => {
    const { getByText } = render(<Badge color="sky">Hello</Badge>);
    expect(getByText('Hello')).toBeInTheDocument(); // toBeInTheDocument should work now
  });
});
