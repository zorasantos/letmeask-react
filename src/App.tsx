import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { Routes } from './routes';

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Header />
          <Routes />
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
