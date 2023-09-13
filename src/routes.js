import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;