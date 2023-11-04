import dateInputCheckHelper from './dateInputCheckHelpers';

describe('Testing dateInputCheckHelper', () => {
  it('Should work with correct input value', () => {
    const result = dateInputCheckHelper('10/10/2023', new Date(2023, 0, 1), new Date(2024, 0, 1));
    expect(result).toBe(true);
  });

  it('Should not work with incorrect day value', () => {
    const result = dateInputCheckHelper('105/10/2023', new Date(2023, 0, 1), new Date(2024, 0, 1));
    expect(result).toBe(false);
  });

  it('Should not work with incorrect month value', () => {
    const result = dateInputCheckHelper('10/13/2023', new Date(2023, 0, 1), new Date(2024, 0, 1));
    expect(result).toBe(false);
  });

  it('Should not work with incorrect year value', () => {
    const result = dateInputCheckHelper('10/10/20253', new Date(2023, 0, 1), new Date(2024, 0, 1));
    expect(result).toBe(false);
  });

  it('Should not work with date lower than minDate', () => {
    const result = dateInputCheckHelper('10/10/2021', new Date(2023, 0, 1), new Date(2024, 0, 1));
    expect(result).toBe(false);
  });

  it('Should not work with date higher than maxDate', () => {
    const result = dateInputCheckHelper('10/10/2025', new Date(2023, 0, 1), new Date(2024, 0, 1));
    expect(result).toBe(false);
  });
});
