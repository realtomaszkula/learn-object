import { Person } from '../interfaces';
import exercise1 from './delete';

describe('delete prop', () => {
  it('should delete firstName prop', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise1(person);

    expect('firstName' in person).toBe(false);
  });
});
