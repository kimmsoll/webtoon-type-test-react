import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from './routes/intro/intro';
import Main from './routes/main/main';
import { questionList } from './data';
import { selectList } from './data';
import { resultList } from './data';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Intro/>
      </Route>
      <Route path="/question">
        <Main 
        question={questionList} 
        selects={selectList}
        result={resultList}
        />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
