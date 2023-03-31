import './global.css';
import { useQuery } from 'urql';
import { Text } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApplicationRoutes from './Routes/ApplicationRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ApplicationRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
