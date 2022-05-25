
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';

export default function App() {
  return (
  
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Todo/>}/>
     </Routes>
     </BrowserRouter>
  
  );
}


