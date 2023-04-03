import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import ApplicationRoutes from './ApplicationRoutes';
import AccountContext from './components/AccountContext';
import CartContext from './components/CartContext';

function App() {
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  return (
    <div className="App">
      <BrowserRouter>
        <AccountContext>
          <CartContext>
            <Navbar />
            <ApplicationRoutes />
          </CartContext>
        </AccountContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
