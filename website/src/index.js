import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import LoginPage from './Login';
import FrontPage from './main';
import SignUp from './SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';


function Page() {
    const [data,setData] = useState("Loading...");

   useEffect(() => {
       async function fetchRandom() {
          let response = await fetch('http://localhost:9000/testAPI');
          let newData = await response.text(); 
       setData(newData);
       }
       fetchRandom();
  },[]);

    return (
    <BrowserRouter history={createBrowserHistory()}>
        <div className='Page'>
        <Switch>
            <Route exact path ='/' render={() => <FrontPage data={data} setData={setData} />} />
            <Route path='/Login' component={LoginPage}/>
            <Route path='/SignUp' component={SignUp}/>
        </Switch>
        </div>
    </BrowserRouter>
    );
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
    );