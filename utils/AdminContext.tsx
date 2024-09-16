import React, { createContext, useContext, useState, ReactNode } from 'react';

type AdminContextType = {
  isAdminMode: boolean;
  setIsAdminMode: (isAdminMode: boolean) => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
    const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
    
    const value = {
        isAdminMode,
        setIsAdminMode,
      };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminMode = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminMode must be used within an AdminProvider');
  }
  return context;
};
