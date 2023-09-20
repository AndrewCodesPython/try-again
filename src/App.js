
import './App.css';
import Navbar from './components/Navbar/navbar.js';
import Header from './components/Header/Header.js';
import Form from './components/Form/form.js';
require('dotenv').config() 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Form />
    
  
    </div>
  );
}

export default App;
