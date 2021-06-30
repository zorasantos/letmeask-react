import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { AdminRoom } from './pages/AdminRoom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { TextEditor } from './pages//TextEditor';
import { ArticleList } from './pages/ArticleList';
import { ArticleById } from './pages/ArticleById';

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
            <Route path="/editor" component={TextEditor} />
            <Route path="/article/list" component={ArticleList} />
            <Route path="/articleById/:id" component={ArticleById} />
          </Switch>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
