import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Sequencer from '@/app/sequencer/page';

// Write a test suite for your component
describe('Stepboard', () => {
  // Write a test case for rendering the component
  it('renders the component', () => {
    render(<Sequencer />);

    // Check that the canvas is present
    const canvas = screen.getByRole('img'); // 'img' is the default role of a canvas
    expect(canvas).toBeDefined();
  });
});
