"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface ActionQueueContextType {
  // Define the shape of your context here
  actionQueue: any[];
  addAction: (action: any) => void;
}

const ActionQueueContext = createContext<ActionQueueContextType | undefined>(undefined);

export function ActionQueueProvider({ children }: { children: ReactNode }) {
  const [actionQueue, setActionQueue] = useState<any[]>([]);

  const addAction = (action: any) => {
    setActionQueue([...actionQueue, action]);
  };

  return (
    <ActionQueueContext.Provider value={{ actionQueue, addAction }}>
      {children}
    </ActionQueueContext.Provider>
  );
}

export function useActionQueue() {
  const context = useContext(ActionQueueContext);
  if (!context) {
    throw new Error('useActionQueue must be used within an ActionQueueProvider');
  }
  return context;
}
