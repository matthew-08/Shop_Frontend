import './global.css';
import { useQuery } from 'urql';
import { Text } from '@chakra-ui/react';
import Routes from './Routes/Routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
