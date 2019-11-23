import React from 'react';
import ReactDOM from 'react-dom';
// import { useState, useEffect } from 'react';
import LoginPage from './Login';
import FrontPage from './main';
import SignUp from './SignUp';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';


function Page() {
    // const [data,setData] = useState("Loading...");

//    useEffect(() => {
//        async function fetchRandom() {
//           let response = await fetch('http://localhost:3001/random');
//           let data = await response.json(); 
//        setData(data.msg);
//        }
//        fetchRandom();
//   },[data]);

    return (
    <Router history={createBrowserHistory()}>
        <div className='Page'>
            <Route exact path ='/' component={FrontPage}></Route> 
            <Route path='/Login' component={LoginPage}></Route>
            <Route path='/SignUp' component={SignUp}></Route>

        </div>
    </Router>
    );
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
    );