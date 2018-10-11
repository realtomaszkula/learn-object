import { Person } from '../interfaces';

// prevent person object extensions
export const exercise1 = (person: Person): void => {
  Object.preventExtensions(person);
};

// check if person object is extensible
export const exercise2 = (person: Person): boolean => {
  return null;
};
