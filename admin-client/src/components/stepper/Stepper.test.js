import { render, screen } from '@testing-library/react';
import Stepper from './Stepper';

describe('Stepper', () => { 
  it('displays steps correctly', () => {
    render(<Stepper steps={['Step 1', 'Step 2']}>Content</Stepper>);
    const step1 = screen.getByText('Step 1');
    const step2 = screen.getByText('Step 2');
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
  });
  
  it('displays content when activeStep is less than the number of steps', () => {
    render(<Stepper steps={['Step 1', 'Step 2']} activeStep={1}>Content</Stepper>);
    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
  });
});
