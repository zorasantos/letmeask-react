// import { Footer } from './components/Footer';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { Routes } from './routes';

function App() {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Routes />
        {/* <Footer /> */}
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
