import { exercise1, exercise2 } from './prop-in-object';
import { Person } from '../interfaces';

describe('prop in object', () => {
  it('should check if firstName prop is in the specified person object or in its prototype chain (with inheritance)', () => {
    const parent = {
      firstName: 'Tomasz'
    };

    const person: Person = Object.create(parent);

    expect(exercise1(person)).toBe(false);
  });

  it('should check if firstName prop is in the object (no inheritance)', () => {
    const parent = {
      firstName: 'Tomasz'
    };

    const person: Person = Object.create(parent);

    expect(exercise2(person)).toBe(true);
  });
});
