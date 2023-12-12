import { render, screen, fireEvent } from '@testing-library/react';
import Main from '../../src/components/Main'; 

describe('Main component', () => {
  test('renders random term on button click', () => {
    render(<Main />);
    const button = screen.getByText('Random Term');
    fireEvent.click(button);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/definition/i)).toBeInTheDocument();
  });

});
