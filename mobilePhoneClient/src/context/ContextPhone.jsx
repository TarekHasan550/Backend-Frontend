import React from 'react'
const phoneContext = React.createContext();
const PhoneProvider = phoneContext.Provider;
export default function ContextPhone({ chldren }) {
const [phones, setPhones] = React.useState([]);
  return (
    <PhoneProvider value={{phones, setPhones}}>
      {chldren}

    </PhoneProvider>
  )
}

export const usePhoneContext = () => {
  return React.useContext(phoneContext);
}
