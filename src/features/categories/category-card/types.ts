import type { ReactNode } from 'react';

export interface CategoryCardData {
  id: string;
  name: string;
  icon: ReactNode;
  isDefault?: boolean;
}

export interface CategoryCardProps {
  category: CategoryCardData;
}
