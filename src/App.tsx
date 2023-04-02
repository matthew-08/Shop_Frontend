import './global.css';
import { useQuery } from 'urql';
import { Text } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import ApplicationRoutes from './Routes/ApplicationRoutes';

const AuthContext = createContext({});

interface User {
  email: string;
  id: string;
}

function App() {
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
          <Navbar />
          <ApplicationRoutes />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
