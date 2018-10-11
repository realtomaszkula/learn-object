import { exercise1, exercise2, exercise3 } from './property-descriptor';
import { Person } from '../interfaces';

describe('Property Descriptor', () => {
  it('should return firstName property descriptor', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    const descriptor = exercise1(person);

    expect(descriptor).toMatchObject({
      value: 'Tomasz',
      enumerable: true,
      writable: true,
      configurable: true
    });
  });

  it('should return property descriptor for dot notation assignment', () => {
    const person: Person = { firstName: 'Tomasz' };

    expect(exercise2()).toMatchObject(
      Object.getOwnPropertyDescriptor(person, 'firstName')
    );
  });

  it(`should return property descriptor for property set by Object.defineProperty(person, 'firstName', { value: 'Tomasz' }) `, () => {
    const person = {};

    Object.defineProperty(person, 'firstName', {
      value: 'Tomasz'
    });

    expect(exercise3()).toMatchObject(
      Object.getOwnPropertyDescriptor(person, 'firstName')
    );
  });
});
