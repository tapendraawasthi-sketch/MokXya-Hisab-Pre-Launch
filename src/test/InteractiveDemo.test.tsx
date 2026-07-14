import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { InteractiveDemoSection } from '../components/sections/InteractiveDemoSection';

describe('InteractiveDemoSection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Reset matchMedia mock just in case
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders predefined examples initially', () => {
    render(<InteractiveDemoSection />);
    
    expect(screen.getByText('Select an example:')).toBeInTheDocument();
    expect(screen.getByText('Ram lai NPR 10,000 ko saman udharo beche.')).toBeInTheDocument();
  });

  it('transitions through states deterministically on selection', () => {
    render(<InteractiveDemoSection />);
    
    // Select example
    const btn = screen.getByText('Ram lai NPR 10,000 ko saman udharo beche.');
    fireEvent.click(btn);
    
    // Should be in interpreting state
    expect(screen.getByText('Interpreting...')).toBeInTheDocument();
    
    // Advance timers to pass the simulated delay
    act(() => {
      vi.advanceTimersByTime(1200);
    });
    
    // Should be in preview state
    expect(screen.getByText("MokXya's Understanding:")).toBeInTheDocument();
    expect(screen.getByText('Credit Sale')).toBeInTheDocument();
    expect(screen.getByText('Awaiting confirmation')).toBeInTheDocument();
    
    // Click confirm
    const confirmBtn = screen.getByText('Confirm Transaction');
    fireEvent.click(confirmBtn);
    
    // Should be confirmed
    expect(screen.getByText('Confirmed & Recorded')).toBeInTheDocument();
    
    // Reset
    const resetBtn = screen.getByText('Try Another Example');
    fireEvent.click(resetBtn);
    
    // Back to initial
    expect(screen.getByText('Select an example:')).toBeInTheDocument();
  });

  it('does not make any real API calls', () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    render(<InteractiveDemoSection />);
    
    const btn = screen.getByText('Ram lai NPR 10,000 ko saman udharo beche.');
    fireEvent.click(btn);
    
    act(() => {
      vi.advanceTimersByTime(1200);
    });
    
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
