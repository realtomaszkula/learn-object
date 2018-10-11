import exercise from './immutable';
import { Person } from '../interfaces';

describe('immutable significantOther property', () => {
  it('should add immutable significantOther property', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    const descriptor = Object.getOwnPropertyDescriptor(
      person,
      'significantOther'
    );

    expect(descriptor.configurable).toBe(false);
  });

  it('should set significantOther property to Magda', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    expect(person.significantOther).toBe('Magda');
  });
});
