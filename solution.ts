const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return undefined;
};

const getLength = (value: string | unknown[]): number => {
  return value.length;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface props {
  title: string;
  rating: number;
}

const filterByRating = (items: Array<props>): Array<props> => {
  return items.filter((item) => item.rating >= 4 && item.rating <= 5);
};

interface Users {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: Array<Users>): Array<Users> => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (val: Book) => {
  return `Title: ${val.title}, Author: ${val.author}, Published: ${
    val.publishedYear
  }, Available: ${val.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = (
  arr1: Array<number | string>,
  arr2: Array<number | string>
): Array<number | string> => {
  const flattenArray = [...arr1, ...arr2];
  let uniqueArr: Array<number | string> = [];
  const newObj: any = {};

  for (let i = 0; i < flattenArray.length; i++) {
    newObj[flattenArray[i]] = flattenArray[i];
  }

  uniqueArr = Object.values(newObj);

  return uniqueArr;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (arr: Array<Product>): number => {
  const totalPrice = arr.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity -
      (item.price * item.quantity * (item.discount ?? 0)) / 100,
    0
  );

  return totalPrice;
};
