import React, { createContext, useState } from 'react';

export const SharedContext = createContext();

export const SharedContextProvider = ({ children }) => {
  const [data, setData] = useState('');

  return (
    <SharedContext.Provider value={{ data, setData }}>
      {children}
    </SharedContext.Provider>
  );
};
