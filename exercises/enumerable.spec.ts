import exercise from './enumerable';
import { Person } from '../interfaces';

describe('non-enumerable kink property', () => {
  it('should add non enumerable kink property', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    const descriptor = Object.getOwnPropertyDescriptor(person, 'kink');

    expect(descriptor.enumerable).toBe(false);
  });

  it('should set kink property to BDSM', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    expect(person.kink).toBe('BDSM');
  });
});
