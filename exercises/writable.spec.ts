import exercise from './writable';
import { Person } from '../interfaces';

describe('non-writable age property', () => {
  it('should add non writable age property', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    const descriptor = Object.getOwnPropertyDescriptor(person, 'age');

    expect(descriptor.writable).toBe(false);
  });

  it('should set property to 18', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    expect(person.age).toBe(18);
  });
});
