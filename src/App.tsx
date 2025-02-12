//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';

import  Apps from './App';
import EventDetails from './Eventdetails.tsx';  // ✅ Proper Import


function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      
      {/* ✅ Include the EventDetails component */}
      
      <EventDetails />
    </>
  );
}

export default App;
