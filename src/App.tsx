import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { Routes } from './routes';

function App() {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
