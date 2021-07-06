import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AdminRoom } from './pages/AdminRoom';
import { About } from './pages/About';
import { HomeLetMeAsk } from './pages/HomeLetMeAsk';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { TextEditor } from './pages//TextEditor';
import { ArticleById } from './pages/ArticleById/index';
import { Home } from './pages/Home';
// import { Header } from './components/Header';
import { ArticleList } from './pages/ArticleList';

export function Routes() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/letmeask" component={HomeLetMeAsk} />
        <Route path="/about" component={About} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom} />
        <Route path="/editor" component={TextEditor} />
        <Route path="/article/list" component={ArticleList} />
        <Route path="/articleById/:id" component={ArticleById} />
      </Switch>
    </BrowserRouter>
  );
}