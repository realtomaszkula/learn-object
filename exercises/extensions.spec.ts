import { exercise1, exercise2 } from './extensions';
import { Person } from '../interfaces';

describe('extensions', () => {
  it('should prevent person object extensions', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise1(person);

    expect(Object.isExtensible(person)).toBe(false);
  });

  it('should return false for object that cannot be extended', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    Object.preventExtensions(person);

    expect(exercise2(person)).toBe(false);
  });
});
