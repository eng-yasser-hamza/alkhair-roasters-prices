export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'فستق حلبي',
    price: 120000,
    category: 'savory'
  },
  {
    id: 2,
    name: 'كاجو',
    price: 95000,
    category: 'savory'
  },
  {
    id: 3,
    name: 'لوز',
    price: 85000,
    category: 'savory'
  },
  {
    id: 4,
    name: 'شوكولا داكنة',
    price: 70000,
    category: 'chocolate'
  }
];