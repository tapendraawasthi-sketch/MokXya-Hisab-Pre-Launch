import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { InteractiveDemoSection } from '../components/home/demo/InteractiveDemoSection';

describe('Interactive Demo Section', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders initial ready state', () => {
    render(<InteractiveDemoSection />);
    expect(screen.getByText(/See how MokXya turns everyday language/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Process Example/i })).toBeInTheDocument();
  });

  it('progresses through state machine on interaction', async () => {
    render(<InteractiveDemoSection />);
    
    // Start processing
    const startBtn = screen.getByRole('button', { name: /Process Example/i });
    fireEvent.click(startBtn);
    
    // Interpreting state
    expect(screen.getByText(/Interpreting business event/i)).toBeInTheDocument();
    
    // Advance timer to trigger preview
    act(() => {
      vi.advanceTimersByTime(1200);
    });
    
    // Preview state
    expect(screen.getByText('Structured Preview')).toBeInTheDocument();
    
    // Confirm action
    const confirmBtn = screen.getByRole('button', { name: /Confirm Illustrative Entry/i });
    fireEvent.click(confirmBtn);
    
    // Confirmed state
    expect(screen.getByText('Example confirmed')).toBeInTheDocument();
    expect(screen.getByText(/Nothing is recorded until you confirm/i)).toBeInTheDocument();
    
    // Reset action
    const resetBtn = screen.getByRole('button', { name: /Reset/i });
    fireEvent.click(resetBtn);
    
    // Back to ready state
    expect(screen.getByRole('button', { name: /Process Example/i })).toBeInTheDocument();
  });

  it('allows language and example switching', () => {
    render(<InteractiveDemoSection />);
    
    const englishRadio = screen.getByRole('radio', { name: /English/i });
    fireEvent.click(englishRadio);
    expect(englishRadio).toBeChecked();

    const select = screen.getByLabelText(/Select a transaction example/i);
    fireEvent.change(select, { target: { value: 'cash-expense' } });
    
    // Should show cash expense english text
    expect(screen.getByText(/"Paid the shop electricity bill of NPR 2,500 in cash."/i)).toBeInTheDocument();
  });
});
