import {
  FaBowlFood,
  FaBus,
  FaCar,
  FaCartShopping,
  FaMoneyBillWave,
  FaBagShopping,
} from 'react-icons/fa6';

export const expenseCategories = [
  { id: 'food', name: 'Food', icon: <FaBowlFood size={20} />, isDefault: true },
  { id: 'groceries', name: 'Groceries', icon: <FaCartShopping size={20} />, isDefault: true },
  { id: 'shopping', name: 'Shopping', icon: <FaBagShopping size={20} /> },
  { id: 'car', name: 'Car', icon: <FaCar size={20} /> },
  { id: 'transport', name: 'Transport', icon: <FaBus size={20} /> },
];

export const incomeCategories = [
  { id: 'salary', name: 'Salary', icon: <FaMoneyBillWave size={20} />, isDefault: true },
  { id: 'freelance', name: 'Freelance', icon: <FaBagShopping size={20} /> },
];
