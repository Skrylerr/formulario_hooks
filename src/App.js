import { useState } from 'react';
import './App.css';
import FormHooks from './Components/FormHooks';
import Resultado from './Components/Resultado';

function App() {
  const [estado, setEstado] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  return (
    <div className="App">
      <FormHooks datos={estado} setDatos={setEstado}/>
      <Resultado data={estado}/>
    </div>
  );
}

export default App;
