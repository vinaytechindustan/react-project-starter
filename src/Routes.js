import React ,{Component,Fragment } from 'react';
import {Login,Signup} from './containers';
import {Route,Switch,BrowserRouter} from 'react-router-dom';


export default class  Routes extends Component {

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} />
                    <Route path="/signup" component= {Signup }/>
                </Switch>
            </BrowserRouter>
        )
    }
}