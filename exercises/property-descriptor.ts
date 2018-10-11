import { Person } from '../interfaces';

// return firstName property descriptor
export const exercise1 = (person: Person): PropertyDescriptor => {
  return null;
};

// The firstName was assigned like this: person.firstName = 'Tomasz'
// What is the firstName's property descriptor?
export const exercise2 = (): PropertyDescriptor => {
  return null;
};

// The firstName was assigned like this: Object.defineProperty(person, 'firstName', { value: 'Tomasz' })
// What is the firstName's property descriptor?
export const exercise3 = (): PropertyDescriptor => {
  return null;
};
