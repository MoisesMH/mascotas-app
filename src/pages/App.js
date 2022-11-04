import MascotasApp from './HomePage';
import { Route, Routes, Navigate, Switch } from 'react-router-dom';
import NosotrosPage from './NosotrosPage';
import InicioSesionPage from './InicioSesionPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<MascotasApp />} />
      <Route path='/HomePage' element={<MascotasApp />} />
      <Route exact path="/NosotrosPage" element={<NosotrosPage />} />
      <Route path='/IniciarSesionPage' element={<InicioSesionPage /> } />
      </Routes>
    </div>
  );
}

export default App;
