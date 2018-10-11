import exercise from './configurable';
import { Person } from '../interfaces';

describe('non-configurable favoriteLanguage property', () => {
  it('should add non-configurable favoriteLanguage property', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    const descriptor = Object.getOwnPropertyDescriptor(
      person,
      'favoriteLanguage'
    );

    expect(descriptor.configurable).toBe(false);
  });

  it('should set favoriteLanguage property to JavaScript', () => {
    const person: Person = {
      firstName: 'Tomasz'
    };

    exercise(person);

    expect(person.favoriteLanguage).toBe('JavaScript');
  });
});
