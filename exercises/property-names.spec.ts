import { exercise1, exercise2 } from './property-names';
import { Person } from '../interfaces';

describe('property names', () => {
  it('should return enumerable names', () => {
    const person = {
      firstName: 'Tomasz'
    };

    Object.defineProperty(person, 'lastName', {
      enumerable: false,
      value: 'Kula'
    });

    expect(exercise1(person)).toMatchObject(['firstName']);
  });

  it('should return enumerable and non-enumerable names', () => {
    const person = {
      firstName: 'Tomasz'
    };

    Object.defineProperty(person, 'lastName', {
      enumerable: false,
      value: 'Kula'
    });

    expect(exercise2(person)).toMatchObject(['firstName', 'lastName']);
  });
});
