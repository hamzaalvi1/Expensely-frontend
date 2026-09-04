import { createContext, useContext } from 'react';
import type { DataTableAdapter } from './types';

interface DataTableContextValue {
  adapter: DataTableAdapter;
}

const DataTableContext = createContext<DataTableContextValue | null>(null);

export const DataTableProvider = DataTableContext.Provider;

export const useDataTableContext = () => {
  const context = useContext(DataTableContext);

  if (!context) {
    throw new Error('DataTable compound components must be used inside DataTable.');
  }

  return context;
};
