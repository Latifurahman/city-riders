import './App.css';
import Home from './component/Home/Home';
import ridersData from './component/data/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [riders, setRiders] = useState([]);
  useEffect(() =>{
    setRiders(ridersData);
    console.log(ridersData);
  }, [])
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
