import { exercise1, exercise2 } from './freeze';
import { Person } from '../interfaces';

describe('freeze', () => {
  it('should freeze the person', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise1(person);

    expect(Object.isFrozen(person)).toBe(true);
  });

  it('should return true for frozen object', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    Object.freeze(person);

    expect(exercise2(person)).toBe(true);
  });
});
