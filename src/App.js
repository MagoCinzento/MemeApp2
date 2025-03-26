
import './App.css';
import Banner from './components/banner.js';
import CampoTexto from './components/login.js';
import Confirm from './components/confirm.js';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite o seu nome..."/>
      <CampoTexto label="Email" placeholder="Digite o seu email..."/>
      <CampoTexto label="Senha" placeholder="Digite a sua senha..."/>
      <Confirm/>
    </div>
  );
}

export default App;
