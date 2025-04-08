import './App.css';
import Banner from './components/banner/banner.js';
import Confirm from './components/confirm/confirm.js';
import Formulario from './components/formulario/index.js';
import './components/formulario/Formulario.css'

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
    </div>
  );
}

export default App;
