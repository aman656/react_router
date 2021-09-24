import {Route,Switch,Redirect} from 'react-router-dom'
import AddQuote from './components/pages/AddQuotes';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/Quotesdetail';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/Not Found';


function App() {
  return (
    <div>
      <Layout>
      <Switch>
         <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route> 

        <Route path="/quotes" exact>
          <AllQuotes/>

        </Route>
        <Route path="/quotes/:id">
          <QuoteDetail/>

        </Route>
        <Route path="/addquotes">
          <AddQuote/>

        </Route>
        <Route path="*">
          <NotFound/>

        </Route>

      </Switch>
      </Layout>

    </div>
  );
}

export default App;
