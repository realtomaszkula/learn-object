import { Person } from '../interfaces';

// seal the person object
export const exercise1 = (person: Person): void => {};

// check if person object is frozen
export const exercise2 = (person: Person): boolean => {
  return null;
};

// Oral exercise: What does it mean that the object is sealed?
// It is non-extensible and all of its properties are non-configurable (but are writable)
