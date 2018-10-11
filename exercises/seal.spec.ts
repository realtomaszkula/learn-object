import { exercise1, exercise2 } from './seal';
import { Person } from '../interfaces';

describe('seal', () => {
  it('should seal the person', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise1(person);

    expect(Object.isSealed(person)).toBe(true);
  });

  it('should return true for sealed object', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    Object.seal(person);

    expect(exercise2(person)).toBe(true);
  });
});
