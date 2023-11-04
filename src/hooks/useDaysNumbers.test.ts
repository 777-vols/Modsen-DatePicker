import { renderHook } from '@testing-library/react';

import CalendarDay from '@/components/CalendarDay';

import useDaysNumbers from './useDaysNumbers';

describe('Testing useDaysNumbers', () => {
  const onChange = jest.fn();
  it('Should work with default props', () => {
    const { result } = renderHook(() =>
      useDaysNumbers('month', 10, 2023, true, true, 4, 'red', 15, onChange, onChange)
    );
    expect(result.current).toBeInstanceOf(Array);
    expect(result.current.length).toBe(42);
    expect(result.current[0].type).toBe(CalendarDay);
  });
});
