import type { CategoryCardData } from '@/features/categories/category-card/types';

export const defaultCategories: CategoryCardData[] = [
  { id: 'salary', name: 'Salary', type: 'INCOME', icon: 'FaBriefcase', isDefault: true },
  { id: 'freelance', name: 'Freelance', type: 'INCOME', icon: 'FaLaptop', isDefault: true },
  { id: 'investments', name: 'Investments', type: 'INCOME', icon: 'FaChartLine', isDefault: true },
  { id: 'gifts', name: 'Gifts', type: 'INCOME', icon: 'FaGift', isDefault: true },
  { id: 'other-income', name: 'Other Income', type: 'INCOME', icon: 'FaCirclePlus', isDefault: true },
  { id: 'food-dining', name: 'Food & Dining', type: 'EXPENSE', icon: 'FaUtensils', isDefault: true },
  { id: 'groceries', name: 'Groceries', type: 'EXPENSE', icon: 'FaCartShopping', isDefault: true },
  { id: 'transportation', name: 'Transportation', type: 'EXPENSE', icon: 'FaCar', isDefault: true },
  { id: 'rent', name: 'Rent', type: 'EXPENSE', icon: 'FaHouse', isDefault: true },
  { id: 'utilities', name: 'Utilities', type: 'EXPENSE', icon: 'FaBolt', isDefault: true },
  { id: 'entertainment', name: 'Entertainment', type: 'EXPENSE', icon: 'FaFilm', isDefault: true },
  { id: 'shopping', name: 'Shopping', type: 'EXPENSE', icon: 'FaBagShopping', isDefault: true },
  { id: 'healthcare', name: 'Healthcare', type: 'EXPENSE', icon: 'FaHeart', isDefault: true },
  { id: 'education', name: 'Education', type: 'EXPENSE', icon: 'FaBookOpen', isDefault: true },
  { id: 'travel', name: 'Travel', type: 'EXPENSE', icon: 'FaPlane', isDefault: true },
  { id: 'personal-care', name: 'Personal Care', type: 'EXPENSE', icon: 'FaWandSparkles', isDefault: true },
  { id: 'other-expense', name: 'Other Expense', type: 'EXPENSE', icon: 'FaEllipsis', isDefault: true },
];
