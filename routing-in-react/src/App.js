import React,{Suspense} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';


const AddQuote = React.lazy(()=>import('./components/pages/AddQuotes'))
const QuoteDetail = React.lazy(()=>import('./components/pages/Quotesdetail')) 
const NotFound = React.lazy(()=>import('./components/pages/Not Found'))


function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={
          <div className="centered"><LoadingSpinner></LoadingSpinner></div>
        }>
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
      </Suspense>
      </Layout>

    </div>
  );
}

export default App;
