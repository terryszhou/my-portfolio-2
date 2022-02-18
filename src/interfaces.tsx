export interface User {
  name: string,
  age: number,
  country: string,
  address: Address
};

export interface Address {
  street: string,
  number: number,
};