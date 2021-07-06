import { Footer } from './components/Footer';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import { Header } from './components/Header';

function App() {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Header />
        <Routes />
        <GlobalStyles />
        <Footer />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
