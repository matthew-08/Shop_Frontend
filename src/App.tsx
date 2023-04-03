import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import ApplicationRoutes from './ApplicationRoutes';
import AccountContext from './components/AccountContext';

function App() {
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  return (
    <div className="App">
      <BrowserRouter>
        <AccountContext>
          <Navbar />
          <ApplicationRoutes />
        </AccountContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
