import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Done from './done';
import Register from './register';
import Doctorslist from './doctorslist';
import Home from './home';
import Hospitalslist from './hospitalslist';
import PostForm from './PostForm';
//import { render } from '@testing-library/react';

const Main=()=>(

            <Switch>
               <Route path="/create/hospital" component={PostForm}/>
               <Route path="/create/hospital" component={PostForm}/>
                <Route path="/done" component={Done}/>
                <Route path="/register" component={Register}/>
                <Route path="/Doctor" component={Doctorslist}/>
                <Route path="/hospital" component={Hospitalslist}/>
                {/* <Route path="/register" component={Register}/> */}

            </Switch>
)
/*exact= /
 /Home
    /home/login
*/
export default Main;