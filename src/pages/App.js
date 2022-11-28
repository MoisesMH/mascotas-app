import MascotasApp from './HomePage';
import { Route, Routes, Navigate, Switch } from 'react-router-dom';
import NosotrosPage from './NosotrosPage';
import InicioSesionPage from './InicioSesionPage';
import PostPage from './PostPage';
import SearchPage from './SearchPage';
import RegistroPage from './RegistroPage';
import CrearPublicacion from './CrearPublicacion';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MascotasApp />} />
        <Route path='/HomePage' element={<MascotasApp />} />
        <Route path="/NosotrosPage" element={<NosotrosPage />} />
        <Route path='/IniciarSesionPage' element={<InicioSesionPage />} />
        <Route path='/RegistroPage' element={<RegistroPage />} />
        <Route path='/SearchPage' element={<SearchPage />} />
        <Route path='/adopta/4' element={<PostPage />} />
        <Route path='/CrearPublicacion' element={<CrearPublicacion />} />
      </Routes>
    </div>
  );
}

export default App;
