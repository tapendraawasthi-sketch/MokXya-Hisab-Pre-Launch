import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Pilot from '../pages/Pilot';
import { BrowserRouter } from 'react-router-dom';

// Mock getPilotConfig and submitApplication
import * as pilotConfigModule from '../features/pilot/pilotConfig';
import * as pilotSubmissionModule from '../features/pilot/pilotSubmission';

const renderPilot = () => {
  return render(
    <BrowserRouter>
      <Pilot />
    </BrowserRouter>
  );
};

describe('Pilot Page Configuration Modes', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders Applications opening soon in unavailable mode', () => {
    vi.spyOn(pilotConfigModule, 'getPilotConfig').mockReturnValue({ mode: 'unavailable' });
    renderPilot();
    
    expect(screen.getByText('Applications opening soon')).toBeInTheDocument();
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
  });

  it('renders form in endpoint mode with correct button label', () => {
    vi.spyOn(pilotConfigModule, 'getPilotConfig').mockReturnValue({ mode: 'endpoint', endpointUrl: 'https://test.com' });
    renderPilot();
    
    expect(screen.getByRole('button', { name: /Send pilot application/i })).toBeInTheDocument();
  });

  it('renders form in whatsapp mode with correct button label', () => {
    vi.spyOn(pilotConfigModule, 'getPilotConfig').mockReturnValue({ mode: 'whatsapp', whatsappNumber: '9800000000' });
    renderPilot();
    
    expect(screen.getByRole('button', { name: /Continue in WhatsApp/i })).toBeInTheDocument();
  });

  it('renders form in email mode with correct button label', () => {
    vi.spyOn(pilotConfigModule, 'getPilotConfig').mockReturnValue({ mode: 'email', contactEmail: 'test@mokxya.com' });
    renderPilot();
    
    expect(screen.getByRole('button', { name: /Continue by email/i })).toBeInTheDocument();
  });
});

describe('Pilot Validation', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(pilotConfigModule, 'getPilotConfig').mockReturnValue({ mode: 'endpoint', endpointUrl: 'https://test.com' });
  });

  it('shows validation errors when submitting empty form', async () => {
    renderPilot();
    
    const submitBtn = screen.getByRole('button', { name: /Send pilot application/i });
    fireEvent.click(submitBtn);
    
    // Check error summary
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('There is a problem')).toBeInTheDocument();
    
    // Check some specific validation messages
    expect(screen.getAllByText('Owner name is required.')[0]).toBeInTheDocument();
    expect(screen.getAllByText('You must consent to be contacted.')[0]).toBeInTheDocument();
  });

  it('clears specific error when field is typed in', () => {
    renderPilot();
    
    const submitBtn = screen.getByRole('button', { name: /Send pilot application/i });
    fireEvent.click(submitBtn);
    
    expect(screen.getAllByText('Owner name is required.')[0]).toBeInTheDocument();
    
    const nameInput = screen.getByLabelText(/Owner Name \*/i);
    fireEvent.change(nameInput, { target: { value: 'Ram' } });
    
    expect(screen.queryByText('Owner name is required.')).not.toBeInTheDocument();
  });

  it('handles successful endpoint submission', async () => {
    vi.spyOn(pilotSubmissionModule, 'submitApplication').mockResolvedValue({ success: true, message: 'Application sent' });
    renderPilot();
    
    // Fill out valid form
    fireEvent.change(screen.getByLabelText(/Owner Name \*/i), { target: { value: 'Ram' } });
    fireEvent.change(screen.getByLabelText(/Phone Number \*/i), { target: { value: '9800000000' } });
    fireEvent.change(screen.getByLabelText(/Business Name \*/i), { target: { value: 'Sharma Traders' } });
    fireEvent.change(screen.getByLabelText(/City \*/i), { target: { value: 'Kathmandu' } });
    fireEvent.change(screen.getByLabelText(/Business Type \*/i), { target: { value: 'retail' } });
    
    // Radio buttons
    fireEvent.click(screen.getByLabelText('2–5'));
    fireEvent.click(screen.getByLabelText('Nepali'));
    
    // Selects
    fireEvent.change(screen.getByLabelText(/Current Record Method \*/i), { target: { value: 'Notebook or register' } });
    fireEvent.change(screen.getByLabelText(/Maintain Inventory\? \*/i), { target: { value: 'Yes' } });
    fireEvent.change(screen.getByLabelText(/Sell on Credit\? \*/i), { target: { value: 'Often' } });
    
    // Checkbox
    fireEvent.click(screen.getByLabelText(/I agree that MokXya may use these details/i));
    
    const submitBtn = screen.getByRole('button', { name: /Send pilot application/i });
    
    await act(async () => {
      fireEvent.click(submitBtn);
    });
    
    expect(screen.getByText('Application sent')).toBeInTheDocument();
    expect(screen.getByText('Your founding-pilot details were sent through the configured application channel.')).toBeInTheDocument();
  });
});
