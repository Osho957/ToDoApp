
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Corousel from './components/Corousel';
import Todo from './components/Todo';

export default function App() {
  return (
  
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Todo/>}/>
       <Route path="/slides" element={<Corousel/>}/>
     </Routes>
     </BrowserRouter>
  
  );
}


