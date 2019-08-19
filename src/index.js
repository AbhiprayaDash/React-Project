import React from 'react';
import ReactDOM from 'react-dom';
import Header from './App';
import company from './components/companies';
import jobs from './components/jobs';
import {BrowserRouter,Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>

<div>
    
    <Route exact path="/" component={Header}></Route>
    <Route path="/companies" component={company}></Route>
    <Route path="/startups" component={Header}></Route>
    <Route path="/skills" component={Header}></Route>
    <Route path="/jobs" component={jobs}></Route>


</div>
</BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
